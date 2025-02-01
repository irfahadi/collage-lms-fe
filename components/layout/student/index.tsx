import { Navbar, Sidebar } from '@components/organism'
import SidebarStudent from '@components/organism/sidebar-stundent'
import { Dashboard } from '@models/Dashboard'
import { Box, useMediaQuery } from '@mui/material'
import { usePatient } from '@store/patient'
import { usePatients } from '@utils/hooks/use-patients'
import { t } from 'i18next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

type StudentLayoutProps = {
  children: React.ReactNode
  title?: string
  isWithSidebar?: boolean
}

export default function StudentLayout({
  title = 'Dashboard',
  children,
  isWithSidebar = true,
}: StudentLayoutProps) {
  const router = useRouter()
  const {
    state: { patient },
    handleSetPatient,
  }: any = usePatient()
  const [isCollapse, setIsCollapse] = React.useState(false)
  const isTabletView = useMediaQuery('(max-width: 1180px)')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [router.pathname])

  // if (user?.created_at === user?.updated_at) {
  //   router.replace('/change-password')
  //   return
  // }

  const menuItems = [
    {
      label: 'Pertemuan 1',
      children: [
        { label: 'Deskripsi', onClick: () => router.push('/detail/deskripsi') },
        { label: 'Modul 1' },
        { label: 'Modul 2' },
        { label: 'Modul 3' },
        { label: 'Kuis', onClick: () => router.push('/detail/kuis') },
      ],
    },
    { label: 'Pertemuan 2' },
    { label: 'Pertemuan 3' },
    { label: 'Pertemuan 4' },
  ]

  return (
    <>
      <Head>
        <title>
          {router.pathname.includes('/patients/[id]')
            ? !patient?.patient_kanji
              ? t('loading')
              : `${patient?.patient_kanji} (${patient?.patient_furigana})`
            : title ?? 'Navbar'}
        </title>
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
      <Navbar isCollapse={isCollapse} title={title} />
      <Box
        sx={{
          display: 'flex',
          overflow: 'auto',
          overflowX: 'hidden',
          // height: '100vh',
        }}
      >
        <SidebarStudent menuItems={menuItems} />
        <Box
          sx={{
            paddingTop: '4rem',
            flex: 1,
          }}
        >
          <Box
            id="main-content"
            sx={{
              padding: isTabletView ? '10px' : '2rem',
              // paddingTop: 0,
              ml: isTabletView ? 'auto' : !isCollapse ? '245px' : '110px',
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  )
}
