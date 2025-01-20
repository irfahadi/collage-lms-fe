import { Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function RotateDevice() {
  const { t } = useTranslation()
  return (
    <div
      className="rotate-device"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#1a1a1a',
        zIndex: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'none',
        flexDirection: 'column',
      }}
    >
      <div style={{ marginTop: '-2rem' }}>
        <img
          src={`${
            process.env.NEXT_PUBLIC_BASEPATH || ''
          }/assets/images/rotate-device.jpeg`}
        />
        <Typography variant="h6" color="white" textAlign="center">
          {t('alert_rotate')}
        </Typography>
      </div>
    </div>
  )
}
