import React, { useEffect } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { MaButton } from '@components/atoms'
import { Navbar, Sidebar } from '@components/organism'
import Head from 'next/head'
import { checkUser } from '@utils/services/user'

const SectionCard = ({
  title,
  icon,
  description,
  onClick,
}: {
  title?: string
  icon?: any
  description?: string
  onClick?: any
}) => {
  return (
    <Card sx={{ cursor: 'pointer', p: 1 }} onClick={onClick}>
      <CardContent>
        <Box
          sx={{
            width: '100%',
            height: 110,
            backgroundColor: '#E4E4E4',
            borderRadius: 2,
            marginBottom: 2,
          }}
        />
        <Typography color="#212121" variant="h6">
          {title}
        </Typography>
        <Typography variant="body1" color="#212121" mt={1}>
          {description}
        </Typography>
      </CardContent>
      <Button sx={{ display: 'block', mx: 'auto' }}>Detail Kelas</Button>
    </Card>
  )
}

export const ConsultationIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_20381_202584)">
      <path
        d="M14.7143 37.5722C12.6714 37.5722 11 39.2436 11 41.2865H37C37 39.2436 35.3286 37.5722 33.2857 37.5722H25.8571V33.8579H31.4286C33.4714 33.8579 35.1429 32.1865 35.1429 30.1436H20.2857C17.2029 30.1436 14.7143 27.655 14.7143 24.5722C14.7143 22.5479 15.81 20.7836 17.4257 19.8179C16.8871 19.0565 16.5714 18.1465 16.5714 17.1436C16.5714 16.7536 16.6457 16.3636 16.7386 15.9922C13.3771 17.385 11 20.7093 11 24.5722C11 29.6979 15.16 33.8579 20.2857 33.8579V37.5722H14.7143Z"
        fill="#616161"
      />
      <path
        d="M21.3256 12.5186C23.8328 12.5743 25.8571 14.6171 25.8571 17.1429C25.8571 18.5357 25.2442 19.7614 24.2785 20.6157L25.3742 23.6243L27.1199 22.9929L27.7514 24.7386L31.2428 23.4757L30.6114 21.73L32.3571 21.0986L27.2685 7.11429L25.5228 7.74571L24.8914 6L21.3999 7.26286L22.0314 9.00857L20.2856 9.65857L21.3256 12.5186Z"
        fill="#616161"
      />
      <path
        d="M21.2142 19.9308C22.7527 19.9308 23.9999 18.6836 23.9999 17.1451C23.9999 15.6066 22.7527 14.3594 21.2142 14.3594C19.6757 14.3594 18.4285 15.6066 18.4285 17.1451C18.4285 18.6836 19.6757 19.9308 21.2142 19.9308Z"
        fill="#616161"
      />
    </g>
    <rect
      x="1.5"
      y="1.5"
      width="45"
      height="45"
      stroke="#616161"
      strokeWidth="3"
    />
    <defs>
      <clipPath id="clip0_20381_202584">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

//use server side rendering to check access token
export async function getServerSideProps(context: any) {
  const { req, res } = context
  const { access_token_chat } = req.cookies
  //get query params
  const { token } = context.query
  res.setHeader('Cache-Control', 'no-store')
  //   if (!access_token_chat && !token) {
  //     //get origin
  //     const origin =
  //       req.headers.origin || // Header `Origin` jika tersedia
  //       `http${req.headers['x-forwarded-proto'] === 'https' ? 's' : ''}://${
  //         req.headers.host
  //       }` // Fallback ke `host`
  //     const url =
  //       (process.env.NEXT_PUBLIC_BASEPATH || '') +
  //       process.env.NEXT_PUBLIC_ORVA_URL +
  //       '/login?redirect=' +
  //       origin +
  //       '/?token=xxx'
  //     return {
  //       redirect: {
  //         destination: url,
  //         permanent: false,
  //       },
  //     }
  //   }

  return {
    props: {},
  }
}

export default function DashboardPage() {
  const { t } = useTranslation()
  const router = useRouter()
  const { token } = router.query

  const [isLoading, setIsLoading] = React.useState(false)
  const [statusSubscribe, setStatusSubscribe] = React.useState(false)
  const isTabletView = useMediaQuery('(max-width: 1180px)')

  //   const handleCheckUser = async (token: string) => {
  //     try {
  //       setIsLoading(true)
  //       const res = await checkUser(token)
  //       if (res?.code === 200) {
  //         document.cookie = cookie.serialize('access_token_chat', token, {
  //           sameSite: true,
  //           path: '/',
  //           maxAge: 60 * 60 * 24 * 30, //1 month
  //         })
  //         const role = await handleCheckRole(res?.data?.doctor?.id)
  //         console.log(role, res?.data?.doctor?.id)
  //         handleLogin({
  //           ...res?.data,
  //           role: role ? 'doctor consultant' : 'doctor',
  //           clinic_id:
  //             res?.data?.clinic_id ||
  //             Number(process.env.NEXT_PUBLIC_CLINIC_ID || ''),
  //         })

  //         if (role) {
  //           router.replace('/chat')
  //         } else {
  //           router.replace('/')
  //         }
  //         setIsLoading(false)
  //       } else {
  //         throw res
  //       }
  //     } catch (err) {
  //       setIsLoading(false)
  //       console.log(err)
  //     }
  //   }

  //   const handleCheckRole = async (id: number) => {
  //     try {
  //       const res = await getDoctorConsultant()
  //       if (res?.code === 200) {
  //         const list = res?.data?.value
  //         handleCheckSubscribe()
  //         return list.includes(id)
  //       } else {
  //         throw res
  //       }
  //     } catch (err) {
  //       console.log(err)
  //       return false
  //     }
  //   }

  //   const handleCheckSubscribe = async () => {
  //     try {
  //       const res = await getStatusSubscribe()
  //       if (res?.code === 200) {
  //         setStatusSubscribe(res?.data?.is_consultation_membership)
  //       } else {
  //         setStatusSubscribe(false)
  //       }
  //       setIsLoading(false)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  // useEffect(() => {
  //   handleCheckSubscribe()
  // }, [])

  return (
    <>
      <Head>
        <title>{t('dashboard')}</title>
      </Head>
      <Stack direction="row">
        <Box
          position="relative"
          sx={{
            width: !statusSubscribe || isTabletView ? '100%' : '83%',
            overflowY: 'hidden',
          }}
        >
          <Navbar
            withSiderbar={false}
            isCollapse={false}
            position="absolute"
            title="Dashboard"
          />
          {/* {!isLoading ? ( */}
          <Box
            sx={{
              paddingTop: '4rem',
              mb: 10,
              pr: 0,
            }}
          >
            <Box
              sx={{
                minHeight: '180px',
                color: 'white',
                display: 'flex',
                alignItems: 'flex-end',
                background:
                  'linear-gradient(92.21deg, #388E3C 20.52%, #66BB6A 68.79%, #43A047 89.48%)',
              }}
            >
              <Box sx={{ width: '100%', mb: 2 }}>
                <Stack
                  direction="row"
                  mx={4}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography variant="h6">Halo User</Typography>
                    <Typography variant="subtitle1">
                      Selamat datang di Sistem Kuliah Daring - skuring.com
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
            <Box mt={4} mx={4}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4} md={3}>
                  <SectionCard
                    title={t('service_1_title')}
                    icon={<ConsultationIcon />}
                    description={t('service_1_desc')}
                    onClick={() => router.push('detail')}
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                  <SectionCard
                    title={t('service_2_title')}
                    icon={<ConsultationIcon />}
                    description={t('service_2_desc')}
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                  <SectionCard
                    title={t('service_3_title')}
                    icon={<ConsultationIcon />}
                    description={t('service_3_desc')}
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                  <SectionCard
                    title={t('service_3_title')}
                    icon={<ConsultationIcon />}
                    description={t('service_3_desc')}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* ) : null} */}
        </Box>
      </Stack>
    </>
  )
}
