import MainLayout from '@components/layout/main'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import moment from 'moment'
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
import { InputFile, MaButton, MaDropZoneArea } from '@components/atoms'
import { FormikValues, useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { toaster } from '@utils/toaster'
import { defaultBox } from '@styles/index'
import { DatePicker } from '@mui/x-date-pickers'
import BackButton from '@components/atoms/back-button'
import LinkModuleInput from '@components/atoms/link-modul-input'

export default function TambahTopik() {
  const isTabletView = useMediaQuery('(max-width: 1180px)')
  const router = useRouter()
  const { edit } = router.query
  const [isFormChange, setIsFormChange] = React.useState(false)
  const [detailPatient, setDetailPatient] = React.useState<any | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  const formik = useFormik({
    initialValues: {
      nama_topik: '',
      deskripsi: '',
    },
    // validationSchema: Yup.object().shape({
    //   clinic_id: Yup.number().required(t('required')),
    //   patient_number: Yup.string().required(t('required')),
    //   patient_kanji: Yup.string().required(t('required')),
    //   patient_furigana: Yup.string().required(t('required')),
    //   date_of_birth: Yup.string().required(t('required')),
    //   gender_id: Yup.number().required(t('required')),
    //   relative_contact: Yup.array().of(
    //     Yup.object().shape({
    //       number: Yup.string().nullable(''),
    //     })
    //   ),
    // }),
    onSubmit: handleSubmit,
  })

  const handleFileChange = (file: any) => {
    setIsFormChange(true)
    formik.setFieldValue('file', file[0])
  }

  async function handleSubmit(values: FormikValues) {
    // try {
    //   setIsLoading(true)
    //   let data = new FormData()
    //   data.append('clinic_id', values.clinic_id || '')
    //   data.append('patient_number', values.patient_number || '')
    //   data.append('patient_kanji', values.patient_kanji || '')
    //   data.append('patient_furigana', values.patient_furigana || '')
    //   data.append('patient_romaji', values.patient_romaji || '')
    //   data.append('date_of_birth', values.date_of_birth || '')
    //   data.append('gender_id', values.gender_id || '')
    //   values.post_code && data.append('post_code', values.post_code || '')
    //   values.prefecture_id &&
    //     data.append('prefecture_id', values.prefecture_id || '')
    //   values.address && data.append('address', values.address || '')
    //   data.append('doctor_id', values.doctor_id || '')
    //   data.append('staff_id', values.staff_id || '')
    //   // data.append('phone_number', values.phone_number || '')
    //   // data.append('telephone_number', values.telephone_number || '')
    //   data.append('line', values.LINE || '')
    //   data.append('email', values.email || '')
    //   data.append('invisalign', values.invisalign || '')
    //   data.append('invisalign_cc', values.invisalign_cc || '')
    //   data.append('webceph', values.webceph || '')
    //   data.append('face_photo', values.file || '')
    //   data.append('memo', values.memo || '')
    //   const filtered = values.relative_contact?.filter(
    //     (el: any) => el.number !== ''
    //   )
    //   filtered?.forEach((el: any, idx: number) => {
    //     data.append(`relative_contact_type[]`, el.type)
    //     data.append(`relative_contact_phone_number[]`, el?.number || '')
    //   })
    //   const result = await createPatient(data)
    //   if (result?.code === 201) {
    //     const userId = result.data.id
    //     toaster('Tambah Kelas Berhasil', 'SUCCESS')
    //     localStorage.removeItem('routing')
    //     router.replace(`/kelas`)
    //   } else {
    //     throw result
    //   }
    // } catch (err: any) {
    //   setIsLoading(false)
    //   setErrorMessage(
    //     err?.data?.debug?.message ||
    //       err?.data?.message ||
    //       err?.statusText ||
    //       'terjadi kesalahan sistem'
    //   )
    // }
  }

  // async function handleGetDetailPatient() {
  //   try {
  //     const res = await getPatientDetail(edit as string)
  //     if (res?.code === 200) {
  //       const data = res?.data
  //       setDetailPatient(data)
  //       setSelectedDoctor({
  //         id: data?.doctor?.id,
  //         doctor_displayname: data?.doctor?.doctor_displayname,
  //       })
  //       setSelectedStaff({
  //         id: data?.staff?.id,
  //         staff_displayname: data?.staff?.staff_displayname,
  //       })
  //       const formdata = {
  //         ...data,
  //         patient_number: checkIsUUID(data?.patient_number)
  //           ? ''
  //           : data?.patient_number,
  //         clinic: {
  //           label: data?.clinic?.clinic_kanji,
  //           id: data?.clinic?.id,
  //         },
  //         LINE: data?.line,
  //         relative_contact: data?.relative_contacts?.map((el: any) => ({
  //           id: el.id,
  //           type: el.type,
  //           number: el?.phone_number || '',
  //         })),
  //       }

  //       formik.setValues(formdata)
  //       setTimeout(() => {
  //         formik.validateForm()
  //         formik.setTouched(formdata)
  //       }, 1000)
  //     } else {
  //       throw res
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   if (edit) {
  //     handleGetDetailPatient()
  //   }
  // }, [edit])

  return (
    <Stack
      sx={{
        mb: 10,
        ...defaultBox,
      }}
      spacing={3}
    >
      <BackButton />
      <form
        onSubmit={formik.handleSubmit}
        // onChange={() => {
        //   setIsFormChange(true)
        // }}
      >
        <Stack spacing={2} mb={2}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  label="Nama Topik"
                  name="nama_topik"
                  id="nama_topik"
                  value={formik.values.nama_topik}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.nama_topik && formik.errors.nama_topik
                  }
                  error={
                    formik.touched.nama_topik &&
                    Boolean(formik.errors.nama_topik)
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
              {/* <Grid item xs={12}>
                <MaDropZoneArea
                  placeholder="Upload Thumbnail Kelas"
                  showPreviews={true}
                  onChange={handleFileChange}
                />
              </Grid> */}
              <Grid item xs={12}>
                <LinkModuleInput />
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

TambahTopik.getLayout = function getLayout(page: React.ReactNode) {
  const router = useRouter()
  return <MainLayout title="Tambah Topik">{page}</MainLayout>
}
