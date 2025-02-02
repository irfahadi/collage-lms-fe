import { Box } from '@mui/material'
import React from 'react'

type CardAddImageProps = {
  width?: string | number
  height?: string | number
  onClick?: () => void
}

export default function CardAddImage({
  width = '78px',
  height = '110px',
  onClick = () => {},
}: CardAddImageProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: width,
        height: height,
        borderRadius: '2px',
        backgroundColor: '#D9D9D9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <svg
        width="49"
        height="48"
        viewBox="0 0 49 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.2825 40.6168H7.66294V12.9972H25.4184V9.05157H7.66294C5.49283 9.05157 3.71729 10.8271 3.71729 12.9972V40.6168C3.71729 42.7869 5.49283 44.5624 7.66294 44.5624H35.2825C37.4526 44.5624 39.2282 42.7869 39.2282 40.6168V22.8613H35.2825V40.6168ZM19.9142 34.3629L16.0474 29.7071L10.6222 36.6711H32.3233L25.3395 27.3791L19.9142 34.3629ZM39.2282 9.05157V3.13309H35.2825V9.05157H29.364C29.3838 9.07129 29.364 12.9972 29.364 12.9972H35.2825V18.896C35.3022 18.9157 39.2282 18.896 39.2282 18.896V12.9972H45.1466V9.05157H39.2282Z"
          fill="#9E9E9E"
        />
      </svg>
    </Box>
  )
}
