import { RichTextBox, RotateDevice } from '@components/molecules'
import { Navbar, Sidebar, Title } from '@components/organism'
import { TitleType, header } from '@components/organism/navbar'
import {
  Badge,
  Box,
  Chip,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { t } from 'i18next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined'
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined'
import Link from 'next/link'
import { MaButton } from '@components/atoms'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { useAuth } from '@store/auth'
import { getPatientDetail } from '@utils/services/patients'
import { usePatient } from '@store/patient'
import { countAge, countAgeYearMonth, formatDateJapan } from '@utils/common'
import { getConsultationDetail } from '@utils/services/consultation'

type LayoutWithPatientProps = {
  children: React.ReactNode
  title?: TitleType
}

export default function LayoutWithPatient({
  title = 'Dashboard',
  children,
}: LayoutWithPatientProps) {
  const router = useRouter()
  const { id } = router.query
  const { handleLogin }: any = useAuth()
  const {
    state: { patient },
    handleSetPatient,
  }: any = usePatient()
  const [isCollapse, setIsCollapse] = React.useState(false)
  const isTabletView = useMediaQuery('(max-width: 1180px)')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [router.pathname])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('ma-user-chat') || '{}')
    if (data?.id) {
      handleLogin(data)
    }
  }, [])

  const handelGetPatientDetail = async (id: string) => {
    try {
      const res = await getPatientDetail(id)
      if (res?.code === 200) {
        handleSetPatient(res.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleGetConsultationDetail = async (id: string) => {
    try {
      const res = await getConsultationDetail(id)
      if (res?.code === 200) {
        // handelGetPatientDetail(res?.data?.patient_id)
        // handleSetConsultation(res.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (id) {
      // handleGetConsultationDetail(id as string)
    }
  }, [id])

  return (
    <>
      <Head>
        <title>{t(header[title]) ?? 'Navbar'}</title>
        {/* favicon */}
        <link
          href={`${process.env.NEXT_PUBLIC_BASEPATH || ''}/favicon.ico`}
          rel="icon"
          type="image/x-icon"
        />
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASEPATH || ''}/icon?<generated>`}
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href={`${
            process.env.NEXT_PUBLIC_BASEPATH || ''
          }/apple-icon?<generated>`}
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href={`${process.env.NEXT_PUBLIC_BASEPATH || ''}/apple-icon.png`}
          type="image/png"
        />
        <link
          rel="shortcut icon"
          href={`${process.env.NEXT_PUBLIC_BASEPATH || ''}/icon.png`}
          type="image/png"
        />
        <meta
          content="width=device-width; initial-scale=1.0;"
          name="viewport"
        />
      </Head>
      <Stack direction="row">
        <Box sx={{ width: '75%' }}>
          <Navbar
            elevation={0}
            isCollapse={isCollapse}
            position="relative"
            title={title}
          />
          <Box
            sx={{
              display: 'flex',
              overflow: 'auto',
              overflowX: 'hidden',
              // height: '100vh',
            }}
          >
            <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
            <Box
              sx={{
                flex: 1,
              }}
            >
              <Box
                id="main-content"
                sx={{
                  // padding: isTabletView ? '10px' : '2rem',
                  paddingTop: 0,
                  ml: isTabletView ? 'auto' : !isCollapse ? '245px' : '110px',
                }}
              >
                {children}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'relative',
            width: '25%',
            backgroundColor: 'white',
            pl: 2,
            pr: 2,
            height: '100vh',
            overflow: 'auto',
            pb: 5,
          }}
        >
          <Box position={'sticky'} top={0} zIndex={1} bgcolor="white" pt={3}>
            <Title title="Patient Information" />
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Image
              src="/assets/images/default-user.jpeg"
              alt="Patient"
              width={100}
              height={100}
            />
            .
          </Box>
          <Stack spacing={2}>
            <Box>
              <Typography variant="caption">
                {patient?.patient_number}
              </Typography>
              <Typography variant="body1">
                {patient?.patient_furigana}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="h6">{patient?.patient_kanji}</Typography>
                <Chip
                  // sx={{
                  //   backgroundColor: '#F44336',
                  // }}
                  size="small"
                  label={patient?.gender?.label}
                  // color="error"
                />
              </Stack>
              <Typography variant="body1">{patient?.patient_romaji}</Typography>
            </Box>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CalendarTodayOutlinedIcon sx={{ color: '#616161' }} />
                <Typography variant="body1">
                  Date of Birth :{' '}
                  {formatDateJapan(patient?.date_of_birth || '')} ({' '}
                  {countAge(patient?.date_of_birth || '')})
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CalendarTodayOutlinedIcon sx={{ color: '#616161' }} />
                <Typography variant="body1">
                  Date of First Consult :{' '}
                  {formatDateJapan(patient?.first_consult?.date || '')}{' '}
                  {countAgeYearMonth(
                    patient?.first_consult?.date || '',
                    patient?.date_of_birth || ''
                  )}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <HomeOutlinedIcon sx={{ color: '#616161' }} />
                <Typography variant="body1">
                  Clinic : {patient?.clinic?.clinic_kanji}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Person4OutlinedIcon sx={{ color: '#616161' }} />
                <Typography variant="body1">
                  Doctor in Charge : Doctor Name
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Person4OutlinedIcon sx={{ color: '#616161' }} />
                <Typography variant="body1">
                  Staff In Charge : Staff Name
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Person4OutlinedIcon sx={{ color: '#616161' }} />
                <Typography variant="body1">
                  Personal Doctor : Doctor Name
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <MedicalServicesOutlinedIcon sx={{ color: '#616161' }} />
                <Typography variant="body1">
                  Treatment Plan :{' '}
                  <Link
                    href="/"
                    style={{
                      color: '#358AFF',
                      textDecoration: 'none',
                    }}
                  >
                    Click Here
                  </Link>
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <MaButton sx={{ whiteSpace: 'nowrap' }} fullWidth size="small">
                  Invisalign
                </MaButton>
                <MaButton sx={{ whiteSpace: 'nowrap' }} fullWidth size="small">
                  Invisalign CC
                </MaButton>
                <MaButton sx={{ whiteSpace: 'nowrap' }} fullWidth size="small">
                  Webceph CC
                </MaButton>
              </Stack>
            </Stack>
            <Box>
              <Typography variant="body1" mb={1}>
                ラベル
              </Typography>
              <Stack direction="row" spacing={1}>
                <Box
                  sx={{
                    color: 'white',
                    backgroundColor: '#2B5692',
                    borderRadius: '5px',
                    p: 1,
                  }}
                >
                  処方期限ギリギリ
                </Box>
                <Box
                  sx={{
                    color: 'white',
                    backgroundColor: '#4CAF50',
                    borderRadius: '5px',
                    p: 1,
                  }}
                >
                  肝炎
                </Box>
              </Stack>
            </Box>
            <Box>
              <Typography variant="body1" mb={1}>
                メモ
              </Typography>
              <RichTextBox />
            </Box>
          </Stack>
          <Box mt={2}>
            <MaButton onClick={() => router.push('/patient/123')} fullWidth>
              <MenuBookIcon sx={{ color: 'white' }} /> {'　'}DETAIL PATIENT
            </MaButton>
          </Box>
        </Box>
      </Stack>
      <RotateDevice />
    </>
  )
}
