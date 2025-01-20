import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import Title from '../title'
import { MaButton } from '@components/atoms'
import { t } from 'i18next'

type ModalAditionalRequestProps = {
  open: boolean
  handleClose: () => void
  onConfirm: () => void
}

export default function ModalAditionalRequest({
  open,
  handleClose,
  onConfirm,
}: ModalAditionalRequestProps) {
  return (
    <Dialog fullWidth maxWidth={'xs'} open={open} onClose={handleClose}>
      <DialogTitle>
        <Title title={t('Additional Aligner Request')} />
      </DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1">
          Are you sure want to request additional aligner? the cost is ¥2000
        </Typography>
      </DialogContent>
      <DialogActions sx={{ pb: 2, pr: 3 }}>
        <MaButton variant="secondary" onClick={handleClose}>
          {t('cancel')}
        </MaButton>
        <MaButton onClick={onConfirm}>{t('Request')}</MaButton>
      </DialogActions>
    </Dialog>
  )
}
