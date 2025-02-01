import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter } from 'next/router'

const BackButton: React.FC<any> = () => {
  const router = useRouter()

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back() // Kembali ke halaman sebelumnya
    } else {
      router.push('/') // Redirect ke halaman utama jika tidak ada halaman sebelumnya
    }
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      sx={{ cursor: 'pointer' }}
      onClick={handleBack}
    >
      <IconButton>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="body1">Back</Typography>
    </Box>
  )
}

export default BackButton
