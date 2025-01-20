import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function () {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 4rem)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box>
        <Stack direction="row" mb={1} spacing={2} justifyContent="center">
          <Image
            width={215}
            height={139}
            alt="empty-chat"
            src="/images/chat-bubble.png"
          />
        </Stack>
        <Typography fontWeight={500} variant="subtitle1" textAlign="center">
          Select a conversation to view chat history
        </Typography>
      </Box>
    </Box>
  )
}
