import MainLayout from '@components/layout/main'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import moment from 'moment'
import {
  Alert,
  Autocomplete,
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
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

export default function EditUser() {
  const router = useRouter()
  const { edit } = router.query
  const [isFormChange, setIsFormChange] = React.useState(false)
  const [detailPatient, setDetailPatient] = React.useState<any | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  // const [file, setFile] = React.useState<any>(null)
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const [isOpenModalStaff, setIsOpenModalStaff] = React.useState(false)
  const [selectedDoctor, setSelectedDoctor] = React.useState<any>(null)
  const [selectedStaff, setSelectedStaff] = React.useState<any>(null)

  const formik = useFormik({
    initialValues: {
      nama_depan: '',
      nama_belakang: '',
      username: '',
      password: '',
      role: '',
      birthday: '',
      email: '',
      nomor_telfon: '',
      fakultas: {
        label: '',
        id: '',
      },
      foto_profil: '',
      isStaff: '',
      isActive: '',
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
    onSubmit: () => {},
  })

  const handleFileChange = (file: any) => {
    setIsFormChange(true)
    formik.setFieldValue('file', file[0])
  }

  // async function handleSubmit(values: FormikValues) {
  //   try {
  //     setIsLoading(true)

  //     let data = new FormData()
  //     data.append('clinic_id', values.clinic_id || '')
  //     data.append('patient_number', values.patient_number || '')
  //     data.append('patient_kanji', values.patient_kanji || '')
  //     data.append('patient_furigana', values.patient_furigana || '')
  //     data.append('patient_romaji', values.patient_romaji || '')
  //     data.append('date_of_birth', values.date_of_birth || '')
  //     data.append('gender_id', values.gender_id || '')
  //     values.post_code && data.append('post_code', values.post_code || '')
  //     values.prefecture_id &&
  //       data.append('prefecture_id', values.prefecture_id || '')
  //     values.address && data.append('address', values.address || '')
  //     data.append('doctor_id', values.doctor_id || '')
  //     data.append('staff_id', values.staff_id || '')
  //     // data.append('phone_number', values.phone_number || '')
  //     // data.append('telephone_number', values.telephone_number || '')
  //     data.append('line', values.LINE || '')
  //     data.append('email', values.email || '')
  //     data.append('invisalign', values.invisalign || '')
  //     data.append('invisalign_cc', values.invisalign_cc || '')
  //     data.append('webceph', values.webceph || '')
  //     data.append('face_photo', values.file || '')
  //     data.append('memo', values.memo || '')

  //     const filtered = values.relative_contact?.filter(
  //       (el: any) => el.number !== ''
  //     )
  //     filtered?.forEach((el: any, idx: number) => {
  //       data.append(`relative_contact_type[]`, el.type)
  //       data.append(`relative_contact_phone_number[]`, el?.number || '')
  //     })

  //     const result = await createPatient(data)

  //     if (result?.code === 201) {
  //       const userId = result.data.id
  //       toaster('Tambah Kelas Berhasil', 'SUCCESS')
  //       localStorage.removeItem('routing')
  //       router.replace(`/kelas`)
  //     } else {
  //       throw result
  //     }
  //   } catch (err: any) {
  //     setIsLoading(false)
  //     setErrorMessage(
  //       err?.data?.debug?.message ||
  //         err?.data?.message ||
  //         err?.statusText ||
  //         'terjadi kesalahan sistem'
  //     )
  //   }
  // }

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
                  label="Nama Depan"
                  name="nama_depan"
                  id="nama_depan"
                  value={formik.values.nama_depan}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.nama_depan && formik.errors.nama_depan
                  }
                  error={
                    formik.touched.nama_depan &&
                    Boolean(formik.errors.nama_depan)
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Nama Belakang"
                  name="nama_belakang"
                  id="nama_belakang"
                  value={formik.values.nama_belakang}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.nama_belakang && formik.errors.nama_belakang
                  }
                  error={
                    formik.touched.nama_belakang &&
                    Boolean(formik.errors.nama_belakang)
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  id="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  helperText={formik.touched.username && formik.errors.username}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  helperText={formik.touched.password && formik.errors.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Role"
                  name="role"
                  id="role"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  helperText={formik.touched.role && formik.errors.role}
                  error={formik.touched.role && Boolean(formik.errors.role)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack>
                  <DatePicker
                    label="Tanggal Lahir"
                    value={
                      formik.values.birthday
                        ? dayjs(formik.values.birthday)
                        : null
                    }
                    onChange={(value: any) =>
                      formik.setFieldValue('birthday', value)
                    }
                  />
                </Stack>
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
              <Grid item xs={12}>
                <MaDropZoneArea
                  placeholder="Upload Foto Profil"
                  showPreviews={true}
                  onChange={handleFileChange}
                />
              </Grid>
              <Grid item xs={11} md={5} mx={1}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Apakah User adalah Staff?
                  </FormLabel>
                  <RadioGroup
                    aria-label="isStaff"
                    name="isStaff"
                    value={formik.values.isStaff}
                    onChange={formik.handleChange}
                    row
                  >
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="Tidak"
                      defaultChecked
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Ya"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={11} md={5} mx={2}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Apakah User sedang Aktif?
                  </FormLabel>
                  <RadioGroup
                    aria-label="isStaff"
                    name="isStaff"
                    value={formik.values.isStaff}
                    onChange={formik.handleChange}
                    row
                  >
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="Tidak"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Ya"
                      defaultChecked
                    />
                  </RadioGroup>
                </FormControl>
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

EditUser.getLayout = function getLayout(page: React.ReactNode) {
  const router = useRouter()
  return <MainLayout title="Edit User">{page}</MainLayout>
}
