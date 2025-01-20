import { MaButton } from '@components/atoms'
import { Box, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

export default function Custom404() {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
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
          <Typography variant="h1" color="#1C5EBA" fontWeight="bold">
            404
          </Typography>
          <Typography variant="h4" fontWeight="bold" mt={2}>
            {t('page_not_found')}
          </Typography>
          <Typography variant="subtitle1">{t('page_doesnt_exist')}</Typography>
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
