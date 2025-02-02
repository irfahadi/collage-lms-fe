import MainLayout from '@components/layout/main'
import {
  Alert,
  Autocomplete,
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
import dayjs from 'dayjs'
import { toaster } from '@utils/toaster'
import { defaultBox } from '@styles/index'
import { DatePicker } from '@mui/x-date-pickers'
import { useFaculities } from '@utils/hooks/use-faculity'
import {
  createStudyProgram,
  updateStudyProgram,
} from '@utils/services/study-program'
import { useStudyProgramDetail } from '@utils/hooks/use-study-program'

export default function EditProdi() {
  const isTabletView = useMediaQuery('(max-width: 1180px)')
  const router = useRouter()
  const { id } = router.query
  const [faculity, setFaculity] = React.useState({
    label: '',
    id: '',
  })
  const [isLoading, setIsLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const { data: faculitiesData = [] } = useFaculities()
  const { data: studyProgramData = undefined } = useStudyProgramDetail(
    id as string
  )

  React.useEffect(() => {
    if (studyProgramData) {
      formik.setValues(studyProgramData)

      const faculityOptionsData = faculitiesData.map((item: any) => ({
        id: item.id,
        label: item.name,
      }))
      setFaculity(
        faculityOptionsData.find(
          (item: any) => item.id === studyProgramData.faculty_id
        )
      )
    }
  }, [studyProgramData])

  const formik = useFormik({
    initialValues: {
      name: '',
      code: '',
      description: '',
      estalbished: '',
      head_name: '',
      email: '',
      phone: '',
      faculty_id: '',
    },
    onSubmit: handleSubmit,
  })

  async function handleSubmit(values: FormikValues) {
    try {
      setIsLoading(true)

      const result = await updateStudyProgram(id as string, values)

      if (result) {
        toaster('Edit Prodi Berhasil', 'SUCCESS')
        router.replace(`/prodi`)
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
      <form
        onSubmit={formik.handleSubmit}
        // onChange={() => {
        //   setIsFormChange(true)
        // }}
      >
        <Stack spacing={2} mb={2}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Nama Prodi"
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
                  label="Kode Prodi"
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
                  label="Deskripsi"
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
                  label="Nama Kepala Prodi"
                  name="head_name"
                  id="head_name"
                  value={formik.values.head_name}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.head_name && formik.errors.head_name
                  }
                  error={
                    formik.touched.head_name && Boolean(formik.errors.head_name)
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
              <Grid item xs={12} md={12}>
                <Autocomplete
                  fullWidth
                  disablePortal
                  // disabled={loadingClinic}
                  // componentName="clinic_id"
                  isOptionEqualToValue={(option, value) => {
                    return option.label === value.label
                  }}
                  id="fakultas"
                  value={faculity}
                  onChange={(e, value: any) => {
                    setFaculity(value)
                    formik.setFieldValue('faculty_id', value?.id)
                  }}
                  options={faculitiesData.map((item: FacultyModel) => ({
                    id: item.id,
                    label: item.name,
                  }))}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Fakultas"
                      name="fakultas"
                      error={
                        Boolean(formik.errors.faculty_id) &&
                        formik.touched.faculty_id
                      }
                      helperText={
                        formik.errors.faculty_id
                          ? formik.touched.faculty_id &&
                            formik.errors.faculty_id
                          : null
                      }
                    />
                  )}
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
                cancel
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

EditProdi.getLayout = function getLayout(page: React.ReactNode) {
  const router = useRouter()
  return <MainLayout title="Tambah Prodi">{page}</MainLayout>
}
