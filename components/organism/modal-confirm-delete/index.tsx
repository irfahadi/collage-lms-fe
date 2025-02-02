import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'
import React from 'react'
import Title from '../title'
import { MaButton } from '@components/atoms'

type ModalConfiormDeleteProps = {
  title?: string
  open: boolean
  handleClose: () => void
  handleConfirm: () => void
  isLoading?: boolean
}

export default function ModalConfirmDelete({
  title = '',
  open,
  handleClose,
  handleConfirm,
  isLoading = false,
}: ModalConfiormDeleteProps) {
  return (
    <Dialog
      fullWidth
      maxWidth={'xs'}
      open={open}
      onClose={() => {
        isLoading ? null : handleClose()
      }}
    >
      <DialogTitle>
        <Title title={title} withAccent />
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Apakah anda yakin akan menghapus data ini?
        </Typography>
      </DialogContent>
      <DialogActions sx={{ pb: 2, pr: 3 }}>
        <MaButton
          disabled={isLoading}
          variant="secondary"
          onClick={() => {
            isLoading ? null : handleClose()
          }}
        >
          Cancel
        </MaButton>
        <MaButton variant="error" disabled={isLoading} onClick={handleConfirm}>
          Yes
        </MaButton>
      </DialogActions>
    </Dialog>
  )
}
