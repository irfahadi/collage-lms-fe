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

type ModalAggreementProps = {
  open: boolean
  handleClose: () => void
  onAgree: () => void
}

export default function ModalAggreement({
  open,
  handleClose,
  onAgree,
}: ModalAggreementProps) {
  return (
    <Dialog fullWidth maxWidth={'xs'} open={open} onClose={handleClose}>
      <DialogTitle>
        <Title title={t('Handling of personal information')} />
      </DialogTitle>
      <DialogContent>
        <Box>
          <ul style={{ paddingLeft: 12 }}>
            <li>
              The personal information you provide will be used only for the
              purposes of executing and approving your online payment request,
              contacting you regarding the transaction, and verifying your
              identity.
            </li>
            <li>
              We will provide the email address and telephone number you entered
              to product sales companies or service providers by sending them
              data for the purpose of customer identification and customer
              management.
            </li>
            <li>
              For any inquiries regarding the handling of personal information,
              complaints, consultations, or requests (notification of purpose of
              use, disclosure, correction, addition, deletion, refusal to use or
              provide, etc.), please contact the personal information inquiry
              desk listed at the end of this page.
            </li>
            <li>
              The personal information you provide will be provided to the
              credit card company you used and will be stored by our company for
              seven years from the date of payment.
            </li>
          </ul>
        </Box>
      </DialogContent>
      <DialogActions sx={{ pb: 2, pr: 3 }}>
        <MaButton variant="secondary" onClick={handleClose}>
          {t('disagree')}
        </MaButton>
        <MaButton onClick={onAgree}>{t('Agree')}</MaButton>
      </DialogActions>
    </Dialog>
  )
}
