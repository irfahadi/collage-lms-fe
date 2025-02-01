import { Navbar, Sidebar } from '@components/organism'
import { Dashboard } from '@models/Dashboard'
import { Box, useMediaQuery } from '@mui/material'
import { usePatients } from '@utils/hooks/use-patients'
import { t } from 'i18next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

type MainLayoutProps = {
  children: React.ReactNode
  title?: string
  isWithSidebar?: boolean
}

export default function MainLayout({
  title = 'Dashboard',
  children,
  isWithSidebar = true,
}: MainLayoutProps) {
  const router = useRouter()
  const [isCollapse, setIsCollapse] = React.useState(false)
  const isTabletView = useMediaQuery('(max-width: 1180px)')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [router.pathname])

  // if (user?.created_at === user?.updated_at) {
  //   router.replace('/change-password')
  //   return
  // }

  return (
    <>
      <Head>
        <title>Skuring</title>
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
        {isWithSidebar && (
          <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
        )}
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
              ml:
                isTabletView || !isWithSidebar
                  ? 'auto'
                  : !isCollapse
                  ? '245px'
                  : '110px',
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  )
}
