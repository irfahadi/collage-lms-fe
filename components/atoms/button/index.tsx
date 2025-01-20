import {
  ButtonProps,
  ButtonPropsColorOverrides,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material'
import React from 'react'
import * as MuiIcons from '@mui/icons-material'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    success: true
    error: true
  }
}

export type MaButtonProps = {
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'text' | 'external'
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  disabled?: boolean
  fullWidth?: boolean
  isUpperCase?: boolean
  onClick?: (e: any) => void
  sx?: any
  type?: 'button' | 'submit' | 'reset'
  color?: any
}

export default function MaButton({
  variant = 'primary',
  children,
  startIcon,
  endIcon,
  size = 'medium',
  isUpperCase = true,
  disabled = false,
  type = 'button',
  onClick,
  color,
  ...rest
}: MaButtonProps) {
  const StartIcon = startIcon
    ? MuiIcons[startIcon as keyof typeof MuiIcons]
    : null
  // const EndIcon = endIcon ? MuiIcons[endIcon as keyof typeof MuiIcons] : null
  const isTabletView = useMediaQuery('(max-width: 1180px)')
  const { i18n } = useTranslation()

  const variantMap: any = {
    primary: 'contained',
    secondary: 'outlined',
    success: 'success',
    error: 'error',
    text: 'text',
    danger: 'contained',
    external: 'external',
  }

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
      fontFamily: i18n.language === 'en' ? 'SF Pro Display' : 'Hiramaru',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          outlined: {
            borderRadius: 0,
            ':hover': {
              backgroundColor: '#B4D4FF',
            },
          },
          text: {
            ':hover': {
              backgroundColor: '#E1F5FE',
            },
            color: 'black',
          },
          contained: {
            borderRadius: 0,
          },
        },
        variants: [
          {
            props: { variant: 'contained' } as any,
            style: {
              backgroundColor: '#2B5692',
              color: '#fff',
              ':hover': {
                backgroundColor: '#284D7B',
              },
            },
          },
          {
            props: { variant: 'success' } as any,
            style: {
              borderRadius: 0,
              backgroundColor: '#4CAF50',
              color: '#fff',
              ':hover': {
                backgroundColor: '#388E3C',
              },
            },
          },
          {
            props: { variant: 'error' } as any,
            style: {
              backgroundColor: '#922B2B',
              borderRadius: 0,
              color: '#fff',
              ':hover': {
                backgroundColor: '#D32F2F',
              },
            },
          },
          {
            props: { variant: 'external' } as any,
            style: {
              borderRadius: 0,
              backgroundColor: '#E0E0E0',
              borderBottom: '2px solid #9e9e9e',
              color: '#212121',
              ':hover': {
                backgroundColor: '#bbbbbb',
              },
            },
          },
        ],
      },
      MuiCssBaseline: {
        styleOverrides: styleoveride,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Button
        type={type}
        size={size}
        onClick={onClick}
        variant={variantMap[variant]}
        startIcon={StartIcon && <StartIcon />}
        endIcon={endIcon}
        disabled={disabled}
        color={color}
        {...rest}
        sx={{
          ...rest.sx,
          '&:disabled': {
            backgroundColor: '#2B5692',
            color: '#FAFAFA',
          },
          textTransform: isUpperCase ? 'uppercase' : 'none',
          // fontSize: isTabletView ? '10px' : "0.875rem",
        }}
      >
        {children}
      </Button>
    </ThemeProvider>
  )
}
