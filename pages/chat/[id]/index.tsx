import { MaButton } from '@components/atoms'
import MainLayout from '@components/layout/main'
import { RichTextBox } from '@components/molecules'
import Image from 'next/image'
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CloseOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'
import LayoutWithPatient from '@components/layout/with-patient'
import { ModalAditionalRequest } from '@components/organism'
import useChat from '@utils/hooks/use-chat'
import { getPatientDetail } from '@utils/services/patients'
import { useAuth } from '@store/auth'
import { usePatient } from '@store/patient'

const formatDate = (timestamp: number): string => {
  const formatter = new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' })
  return formatter.format(new Date(timestamp))
}

export const TimeDivider = ({ date }: { date: string }) => (
  <Box
    sx={{
      backgroundColor: '#2273E21A',
      color: '#212121',
      width: 'fit-content',
      py: 0.5,
      px: 1,
      mx: 'auto',
      my: 2,
    }}
  >
    {date}
  </Box>
)

type chatItemType = {
  isMe?: boolean
  name: string
  time: string
  message: string
  attachments?: any[]
}

export const ChatItem = ({
  isMe = false,
  name,
  time = '00:00',
  message,
  attachments = [],
}: chatItemType) => (
  <Stack
    direction={isMe ? 'row-reverse' : 'row'}
    my={1}
    spacing={1}
    alignItems="flex-start"
  >
    <Avatar
      sx={{
        width: 32,
        height: 32,
      }}
    >
      {name.charAt(0).toUpperCase()}
    </Avatar>
    <Box>
      <Typography
        variant="subtitle2"
        sx={{ pb: 0, mb: 1, textAlign: isMe ? 'right' : 'left' }}
      >
        {isMe ? '' : name} <span style={{ fontSize: 14 }}>{time}</span>{' '}
        {isMe ? 'You' : ''}
      </Typography>
      <Box
        sx={{
          maxWidth: '400px',
          backgroundColor: 'white',
          px: 2,
          py: 2,
          borderRadius: '10px',
          borderTopLeftRadius: isMe ? '10px' : '0',
          borderTopRightRadius: isMe ? '0' : '10px',
          '& p': {
            padding: '0',
            margin: '0',
          },
        }}
        dangerouslySetInnerHTML={{
          __html: message,
        }}
      ></Box>
      {attachments?.length > 0 && (
        <Stack direction="row" spacing={1} mt={1}>
          {attachments.map((attachment, index) => (
            <Box key={index}>
              <Image
                src={attachment?.preview}
                alt={attachment?.file.name}
                width={100}
                style={{ objectFit: 'cover' }}
                height={100}
              />
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  </Stack>
)

export const ChatsWithDates = ({ chats }: { chats: any[] }) => {
  const chatElements: JSX.Element[] = []
  let lastDate: string | null = null
  const {
    state: { user },
  }: any = useAuth()
  const router = useRouter()
  const { id } = router.query

  chats.forEach((chat, index: number) => {
    const chatDate = formatDate(chat.timestamp)

    // Jika tanggal berubah, tambahkan elemen tanggal
    if (chatDate !== lastDate) {
      chatElements.push(
        <TimeDivider
          key={index}
          date={
            //date only use gmt+7
            new Date(chat.timestamp).toLocaleDateString('id-in', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })
          }
        />
      )
      lastDate = chatDate
    }

    // Tambahkan elemen chat
    chatElements.push(
      <ChatItem
        key={index}
        isMe={chat?.name.includes(user?.id)}
        name={chat?.name}
        message={chat?.message}
        attachments={[]}
        time={
          //time only use gmt+7
          new Date(chat?.timestamp).toLocaleTimeString('id-in', {
            hour: '2-digit',
            minute: '2-digit',
          })
        }
      />
    )
  })
  return <>{chatElements}</>
}

type FileAttachment = {
  file: File
  preview: string
}

export default function ChatDetailPage() {
  const isTabletView = useMediaQuery('(max-width: 1180px)')
  const router = useRouter()
  const { id, search } = router.query

  const {
    state: { user },
  }: any = useAuth()

  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [attachments, setAttachments] = React.useState<FileAttachment[]>([])

  const { chat, setChat, userChat, chats, sendChat } = useChat({
    consultRequestId: id as string,
    userId: user?.id,
  })
  const [filteredChat, setFilteredChat] = useState<any>(chats || [])

  // console.log('chats', chats)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleScrollBottom = () => {
    setTimeout(() => {
      const element = document.getElementById('chat-detail')
      if (element) {
        element.scrollTop = element.scrollHeight
      }
    }, 300)
  }

  useEffect(() => {
    handleScrollBottom()
  }, [chats])

  useEffect(() => {
    if (search) {
      const filtered = chats.filter((chat) =>
        chat.message.toLowerCase().includes(search as string)
      )
      setFilteredChat(filtered)
    } else {
      setFilteredChat(chats)
    }
  }, [search, chats])

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = Array.from(e.dataTransfer.files)
    if (files && files.length > 0) {
      const newAttachments = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }))
      setAttachments((prev) => [...prev, ...newAttachments])
    }
  }

  const handleFiles = (files: FileList) => {
    const newAttachments = Array.from(files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }))
    setAttachments((prev) => [...prev, ...newAttachments])
  }

  const handleRemoveAttachment = useCallback((index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const handleAttachmentClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files)
    }
  }

  const removePendingAttachment = (index: number) => {
    setAttachments((prev) => {
      URL.revokeObjectURL(prev[index].preview)
      return prev.filter((_, i) => i !== index)
    })
  }

  return (
    <>
      <Box
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {dragActive && (
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'rgba(25, 118, 210, 0.2)',
              zIndex: 1000,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                color: 'white',
                backgroundColor: 'rgb(25, 118, 210)',
                p: 2,
                py: 4,
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="h6">Upload Attachment</Typography>
              <Typography variant="subtitle1">
                You can add comments before uploading.
              </Typography>
            </Box>
          </Box>
        )}

        <Box
          sx={{
            px: 3,
            py: 2,
            backgroundColor: '#FAFAFA',
            borderBottom: '1px solid #E0E0E0',
          }}
        >
          <Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                }}
              >
                H
              </Avatar>
              <Box>
                <Typography variant="subtitle1" sx={{ pb: 0, mb: 0 }}>
                  {userChat?.user_id} ( {userChat?.level} )
                </Typography>
                <Typography variant="body2">In Consult</Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>

        <Box
          id="chat-detail"
          sx={{
            px: 3,
            maxHeight: 'calc(100vh - 350px)',
            overflowY: 'auto',
            pb: 5,
            scrollBehavior: 'smooth',
          }}
        >
          <ChatsWithDates chats={filteredChat} />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: 10,
            paddingLeft: 3,
            width: isTabletView ? 'calc(100% - 20px)' : 'calc(100% - 605px)',
            backgroundColor: 'white',
          }}
        >
          <Stack
            sx={{ backgroundColor: 'transparent' }}
            direction="row"
            spacing={2}
            alignItems="center"
            pt={1}
          >
            {attachments.map((attachment, index) => (
              <Box
                key={index}
                position="relative"
                sx={{
                  border: '1px solid #E0E0E0',
                  borderRadius: '10px',
                  py: 1,
                  cursor: 'pointer',
                  px: 0.5,
                  '&:hover': {
                    '& button': {
                      visibility: 'visible',
                    },
                  },
                }}
              >
                <Image
                  src={attachment?.preview}
                  alt={attachment?.file.name}
                  width={100}
                  style={{ objectFit: 'cover' }}
                  height={100}
                />
                <IconButton
                  onClick={() => {
                    removePendingAttachment(index)
                  }}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    visibility: 'hidden',
                  }}
                >
                  <CloseOutlined />
                </IconButton>
              </Box>
            ))}
          </Stack>
          <RichTextBox
            value={chat}
            onChange={(e) => {
              setChat(e)
            }}
            placeholder="Type a message..."
          />
          <Stack direction="row" spacing={2} justifyContent="flex-end" mt={2}>
            <MaButton
              onClick={() => {
                setIsOpenModal(true)
              }}
              variant="secondary"
            >
              Request Aligner
            </MaButton>
            <MaButton
              onClick={() => {
                setChat('')
                sendChat()
                setAttachments([])
                handleScrollBottom()
              }}
            >
              Send Message
            </MaButton>
          </Stack>
        </Box>
      </Box>
      <ModalAditionalRequest
        open={isOpenModal}
        handleClose={() => setIsOpenModal(false)}
        onConfirm={() => {
          router.push('/consult-request/1/confirmation')
        }}
      />
    </>
  )
}

ChatDetailPage.getLayout = function getLayout(page: React.ReactNode) {
  return <LayoutWithPatient title="Chat">{page}</LayoutWithPatient>
}
