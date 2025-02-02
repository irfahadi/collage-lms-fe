import React, { useState } from 'react'
import { Box, Typography, TextField, Button, Avatar } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

interface DiscussionForumProps {
  title: string
  messages: { user: string; role: string; message: string; time: string }[]
  onSendMessage: (message: string) => void
}

const DiscussionForum: React.FC<DiscussionForumProps> = ({
  title,
  messages,
  onSendMessage,
}) => {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message)
      setMessage('')
    }
  }

  return (
    <Box
      sx={{
        border: '1px solid #E0E0E0',
        borderRadius: 2,
        padding: 2,
        backgroundColor: '#FFF',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Title */}
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        {title}
      </Typography>

      {/* Message List */}
      <Box sx={{ maxHeight: 300, overflowY: 'auto', mb: 2 }}>
        {messages.map((msg, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="flex-start"
            gap={2}
            sx={{
              mb: 2,
              padding: 2,
              borderRadius: 2,
              backgroundColor: '#F9F9F9',
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Avatar>{msg.user.charAt(0)}</Avatar>
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                {msg.user} - {msg.role}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {msg.time}
              </Typography>
              <Typography variant="body2">{msg.message}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Message Input */}
      <Box display="flex" gap={2}>
        <TextField
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tulis pesan..."
        />
        <Button
          variant="contained"
          onClick={handleSend}
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          endIcon={<SendIcon />}
        >
          Kirim
        </Button>
      </Box>
    </Box>
  )
}

export default DiscussionForum
