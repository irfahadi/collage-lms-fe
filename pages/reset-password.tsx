import React, { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Alert,
  Paper,
} from '@mui/material'

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      setError('Password dan Konfirmasi Password tidak cocok!')
      return
    }

    setError('') // Reset error jika valid
    alert('Password berhasil direset!') // Bisa diganti dengan API request
  }

  return (
    <Container
      maxWidth="xs"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, sm: 4 }, // Padding lebih kecil di layar kecil, lebih besar di layar besar
          width: '100%',
          maxWidth: '400px', // Batas maksimum agar tidak terlalu lebar
          textAlign: 'center',
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Reset Password
        </Typography>

        {error && <Alert severity="error">{error}</Alert>}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Password Baru"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextField
            label="Konfirmasi Password Baru"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, py: 1.5 }} // Tombol lebih besar untuk aksesibilitas
          >
            Reset Password
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default ResetPassword
