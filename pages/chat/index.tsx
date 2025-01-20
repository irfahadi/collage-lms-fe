import React from 'react'
import MainLayout from '@components/layout/main'
import { useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import EmptyChat from '@components/organism/empty-chat'

export default function ChatHomePage() {
  const { t } = useTranslation()
  const router = useRouter()
  const isTabletView = useMediaQuery('(max-width: 1180px)')

  return <EmptyChat />
}

ChatHomePage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout title="Dashboard">{page}</MainLayout>
}
