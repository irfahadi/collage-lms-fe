import React from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Link,
  InputAdornment,
  IconButton,
  Alert,
} from '@mui/material'
import { getUserData, loginWithEmail } from '@utils/services/auth'
import { useRouter } from 'next/router'
import { FormikValues, useFormik } from 'formik'
import * as yup from 'yup'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

interface CustomJwtPayload {
  user_id: string // Adjust type if it's a number
  token_type: string
  role: string
  exp: number
}

const Login: React.FC = () => {
  const router = useRouter()
  const { redirect } = router.query
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [errorMessage, setErrorMessage] = React.useState<string>('')

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().required(),
      password: yup.string().required(),
    }),
    onSubmit: handleSubmit,
  })

  async function handleSubmit(values: FormikValues) {
    try {
      setIsLoading(true)
      const res = await loginWithEmail({
        email: values.email,
        password: values.password,
      })

      if (res?.access) {
        Cookies.set('access_token', res?.access, { expires: 1 })
        Cookies.set('refresh_token', res?.refresh, { expires: 1 })
        const decodedData = jwtDecode<CustomJwtPayload>(res?.access)
        try {
          const res = await getUserData(decodedData?.user_id)
          if (res) {
            localStorage.setItem('userdata', JSON.stringify(res))
            if (redirect) {
              router.replace(redirect?.toString())
            } else if (res.role == 'Mahasiswa') {
              router.replace(`/`)
            } else {
              router.replace(`/dashboard`)
            }
          } else {
            throw res
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        throw res
      }
    } catch (error: any) {
      console.log('error', error)
      setIsLoading(false)
      setErrorMessage(error?.detail || 'something_went_wrong')
    }
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

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

      {/* Kanan: Form Login */}
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
            Please login!
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
            }}
            onSubmit={formik.handleSubmit}
          >
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              helperText={formik.touched.email && formik.errors.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              required
            />
            <TextField
              id="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              sx={{ mb: '16px' }}
              value={formik.values.password}
              onChange={formik.handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              name="password"
              helperText={formik.touched.password && formik.errors.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              required
            />
            <Button
              disabled={isLoading}
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                backgroundColor: '#0056B3',
                ':hover': { backgroundColor: '#003D80' },
              }}
            >
              Login
            </Button>
          </Box>
          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
            Belum Punya Akun?{' '}
            <Link href="/register" underline="hover">
              Register
            </Link>
          </Typography>
          {errorMessage && (
            <Alert severity="error" sx={{ mb: '16px' }}>
              {errorMessage}
            </Alert>
          )}
        </Container>
      </Grid>
    </Grid>
  )
}

export default Login
