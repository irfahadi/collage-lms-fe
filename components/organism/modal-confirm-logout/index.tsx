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
import CloseIcon from '@mui/icons-material/Close'
import { MaButton } from '@components/atoms'
import { useRouter } from 'next/router'
// import { useAuth } from '@store/auth'
import { t } from 'i18next'

type ModalConfirmLogoutProps = {
  open: boolean
  handleClose: () => void
}

export default function ModalConfirmLogout({
  open,
  handleClose,
}: ModalConfirmLogoutProps) {
  const router = useRouter()
  // const { handleLogout }: any = useAuth()
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
        <MaButton onClick={() => {}}>logout</MaButton>
      </DialogActions>
    </Dialog>
  )
}
