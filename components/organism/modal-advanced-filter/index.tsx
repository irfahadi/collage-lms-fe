import React, { useEffect } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import Title from '../title'
import {
  GridCloseIcon,
  GridExpandMoreIcon,
  gridColumnVisibilityModelSelector,
} from '@mui/x-data-grid'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { MaButton, MaDatePicker } from '@components/atoms'
import { useFormik } from 'formik'
import { useClinics } from '@utils/hooks/use-clinics'
import { useDoctors } from '@utils/hooks/use-doctors'
import { DoctorData } from '@models/Doctor'
import { ClinicDataType } from '@models/Clinic'
import { useTreatmentStatus } from '@utils/hooks/use-treatment-status'
import { TreatmentStatuses } from '@models/Patients'
import { useLabels } from '@utils/hooks/use-labels'
import { LabelData } from '@models/Label'
import {
  formatDateToYYYYMMDD,
  handleDateChange,
  isISOStringValid,
} from '@utils/date'
import dayjs, { Dayjs } from 'dayjs'
import { t } from 'i18next'
import { useRouter } from 'next/router'

interface FilterProp {
  onClose: () => void
  onReturnValue: (value: string) => void
  defaultValue: any
}

export default function FilterComponent({
  onClose,
  onReturnValue,
  defaultValue,
}: FilterProp) {
  const router = useRouter()
  const [filterString, setFilterString] = React.useState<string>('')
  const [registered, setRegistered] = React.useState<boolean>(true)
  const [notRegistered, setNotRegistered] = React.useState<boolean>(true)
  const { data: clinicData = [] } = useClinics('per_page=1000')
  const { data: doctorData = [] } = useDoctors('')
  const { data: labelData = [] } = useLabels(
    'page=0&per_page=1000&search&sort=asc'
  )
  const { data: treatmentStatusData = [] } = useTreatmentStatus(
    'page=1&per_page=1000&search&sort=asc'
  )
  const [date, setDate] = React.useState<Dayjs | null>(null)
  const accordionRegistered = React.useRef<HTMLDivElement>(null)
  const accordionClinic = React.useRef<HTMLDivElement>(null)
  const accordionDoctor = React.useRef<HTMLDivElement>(null)
  const accordionLabel = React.useRef<HTMLDivElement>(null)
  const accordionStatus = React.useRef<HTMLDivElement>(null)
  const accordionDate = React.useRef<HTMLDivElement>(null)
  const accordionReservationDate = React.useRef<HTMLDivElement>(null)

  const initialValue = {
    clinicData: Array<number>(),
    doctorData: Array<number>(),
    labelData: Array<number>(),
    statusData: Array<number>(),
    firstConsultDate: null,
    date: {
      start: null,
      end: null,
    },
    registered: null,
  }

  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: handleSubmit,
  })

  function handleSubmit() {
    const clinicFilter = formik.values.clinicData
      .map((clinicId) => `clinic_ids[]=${clinicId}`)
      .join('&')
    const doctorFilter = formik.values.doctorData
      .map((doctorId) => `doctor_ids[]=${doctorId}`)
      .join('&')
    const labelFilter = formik.values.labelData
      .map((labelId) => `label_ids[]=${labelId}`)
      .join('&')
    const statusFilter = formik.values.statusData
      .map((statusId) => `treatment_status_ids[]=${statusId}`)
      .join('&')
    const registeredPatient =
      registered === notRegistered
        ? ''
        : registered === true
        ? '&registered=yes'
        : '&registered=no'
    const result = `${clinicFilter.length > 0 ? `&${clinicFilter}` : ''}${
      doctorFilter.length > 0 ? `&${doctorFilter}` : ''
    }${labelFilter.length > 0 ? `&${labelFilter}` : ''}${
      statusFilter.length > 0 ? `&${statusFilter}` : ''
    }${
      formik.values.firstConsultDate
        ? `&date_consult=${formik.values.firstConsultDate}`
        : ''
    }${
      formik.values.date?.start
        ? `&start_date=${formatDateToYYYYMMDD(
            new Date(formik.values.date?.start)
          )}`
        : ''
    }${
      formik.values.date?.end
        ? `&end_date=${formatDateToYYYYMMDD(new Date(formik.values.date?.end))}`
        : ''
    }${registeredPatient}`

    onReturnValue(result.trim())
    //set filter value to url
    //remove & from result in first index
    const filtervalue = `${result.trim().substring(1)}`
    const searchQuery = router.asPath.split('?')[1]
    const isHasSearchQuery = searchQuery?.includes('search')
    if (filtervalue && isHasSearchQuery) {
      router.replace(`/patients?${searchQuery}?${filtervalue}`)
    } else if (isHasSearchQuery) {
      router.replace(`/patients?${searchQuery}`)
    } else if (filtervalue) {
      router.replace(`/patients?${filtervalue}`)
    } else {
      router.replace(`/patients`)
    }
    setFilterString(filtervalue)
  }

  const destructureURLParams = (url: string) => {
    const searchParams = new URLSearchParams(decodeURIComponent(url))
    // console.log(decodeURIComponent(url))
    // decodeURIComponent(url)
    return {
      clinicData: searchParams
        .getAll('clinic_ids[]')
        .map((value) => Number(value.trim())),
      doctorData: searchParams
        .getAll('doctor_ids[]')
        .map((value) => Number(value.trim())),
      labelData: searchParams
        .getAll('label_ids[]')
        .map((value) => Number(value.trim())),
      statusData: searchParams
        .getAll('treatment_status_ids[]')
        .map((value) => Number(value.trim())),
      firstConsultDate: searchParams
        .getAll('date_consult')
        .map((value) => value.trim())[0],
      startDate: searchParams
        .getAll('start_date')
        .map((value) => value.trim())[0],
      endDate: searchParams.getAll('end_date').map((value) => value.trim())[0],
      registered: searchParams
        .getAll('registered')
        .map((value) => value.trim())[0],
    }
  }

  React.useEffect(() => {
    if (defaultValue) {
      const data = destructureURLParams(defaultValue)
      data.firstConsultDate && setDate(dayjs(data.firstConsultDate))
      formik.setFieldValue('registered', data.registered)
      formik.setFieldValue('clinicData', data.clinicData)
      formik.setFieldValue('doctorData', data.doctorData)
      formik.setFieldValue('labelData', data.labelData)
      formik.setFieldValue('statusData', data.statusData)
      if (data.firstConsultDate?.length > 0) {
        formik.setFieldValue(
          'firstConsultDate',
          dayjs(data.firstConsultDate) ?? null
        )
      }
      if (data?.startDate?.length > 0 || data?.endDate?.length > 0) {
        formik.setFieldValue('date', {
          start: data?.startDate ? dayjs(data?.startDate) : null,
          end: data?.endDate ? dayjs(data?.endDate) : null,
        })
      }

      if (data.registered === 'yes') {
        setRegistered(true)
        setNotRegistered(false)
      } else if (data.registered === 'no') {
        setRegistered(false)
        setNotRegistered(true)
      }

      setFilterString(defaultValue)
    }
  }, [defaultValue])

  React.useEffect(() => {
    const data = destructureURLParams(defaultValue)
    // console.log(data)
    data?.registered?.length > 0 && accordionRegistered?.current?.click()
    data.clinicData.length > 0 && accordionClinic?.current?.click()
    data.doctorData.length > 0 && accordionDoctor?.current?.click()
    data.labelData.length > 0 && accordionLabel?.current?.click()
    data.statusData.length > 0 && accordionStatus?.current?.click()
    data.firstConsultDate?.length > 0 && accordionDate?.current?.click()
    data?.startDate?.length > 0 || data?.endDate?.length > 0
      ? accordionReservationDate?.current?.click()
      : null
  }, [])

  const handleDateChange2 = (value: any) => {
    const newDate = isISOStringValid(value)
      ? formatDateToYYYYMMDD(new Date(value?.toISOString() as string))
      : null
    formik.setFieldValue('firstConsultDate', newDate)
    const newFilterString = filterString
      .split('&')
      .filter((str) => !str.includes('date_consult'))
      .join('&')

    const searchQuery = router.asPath.split('?')[1]
    const isHasSearchQuery = searchQuery?.includes('search')
    const dateFilter = `date_consult=${newDate}`
    const result = newDate ? `&${dateFilter}` : ''

    setFilterString(`${newFilterString}${result}`)
    onReturnValue(`${newFilterString}${result}`)

    if (newDate && isHasSearchQuery) {
      router.replace(`/patients?${searchQuery}&${result}`)
    } else if (isHasSearchQuery) {
      router.replace(`/patients?${searchQuery}`)
    } else if (newDate) {
      router.replace(`/patients?${newFilterString}${result}`)
    } else if (newFilterString) {
      router.replace(`/patients?${newFilterString}`)
    } else {
      router.replace(`/patients`)
    }
  }

  const handleReset = () => {
    formik.resetForm()
    formik.setValues(initialValue)
    setRegistered(true)
    setNotRegistered(true)
    setDate(null)
    onReturnValue('')
    const searchQuery = router.asPath.split('?')[1]
    const isHasSearchQuery = searchQuery?.includes('search')
    if (isHasSearchQuery) {
      router.replace(`/patients?${searchQuery.split('&')[0]}`)
    } else {
      router.replace(`/patients`)
    }
    onClose()
  }

  const datefilterchange = (startDate = null, endDate = null) => {
    if (startDate || endDate) {
      // console.log(startDate, endDate)
      const newStartDate = startDate
        ? formatDateToYYYYMMDD(new Date(startDate || ''))
        : null
      const newEndDate = endDate
        ? formatDateToYYYYMMDD(new Date(endDate || ''))
        : null

      const newFilterString = filterString
        .split('&')
        .filter(
          (str) =>
            !str.includes('start_date') &&
            !str.includes('end_date') &&
            str !== ''
        )
        .join('&')
        .replace(/%20/g, '')
      //remove %20 from newFilterString
      // const newFilterString2 = newFilterString.replace(/%20/g, '')
      // console.log('newFilterString', newFilterString)
      const searchQuery = router.asPath.split('?')[1]
      const isHasSearchQuery = searchQuery?.includes('search')
      const dateFilterStart = `start_date=${newStartDate}`
      const dateFilterEnd = `end_date=${newEndDate}`
      const dateFilter = `${dateFilterStart}&${dateFilterEnd}`
      const result =
        newStartDate && newEndDate
          ? `&${dateFilter}`
          : newStartDate
          ? `&${dateFilterStart}`
          : newEndDate
          ? `&${dateFilterEnd}`
          : ''

      if ((newStartDate || newEndDate) && isHasSearchQuery) {
        router.replace(`/patients?${searchQuery}&${result}`)
      } else if (isHasSearchQuery) {
        router.replace(`/patients?${searchQuery}`)
      } else if (newStartDate || newEndDate) {
        router.replace(`/patients?${newFilterString}${result}`)
      } else if (newFilterString) {
        router.replace(`/patients?${newFilterString}`)
      }
      const final = `${newFilterString}${result.trim()}`.trim()
      // console.log(final)
      setFilterString(final)
      onReturnValue(final)
      // return
    }
  }

  return (
    <Stack spacing={3} sx={{ maxWidth: 485, p: '2rem', position: 'relative' }}>
      <Title
        title={t('filter_title')}
        withAccent
        actionButtons={
          <IconButton onClick={onClose}>
            <GridCloseIcon />
          </IconButton>
        }
      />
      <Typography variant="caption" sx={{ color: '#616161' }}>
        {t('filter_description')}
      </Typography>

      <form onChange={formik.handleSubmit} style={{ position: 'relative' }}>
        <Stack spacing={3} sx={{ position: 'relative' }}>
          <Accordion>
            <AccordionSummary
              sx={{ backgroundColor: '#FAFAFA' }}
              expandIcon={<GridExpandMoreIcon />}
              ref={accordionRegistered}
            >
              <Typography>{t('carte_status')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ padding: '14px' }}>
                <Grid container spacing={2}>
                  <Grid item sm={6} md={6}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="registered"
                            onChange={() => {
                              setRegistered(!registered)
                            }}
                            checked={registered}
                          />
                        }
                        label={t('patient_number_registered')}
                      />
                    </FormGroup>
                  </Grid>
                  <Grid item sm={6} md={6}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="noRegistered"
                            onChange={() => {
                              setNotRegistered(!notRegistered)
                            }}
                            checked={notRegistered}
                          />
                        }
                        label={t('patient_number_not_registered')}
                      />
                    </FormGroup>
                  </Grid>
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              sx={{ backgroundColor: '#FAFAFA' }}
              expandIcon={<GridExpandMoreIcon />}
              ref={accordionClinic}
            >
              <Typography>{t('clinic_accordion_title')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ padding: '14px' }}>
                <Grid container spacing={2}>
                  {clinicData?.data?.map(
                    (clinic: ClinicDataType, index: number) => (
                      <Grid item sm={6} md={6} key={index}>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                name="clinicData"
                                onChange={() => {
                                  if (
                                    formik.values.clinicData?.includes(
                                      clinic.id
                                    )
                                  ) {
                                    formik.setFieldValue(
                                      'clinicData',
                                      formik.values.clinicData?.filter(
                                        (id) => id !== clinic.id
                                      )
                                    )
                                  } else {
                                    formik.setFieldValue('clinicData', [
                                      ...formik.values.clinicData,
                                      clinic.id,
                                    ])
                                  }
                                }}
                                checked={formik.values.clinicData?.includes(
                                  clinic.id
                                )}
                              />
                            }
                            label={clinic.clinic_kanji}
                          />
                        </FormGroup>
                      </Grid>
                    )
                  )}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              sx={{ backgroundColor: '#FAFAFA' }}
              expandIcon={<ExpandMoreIcon />}
              ref={accordionDoctor}
            >
              <Typography>{t('doctor_accordion_title')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ padding: '14px' }}>
                <Grid container spacing={2}>
                  {doctorData?.data?.map((doctor: DoctorData) => (
                    <Grid item sm={6} md={6} key={doctor.id}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="doctorData"
                              onChange={() => {
                                if (
                                  formik.values.doctorData?.includes(doctor.id)
                                ) {
                                  formik.setFieldValue(
                                    'doctorData',
                                    formik.values.doctorData?.filter(
                                      (id) => id !== doctor.id
                                    )
                                  )
                                } else {
                                  formik.setFieldValue('doctorData', [
                                    ...formik.values.doctorData,
                                    doctor.id,
                                  ])
                                }
                              }}
                              checked={formik.values.doctorData?.includes(
                                doctor.id
                              )}
                            />
                          }
                          label={doctor.doctor_displayname}
                        />
                      </FormGroup>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              sx={{ backgroundColor: '#FAFAFA' }}
              expandIcon={<ExpandMoreIcon />}
              ref={accordionDate}
            >
              <Typography>{t('date_accordion_title')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <MaDatePicker
                fullWidth
                label={t('date_accordion_title')}
                value={date}
                onChange={handleDateChange2}
                slotProps={{
                  actionBar: {
                    actions: ['clear'],
                  },
                }}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              sx={{ backgroundColor: '#FAFAFA' }}
              expandIcon={<ExpandMoreIcon />}
              ref={accordionStatus}
            >
              <Typography>
                {t('next_reservation_status_accordion_title')}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ padding: '14px' }}>
                <Grid container spacing={2}>
                  {treatmentStatusData?.data?.data?.map(
                    (status: TreatmentStatuses, index: number) => (
                      <Grid item sm={6} md={6} key={index}>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                name="statusData"
                                onChange={() => {
                                  if (
                                    formik.values.statusData?.includes(
                                      status.id
                                    )
                                  ) {
                                    formik.setFieldValue(
                                      'statusData',
                                      formik.values.statusData?.filter(
                                        (id) => id !== status.id
                                      )
                                    )
                                  } else {
                                    formik.setFieldValue('statusData', [
                                      ...formik.values.statusData,
                                      status.id,
                                    ])
                                  }
                                }}
                                checked={formik.values.statusData?.includes(
                                  status.id
                                )}
                              />
                            }
                            label={status.treatment_status}
                          />
                        </FormGroup>
                      </Grid>
                    )
                  )}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              sx={{ backgroundColor: '#FAFAFA' }}
              expandIcon={<ExpandMoreIcon />}
              ref={accordionReservationDate}
            >
              <Typography>{t('next_reservation_date')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ padding: '14px' }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <MaDatePicker
                    fullWidth
                    // maxDate={dayjs(new Date())}
                    value={
                      formik.values.date?.start
                        ? dayjs(formik.values.date?.start)
                        : null
                    }
                    onChange={(value: any) => {
                      handleDateChange(value, (date: any) => {
                        formik.setFieldValue('date', {
                          start: date,
                          end: formik.values.date?.end,
                        })
                        datefilterchange(date, formik.values.date?.end)
                      })
                    }}
                    slotProps={{
                      actionBar: {
                        actions: ['clear'],
                      },
                      textField: { size: 'small' },
                    }}
                  />
                  <Typography> - </Typography>
                  <MaDatePicker
                    fullWidth
                    // disabled={!formik.values.date?.start}
                    // maxDate={dayjs(new Date())}
                    minDate={dayjs(formik.values.date?.start)}
                    value={
                      formik.values.date?.end
                        ? dayjs(formik.values.date?.end)
                        : null
                    }
                    onChange={(value: any) => {
                      handleDateChange(value, (date: any) => {
                        formik.setFieldValue('date', {
                          start: formik.values.date?.start,
                          end: date,
                        })
                        datefilterchange(formik.values.date?.start, date)
                      })
                    }}
                    slotProps={{
                      actionBar: {
                        actions: ['clear'],
                      },
                      textField: { size: 'small' },
                    }}
                  />
                </Stack>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              sx={{ backgroundColor: '#FAFAFA' }}
              expandIcon={<ExpandMoreIcon />}
              ref={accordionLabel}
            >
              <Typography>{t('label_accordion_title')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ padding: '14px' }}>
                <Grid container spacing={2}>
                  {labelData?.data?.map((label: LabelData) => (
                    <Grid item sm={6} md={6} key={label.id}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="labelData"
                              onChange={() => {
                                if (
                                  formik.values.labelData?.includes(label.id)
                                ) {
                                  formik.setFieldValue(
                                    'labelData',
                                    formik.values.labelData?.filter(
                                      (id) => id !== label.id
                                    )
                                  )
                                } else {
                                  formik.setFieldValue('labelData', [
                                    ...formik.values.labelData,
                                    label.id,
                                  ])
                                }
                              }}
                              checked={formik.values.labelData?.includes(
                                label.id
                              )}
                            />
                          }
                          label={label.name}
                        />
                      </FormGroup>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Box
            position="sticky"
            bottom={0}
            left={0}
            right={0}
            sx={{ backgroundColor: 'white', py: 1 }}
          >
            <Stack spacing={1}>
              <MaButton onClick={handleReset} variant="secondary">
                {t('reset_button')}
              </MaButton>
              <MaButton onClick={onClose}>{t('apply_button')}</MaButton>
            </Stack>
          </Box>
        </Stack>
      </form>
    </Stack>
  )
}
