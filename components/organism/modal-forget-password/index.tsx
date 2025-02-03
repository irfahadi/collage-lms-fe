import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'
import React from 'react'
import Title from '../title'
import { MaButton } from '@components/atoms'
import { students } from '@utils/dummy'
import { requestResetPassword } from '@utils/services/auth'
import { toaster } from '@utils/toaster'

type ModalResetPassword = {
  open: boolean
  handleClose: () => void
}

export default function ModalResetPassword({
  open,
  handleClose,
}: ModalResetPassword) {
  const [email, setEmail] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  // async function sendRequest(email: string) {
  //   console.log('tes')

  //   setIsLoading(true)
  //   requestResetPassword({
  //     email,
  //   })
  //     .then(() => {
  //       toaster('Request Reset Password Berhasil, Cek Email Anda! ', 'SUCCESS')
  //       setIsLoading(false)
  //       handleClose
  //     })
  //     .catch((err: any) => {
  //       setIsLoading(false)
  //       // setErrorMessage('terjadi kesalahan sistem')
  //     })
  // }

  return (
    <Dialog fullWidth maxWidth={'xs'} open={open} onClose={handleClose}>
      <DialogTitle>
        <Title title="Request Reset Password" />
      </DialogTitle>
      <DialogContent>
        <Box py={2}>
          <TextField
            disabled={isLoading}
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Input Email"
            // placeholder="Input Nama Mahasiswa"
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ pb: 2, pr: 3 }}>
        <Button variant="outlined" onClick={handleClose} disabled={isLoading}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={async () => {
            setIsLoading(true)
            await requestResetPassword({
              email,
            })
              .then(() => {
                toaster(
                  'Request Reset Password Berhasil, Cek Email Anda! ',
                  'SUCCESS'
                )
                handleClose
              })
              .catch((err: any) => {
                setIsLoading(false)
                // setErrorMessage('terjadi kesalahan sistem')
              })
          }}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Send'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
