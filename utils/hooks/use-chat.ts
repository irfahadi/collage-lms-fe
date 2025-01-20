import { useState, useEffect } from 'react'
import { io, Socket } from 'socket.io-client'
import axios from 'axios'
import Cookies from 'js-cookie'
import { getConsultationDetail } from '@utils/services/consultation'

interface ChatMessage {
  id: string
  me: boolean
  name: string
  message: string
  user_id?: string
  reply_consult_chat_id: string | null
  timestamp: number
}

interface UseChatParams {
  consultRequestId: string
  userId: string
}

interface Member {
  user_id: string
}

const useChat = ({ consultRequestId, userId }: UseChatParams) => {
  const [chat, setChat] = useState<string>('')
  const [chats, setChats] = useState<ChatMessage[]>([])
  const [activeUsers, setActiveUsers] = useState<string[]>([])
  const [userChat, setUserChat] = useState<any>({})
  const [members, setMembers] = useState<string[]>([])
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    if (userId && consultRequestId) {
      const token = Cookies.get('access_token_chat')
      const newSocket = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL, {
        auth: { token },
        query: { userId },
      })

      setSocket(newSocket)

      const fetchMembers = async () => {
        try {
          const res = await getConsultationDetail(consultRequestId)
          const membersData: Member[] = res?.data?.members || []
          setMembers(membersData.map((user) => user.user_id))
          const userChat = membersData.find(
            (member) => member.user_id !== userId
          )
          if (userChat) {
            setUserChat(userChat)
          }
        } catch (error) {
          console.error('Error fetching members:', error)
        }
      }

      if (token) {
        fetchMembers()
      }

      newSocket.on('connect', () => {
        console.log('Connected to the server')
        console.log('Request ID: ', consultRequestId)
        newSocket.emit('joinRoom', { token, room: consultRequestId })

        newSocket.on('success', (message: string) => console.log(message))
        newSocket.on('error', (err: Error) => console.error(err))

        newSocket.on('message', (chat: ChatMessage) => {
          setChats((prevChats) => {
            if (!prevChats.some((item) => item.id === chat.id)) {
              return [
                ...prevChats,
                {
                  id: chat.id,
                  me: userId === chat.user_id,
                  name: `User ID: ${chat.user_id}`,
                  message: chat.message,
                  reply_consult_chat_id: chat.reply_consult_chat_id,
                  timestamp: chat.timestamp,
                },
              ]
            }
            return prevChats
          })
        })

        newSocket.on('presence', (users: string[]) => {
          setActiveUsers(users)
          console.log('Active users:', users)
        })

        newSocket.on(
          'userJoined',
          ({ userId, room }: { userId: string; room: string }) =>
            console.log(`User ${userId} joined room: ${room}`)
        )
        newSocket.on(
          'userLeft',
          ({ userId, room }: { userId: string; room: string }) =>
            console.log(`User ${userId} left room: ${room}`)
        )
      })

      return () => {
        newSocket.disconnect()
      }
    }
  }, [consultRequestId, userId])

  const sendChat = () => {
    if (chat.trim() && socket) {
      const token = Cookies.get('access_token_chat')
      socket.emit('message', {
        token,
        room: consultRequestId,
        message: chat,
        reply_consult_chat_id: null,
      })
      setChat('')
    }
  }

  const isOnline = (member: string): string =>
    activeUsers.includes(member.toString()) ? 'Online' : 'Offline'

  const dateFormatter = (timestamp: number): string => {
    const formatter = new Intl.DateTimeFormat('id-ID', {
      dateStyle: 'short',
      timeStyle: 'short',
    })
    return formatter.format(new Date(timestamp))
  }

  return {
    chat,
    setChat,
    userChat,
    chats,
    activeUsers,
    members,
    sendChat,
    isOnline,
    dateFormatter,
  }
}

export default useChat
