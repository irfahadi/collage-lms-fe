import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'
import Title from '../title'
import { MaButton } from '@components/atoms'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

type ModalConfirmLogoutProps = {
  open: boolean
  handleClose: () => void
}

export default function ModalConfirmLogout({
  open,
  handleClose,
}: ModalConfirmLogoutProps) {
  const router = useRouter()

  const clearStorageAndCookies = () => {
    // Hapus semua data di Local Storage
    if (typeof window !== 'undefined') {
      localStorage.clear()
      sessionStorage.clear()
    }

    // Hapus semua Cookies
    const cookies = document.cookie.split('; ')
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf('=')
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
      Cookies.remove(name, { path: '/' }) // Pastikan menghapus di root path
    }

    router.push('/login')
  }
  return (
    <Dialog fullWidth maxWidth={'xs'} open={open} onClose={handleClose}>
      <DialogTitle>
        <Title title="Konfirmasi Logout" withAccent />
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Apakah anda yakin ingin logout dari akun anda
        </Typography>
      </DialogContent>
      <DialogActions sx={{ pb: 2, pr: 3 }}>
        <MaButton variant="secondary" onClick={handleClose}>
          cancel
        </MaButton>
        <MaButton onClick={clearStorageAndCookies}>logout</MaButton>
      </DialogActions>
    </Dialog>
  )
}
