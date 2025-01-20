import { Button, Checkbox, Chip, Stack, Typography } from '@mui/material'
import { formatDateJapan, formatNumber } from '@utils/common'
import React from 'react'
import { useTranslation } from 'react-i18next'

type BilledCardProps = {
  date: string
  clinicName: string
  doctor: string
  statuses: any[]
  amount: number
  isReissued?: boolean
  onClick: () => void
  checked: boolean
}

export default function MaBilledCard({
  date,
  clinicName,
  doctor,
  statuses,
  amount,
  isReissued = false,
  onClick,
  checked,
}: BilledCardProps) {
  const { t } = useTranslation()
  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
      }}
    >
      <Stack
        direction="row"
        gap={2}
        paddingX={2}
        paddingY={1}
        sx={{
          backgroundColor: isReissued ? '#2273E2' : '#62A4FF',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#ffffff',
          borderRadius: '5px',
        }}
      >
        <Chip
          label={isReissued ? t('reissued') : t('issued')}
          sx={{
            backgroundColor: '#E0E0E0',
          }}
        />
        <Stack
          gap={1}
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="body1">
            {formatDateJapan(date)}
            {' - '}
            {date?.split(' ')[1].substring(0, 5)}
          </Typography>
          <Typography variant="body1">{`${t(
            'clinic'
          )}: ${clinicName}`}</Typography>
          <Typography variant="body1">
            {`${t('doctor_in_charge')}: ${doctor} | ${t(
              'status'
            )}: ${statuses.join(', ')}`}
          </Typography>
          <Typography variant="body1">
            {t('amount')}
            {`: ¥${formatNumber(amount)}`}
          </Typography>
        </Stack>
        <Checkbox
          sx={{
            backgroundColor: 'white',
            borderRadius: 1,
            p: '2px',
          }}
          checked={checked}
        />
      </Stack>
    </div>
  )
}
