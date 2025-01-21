import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { AuthProvider } from '@store/auth'
import '@styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import '../i18n'
import { useTranslation } from 'react-i18next'
import 'react-toastify/dist/ReactToastify.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-quill/dist/quill.snow.css'
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { PatientProvider } from '@store/patient'
import '../utils/string.extensions'

type NextPageWithLayout = NextPage & {
  getLayout?: (page?: ReactElement) => ReactNode | ReactElement
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  const { i18n, t } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('lang') || 'jp')
  }, [])

  const styleoveride =
    i18n.language === 'en'
      ? `
      @font-face {
        font-family: 'SF Pro Display';
        src: url(${
          (process.env.NEXT_PUBLIC_BASEPATH || '') +
          '/assets/fonts/SFProDisplay-Regular.ttf'
        }) format('truetype');
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: 'SF Pro Display';
        src: url(${
          (process.env.NEXT_PUBLIC_BASEPATH || '') +
          '/assets/fonts/SFProDisplay-Medium.ttf'
        }) format('truetype');
        font-weight: 500;
        font-style: normal;
      }
      @font-face {
        font-family: 'SF Pro Display';
        src: url(${
          (process.env.NEXT_PUBLIC_BASEPATH || '') +
          '/assets/fonts/SFProDisplay-Semibold.ttf'
        }) format('truetype');
        font-weight: 600;
        font-style: normal;
      }
      @font-face {
        font-family: 'SF Pro Display';
        src: url(${
          (process.env.NEXT_PUBLIC_BASEPATH || '') +
          '/assets/fonts/SFProDisplay-Bold.ttf'
        }) format('truetype');
        font-weight: bold;
        font-style: normal;
      }
      `
      : `
      @font-face {
        font-family: 'Hiramaru';
        src: url(${
          (process.env.NEXT_PUBLIC_BASEPATH || '') +
          '/assets/fonts/Hiramaru.otf'
        }) format('opentype');
      }`

  const theme = createTheme({
    typography: {
      fontFamily:
        i18n.language === 'en'
          ? 'SF Pro Display !important'
          : 'Hiramaru !important',
      body1: {
        fontSize: '16px !important',
        '@media (max-width: 1440px)': {
          fontSize: '14px !important',
        },
      },
      body2: {
        fontSize: '14px !important',
        '@media (max-width: 1440px)': {
          fontSize: '12px !important',
        },
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: styleoveride,
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            '& .MuiFormLabel-asterisk': {
              color: 'rgba(255, 255, 255, .4)',
              fontSize: '10px',
            },
            '& .MuiFormLabel-asterisk:after': {
              content: `"*"`,
              color: 'red',
              backgroundColor: 'transparent',
              fontSize: '16px',
              // color: 'white',
              // backgroundColor: 'red',
              // borderRadius: '50%',
              // padding: '2px',
            },
            // '&.MuiFormLabel-filled .MuiFormLabel-asterisk:after': {
            // color: 'white',
            // backgroundColor: 'red',
            // borderRadius: '30px',
            // padding: '2px 6px',
            // },
            // '&.Mui-focused .MuiFormLabel-asterisk:after': {
            // color: 'white',
            // backgroundColor: 'red',
            // borderRadius: '30px',
            // padding: '2px 6px',
            // },
          },
        },
      },
    },
  })

  useEffect(() => {
    const handleResize = () => {
      const ispotrait = window.innerHeight > window.innerWidth
      const selector = document.querySelector('.rotate-device') as HTMLElement
      if (selector) {
        if (!ispotrait) {
          selector.style.display = 'none'
        }
      }
    }

    // Add event listener for resize
    window.addEventListener('resize', handleResize)

    // Initial check for orientation
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array so the effect runs on every render

  return (
    <AuthProvider>
      <PatientProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
              {getLayout(<Component {...pageProps} />)}
            </Box>
            <ToastContainer position="bottom-right" />

            {/* <ModalIdle
              open={openModal}
              onIdleLogout={onIdleLogout}
              remaining={remaining}
              stillHere={() => activate()}
              isIdle={false}
            /> */}
          </LocalizationProvider>
        </ThemeProvider>
      </PatientProvider>
    </AuthProvider>
  )
}
