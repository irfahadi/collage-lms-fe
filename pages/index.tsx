import React, { useEffect } from 'react'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { MaButton } from '@components/atoms'
import { Navbar, Sidebar } from '@components/organism'
import Head from 'next/head'
import cookie from 'cookie'
import { useAuth } from '@store/auth'
import { checkUser } from '@utils/services/user'
import MainLayout from '@components/layout/main'

const SectionCard = ({
  title,
  icon,
  description,
  acctionButton,
}: {
  title?: string
  icon?: any
  description?: string
  acctionButton?: any
}) => {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1}>
          {icon}
          <Typography color="#212121" variant="h6">
            {title}
          </Typography>
        </Stack>
        <Typography variant="body2" color="#212121" mt={1}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ pb: 2 }}>{acctionButton}</CardActions>
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

export default function DashboardPage() {
  const { t } = useTranslation()
  const {
    state: { user },
    handleLogin,
  }: any = useAuth()
  const router = useRouter()
  const { token } = router.query

  const handleCheckUser = async (token: string) => {
    try {
      const res = await checkUser(token)
      if (res?.code === 200) {
        document.cookie = cookie.serialize('access_token_chat', token, {
          sameSite: true,
          path: '/',
          maxAge: 60 * 60 * 24 * 30, //1 month
        })

        handleLogin({
          ...res?.data,
          clinic_id:
            res?.user?.clinic_id ||
            Number(process.env.NEXT_PUBLIC_CLINIC_ID || ''),
        })
        router.replace('/')
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (token) {
      handleCheckUser(token as string)
    }
  }, [token])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('ma-user-chat') || '{}')
    if (data?.id) {
      handleLogin(data)
    }
  }, [])

  // return <EmptyChat />
  return (
    <>
          <Navbar
            withSiderbar={false}
            isCollapse={false}
            position="absolute"
            title="Dashboard"
          />
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
                    <Typography variant="h6">
                      Hello, {user?.fullname}
                    </Typography>
                    <Typography variant="subtitle1">
                      You are not registered as consultant member, click button
                      “Enroll Now” below to register
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Consultation Dashboard
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
            <Box mt={4} mx={4}>
              <Grid container spacing={4}>
                <Grid item sm={4}>
                  <SectionCard
                    title="Consultation"
                    icon={<ConsultationIcon />}
                    description="Receive a thorough examination of your teeth and oral health. Our dentists will assess your teeth, gums, nerves, and soft tissues. Early detection of cavities, gum disease, and other oral issues is possible. We will provide personalized treatment recommendations based on your unique needs."
                    acctionButton={
                      <MaButton
                        sx={{
                          mx: 'auto',
                        }}
                        onClick={() => router.push('/patients')}
                      >
                        select patient to consult
                      </MaButton>
                    }
                  />
                </Grid>
                <Grid item sm={4}>
                  <SectionCard
                    title="歯のホワイトニング"
                    icon={<ConsultationIcon />}
                    description="プロフェッショナルな歯のホワイトニング治療で、より明るい笑顔を手に入れましょう。当院では、歯の表面の汚れを落とす安全かつ効果的なホワイトニング技術を使用します。あなたの具体的なニーズと目標に合わせて、最適なホワイトニング方法をご提案します。"
                    acctionButton={
                      <MaButton
                        sx={{
                          mx: 'auto',
                        }}
                        onClick={() => router.push('/chat')}
                      >
                        View consultation chat
                      </MaButton>
                    }
                  />
                </Grid>
                <Grid item sm={4}>
                  <SectionCard
                    title="インプラント"
                    icon={<ConsultationIcon />}
                    description="失われた歯をインプラントで補う最善の解決策を見つけましょう。当院の歯科医は、あなたがインプラント治療に適しているかどうかを判断するために、総合的な評価を行います。インプラントの手術手順、利用可能なインプラントの種類、および概算費用について詳細な説明を受けられます。"
                    acctionButton={
                      <MaButton
                        variant="error"
                        sx={{
                          mx: 'auto',
                        }}
                        onClick={() => {}}
                      >
                        Cancel subscribe
                      </MaButton>
                    }
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
    </>
  )
}

DashboardPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout title="Dashboard">{page}</MainLayout>
}
