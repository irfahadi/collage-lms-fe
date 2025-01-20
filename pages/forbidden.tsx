import { MaButton } from '@components/atoms'
import { Box, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import forbiddenImg from '@assets/images/forbidden.png'

export default function ForbiddenPage() {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <>
      <Head>
        <title>403 - Forbidden</title>
      </Head>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Image src={forbiddenImg} width={386} height={288} alt="forbidden" />
          <Typography variant="h3" fontWeight="bold" mt={2}>
            {t('access_restricted')}
          </Typography>
          <Typography variant="subtitle1">
            {t('you_dont_have_permission_access_page')}
          </Typography>
          <Stack direction="row" spacing={2} mt={4}>
            <MaButton
              onClick={() => {
                router.back()
              }}
              variant="secondary"
            >
              {t('back_to_previous_page')}
            </MaButton>
            <MaButton onClick={() => router.replace('/')}>
              {t('back_to_homepage')}
            </MaButton>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
