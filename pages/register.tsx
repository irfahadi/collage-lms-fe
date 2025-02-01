import React from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Link,
} from '@mui/material'

const Register: React.FC = () => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      {/* Kiri: Gambar Gedung dan Deskripsi */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: '#f5f5f5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 4,
        }}
      >
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
          Skuring
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: 4, textAlign: 'center' }}
        >
          Fully-featured educational platform
        </Typography>
        {/* <Typography variant="caption" color="text.secondary">
          © All rights reserved for Skuring
        </Typography> */}
      </Grid>

      {/* Kanan: Form Register */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 4,
        }}
      >
        <Container maxWidth="xs">
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 2 }}
          >
            Welcome to Skuring
          </Typography>
          <Typography
            variant="body2"
            textAlign="center"
            sx={{ color: 'text.secondary', mb: 4 }}
          >
            Create your account!
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
            }}
          >
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField label="Email" variant="outlined" fullWidth required />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                backgroundColor: '#0056B3',
                ':hover': { backgroundColor: '#003D80' },
              }}
            >
              Register
            </Button>
          </Box>
          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
            Sudah Punya Akun?{' '}
            <Link href="/login" underline="hover">
              Login
            </Link>
          </Typography>
        </Container>
      </Grid>
    </Grid>
  )
}

export default Register
