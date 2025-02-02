import MainLayout from '@components/layout/main'
import {
  Alert,
  Box,
  Grid,
  Stack,
  TextField,
  useMediaQuery,
} from '@mui/material'
import React, { useEffect } from 'react'
import { InputFile, MaButton, MaDropZoneArea } from '@components/atoms'
import { FormikValues, useFormik } from 'formik'
import { useRouter } from 'next/router'
import { toaster } from '@utils/toaster'
import { defaultBox } from '@styles/index'
import { updateFaculity } from '@utils/services/faculity'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { useFaculityDetail } from '@utils/hooks/use-faculity'

export default function EditFakultas() {
  const isTabletView = useMediaQuery('(max-width: 1180px)')
  const router = useRouter()
  const { id } = router.query
  const [isLoading, setIsLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const { data: faculityData = undefined } = useFaculityDetail(id as string)

  React.useEffect(() => {
    if (faculityData) {
      formik.setValues(faculityData)
    }
  }, [faculityData])

  const formik = useFormik({
    initialValues: {
      name: '',
      code: '',
      description: '',
      estalbished: '',
      dean_name: '',
      email: '',
      phone: '',
    },
    onSubmit: handleSubmit,
  })

  async function handleSubmit(values: FormikValues) {
    try {
      setIsLoading(true)

      const result = await updateFaculity(id as string, values)

      if (result) {
        toaster('Edit Fakultas Berhasil', 'SUCCESS')
        router.replace(`/fakultas`)
      } else {
        throw result
      }
    } catch (err: any) {
      setIsLoading(false)
      setErrorMessage('terjadi kesalahan sistem')
    }
  }

  return (
    <Stack
      sx={{
        mb: 10,
        ...defaultBox,
      }}
      spacing={3}
    >
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2} mb={2}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Nama Fakultas"
                  name="name"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  helperText={formik.touched.name && formik.errors.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Kode Fakultas"
                  name="code"
                  id="code"
                  value={formik.values.code}
                  onChange={formik.handleChange}
                  helperText={formik.touched.code && formik.errors.code}
                  error={formik.touched.code && Boolean(formik.errors.code)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  multiline
                  fullWidth
                  label="Deksripsi"
                  name="description"
                  id="description"
                  minRows={3}
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack>
                  <DatePicker
                    label="Tahun Berdiri"
                    value={
                      formik.values.estalbished
                        ? dayjs(formik.values.estalbished)
                        : null
                    }
                    onChange={(value: any) =>
                      formik.setFieldValue(
                        'estalbished',
                        dayjs(value).format('YYYY-MM-DD')
                      )
                    }
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Nama Dekan"
                  name="dean_name"
                  id="dean_name"
                  value={formik.values.dean_name}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.dean_name && formik.errors.dean_name
                  }
                  error={
                    formik.touched.dean_name && Boolean(formik.errors.dean_name)
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  helperText={formik.touched.email && formik.errors.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Nomor Telfon"
                  name="phone"
                  id="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  helperText={formik.touched.phone && formik.errors.phone}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                />
              </Grid>
            </Grid>
          </Box>
        </Stack>

        <Stack spacing={2}>
          {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
          <Stack direction="row" justifyContent="flex-end">
            <Stack direction="row" spacing={1}>
              <MaButton
                disabled={isLoading}
                onClick={() => router.back()}
                variant="secondary"
              >
                Cancel
              </MaButton>
              <MaButton disabled={isLoading} type="submit">
                {isLoading ? 'loading...' : 'save'}
              </MaButton>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </Stack>
  )
}

EditFakultas.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout title="Tambah Fakultas">{page}</MainLayout>
}
