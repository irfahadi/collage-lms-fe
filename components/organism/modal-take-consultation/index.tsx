import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'
import React from 'react'
import Title from '../title'
import { MaButton } from '@components/atoms'
import { t } from 'i18next'

type ModalTakeConsultationProps = {
  open: boolean
  handleClose: () => void
}

export default function ModalTakeConsultation({
  open,
  handleClose,
}: ModalTakeConsultationProps) {
  return (
    <Dialog fullWidth maxWidth={'xs'} open={open} onClose={handleClose}>
      <DialogTitle>
        <Title title={t('Choose clinic PIC')} />
      </DialogTitle>
      <DialogContent>
        <Box pt={2}>
          <TextField fullWidth label={t('Clinic PIC')} />
        </Box>
      </DialogContent>
      <DialogActions sx={{ pb: 2, pr: 3 }}>
        <MaButton variant="secondary" onClick={handleClose}>
          {t('cancel')}
        </MaButton>
        <MaButton onClick={() => {}}>{t('Take Consultation')}</MaButton>
      </DialogActions>
    </Dialog>
  )
}
