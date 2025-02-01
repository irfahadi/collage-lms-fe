import MainLayout from '@components/layout/main'
import {
  Alert,
  Autocomplete,
  Box,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import Link from '@mui/material/Link'
import React, { useEffect } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import {
  InputFile,
  LinkedGenie,
  MaButton,
  MaDropZoneArea,
} from '@components/atoms'
import { useClinics } from '@utils/hooks/use-clinics'
import { FormikValues, useFormik } from 'formik'
import { usePrefectures } from '@utils/hooks/use-prefectures'
import {
  createPatient,
  getPatientDetail,
  updatePatient,
} from '@utils/services/patients'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import { toaster } from '@utils/toaster'
import { defaultBox } from '@styles/index'
import { DatePicker } from '@mui/x-date-pickers'

export default function TambahProdi() {
  const { data: clinicList = [], isLoading: loadingClinic } =
    useClinics('per_page=1000')
  usePrefectures('per_page=47')
  const isTabletView = useMediaQuery('(max-width: 1180px)')
  const router = useRouter()
  const { edit } = router.query
  const [isFormChange, setIsFormChange] = React.useState(false)

  const [isLoading, setIsLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  // const [file, setFile] = React.useState<any>(null)
  const [isOpenModal, setIsOpenModal] = React.useState(false)

  const formik = useFormik({
    initialValues: {
      nama_prodi: '',
      kode_prodi: '',
      deskripsi: '',
      tahun_berdiri: '',
      nama_kepala_prodi: '',
      email: '',
      nomor_telfon: '',
      fakultas: {
        label: '',
        id: '',
      },
    },
    onSubmit: handleSubmit,
  })

  const handleFileChange = (file: any) => {
    setIsFormChange(true)
    formik.setFieldValue('file', file[0])
  }

  async function handleSubmit(values: FormikValues) {
    try {
      setIsLoading(true)

      let data = new FormData()
      data.append('clinic_id', values.clinic_id || '')
      data.append('patient_number', values.patient_number || '')
      data.append('patient_kanji', values.patient_kanji || '')
      data.append('patient_furigana', values.patient_furigana || '')
      data.append('patient_romaji', values.patient_romaji || '')
      data.append('date_of_birth', values.date_of_birth || '')
      data.append('gender_id', values.gender_id || '')
      values.post_code && data.append('post_code', values.post_code || '')
      values.prefecture_id &&
        data.append('prefecture_id', values.prefecture_id || '')
      values.address && data.append('address', values.address || '')
      data.append('doctor_id', values.doctor_id || '')
      data.append('staff_id', values.staff_id || '')
      // data.append('phone_number', values.phone_number || '')
      // data.append('telephone_number', values.telephone_number || '')
      data.append('line', values.LINE || '')
      data.append('email', values.email || '')
      data.append('invisalign', values.invisalign || '')
      data.append('invisalign_cc', values.invisalign_cc || '')
      data.append('webceph', values.webceph || '')
      data.append('face_photo', values.file || '')
      data.append('memo', values.memo || '')

      const filtered = values.relative_contact?.filter(
        (el: any) => el.number !== ''
      )
      filtered?.forEach((el: any, idx: number) => {
        data.append(`relative_contact_type[]`, el.type)
        data.append(`relative_contact_phone_number[]`, el?.number || '')
      })

      const result = await createPatient(data)

      if (result?.code === 201) {
        const userId = result.data.id
        toaster('Tambah Kelas Berhasil', 'SUCCESS')
        localStorage.removeItem('routing')
        router.replace(`/kelas`)
      } else {
        throw result
      }
    } catch (err: any) {
      setIsLoading(false)
      setErrorMessage(
        err?.data?.debug?.message ||
          err?.data?.message ||
          err?.statusText ||
          'terjadi kesalahan sistem'
      )
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
                  name="nama_prodi"
                  id="nama_prodi"
                  value={formik.values.nama_prodi}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.nama_prodi && formik.errors.nama_prodi
                  }
                  error={
                    formik.touched.nama_prodi &&
                    Boolean(formik.errors.nama_prodi)
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Kode Prodi"
                  name="kode_prodi"
                  id="kode_prodi"
                  value={formik.values.kode_prodi}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.kode_prodi && formik.errors.kode_prodi
                  }
                  error={
                    formik.touched.kode_prodi &&
                    Boolean(formik.errors.kode_prodi)
                  }
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  multiline
                  fullWidth
                  label="Deskripsi"
                  name="deskripsi"
                  id="deskripsi"
                  minRows={3}
                  value={formik.values.deskripsi}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.deskripsi && formik.errors.deskripsi
                  }
                  error={
                    formik.touched.deskripsi && Boolean(formik.errors.deskripsi)
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Tahun Berdiri"
                  name="tahun_berdiri"
                  id="tahun_berdiri"
                  value={formik.values.tahun_berdiri}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.tahun_berdiri && formik.errors.tahun_berdiri
                  }
                  error={
                    formik.touched.tahun_berdiri &&
                    Boolean(formik.errors.tahun_berdiri)
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Nama Kepala Prodi"
                  name="nama_kepala_prodi"
                  id="nama_kepala_prodi"
                  value={formik.values.nama_kepala_prodi}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.nama_kepala_prodi &&
                    formik.errors.nama_kepala_prodi
                  }
                  error={
                    formik.touched.nama_kepala_prodi &&
                    Boolean(formik.errors.nama_kepala_prodi)
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
                  name="nomor_telfon"
                  id="nomor_telfon"
                  value={formik.values.nomor_telfon}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.nomor_telfon && formik.errors.nomor_telfon
                  }
                  error={
                    formik.touched.nomor_telfon &&
                    Boolean(formik.errors.nomor_telfon)
                  }
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
                  value={
                    // clinicList?.data?.find(
                    //   (el: any) => el.id === formik.values.clinic_id
                    // )?.clinic_kanji || null
                    {
                      id: '',
                      label: '',
                    }
                  }
                  onChange={(e, value: any) => {
                    formik.setFieldValue('dosen', value?.id)
                  }}
                  options={[
                    {
                      id: '1',
                      label: 'Telematika Energi',
                    },
                  ]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Fakultas"
                      name="fakultas"
                      error={
                        Boolean(formik.errors.fakultas?.id) &&
                        formik.touched.fakultas?.id
                      }
                      helperText={
                        formik.errors.fakultas?.id
                          ? formik.touched.fakultas?.id &&
                            formik.errors.fakultas?.id
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
              {/* <MaButton
                disabled={isLoading}
                onClick={() => router.back()}
                variant="secondary"
              >
                {t('cancel')}
              </MaButton> */}
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

TambahProdi.getLayout = function getLayout(page: React.ReactNode) {
  const router = useRouter()
  return <MainLayout title="Tambah Prodi">{page}</MainLayout>
}
