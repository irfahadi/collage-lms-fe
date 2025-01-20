import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { DashboardData } from '@models/Dashboard'
import UserImage from '@assets/images/default-user.jpeg'
import { PatientType } from '@models/Patients'
import { nthNumber } from '@utils/number'
import { t } from 'i18next'
import { checkIsUUID } from '@utils/common'
import { useTranslation } from 'react-i18next'

interface UserData {
  user: PatientType | DashboardData
}

export default function PatientCard({ user }: UserData) {
  const isTabletView = useMediaQuery('(max-width: 1180px)')
  const { i18n } = useTranslation()
  return (
    <Stack
      sx={{ minWidth: '280px' }}
      direction="row"
      alignItems="center"
      spacing={1}
    >
      <Image
        width={55}
        height={80}
        style={{ borderRadius: '2px', objectFit: 'cover' }}
        src={user.face_photo ?? UserImage}
        alt={user.patient_romaji ?? 'user image'}
      />
      <Stack gap={0}>
        {checkIsUUID(user.patient_number as string) ? (
          <Typography
            variant="subtitle1"
            sx={{
              color: '#9E9E9E',
              fontWeight: '500',
              fontSize: isTabletView ? '12px' : '12px',
              margin: 0,
            }}
          >
            <span style={{ color: 'red' }}>
              {t('patient_number_not_registered')}
            </span>{' '}
            | {user?.clinic?.clinic_kanji}
          </Typography>
        ) : (
          <Typography
            variant="subtitle1"
            sx={{
              color: '#9E9E9E',
              fontWeight: '500',
              fontSize: isTabletView ? '12px' : '12px',
              margin: 0,
            }}
          >
            {user.patient_number ?? 0} | {user?.clinic?.clinic_kanji}
          </Typography>
        )}
        <p
          style={{
            color: '#9E9E9E',
            fontWeight: '500',
            fontSize: isTabletView ? '12px' : '12px',
            margin: 0,
          }}
        >
          {user.patient_furigana ?? 'ふりがな'}
        </p>
        <p
          style={{
            color: '#212121',
            fontWeight: '500',
            fontSize: isTabletView ? '14px' : '16px',
            margin: 0,
          }}
        >
          {user.patient_kanji ?? '漢字'}
        </p>
        <p
          style={{
            color: '#212121',
            fontWeight: '500',
            fontSize: isTabletView ? '12px' : '12px',
            margin: 0,
          }}
        >
          {user.patient_romaji ?? '-'}
        </p>
        <p
          style={{
            color: '#212121',
            fontWeight: '500',
            fontSize: isTabletView ? '12px' : '12px',
            margin: 0,
            wordBreak: 'break-all',
          }}
        >
          {i18n.language === 'en' && user?.record?.aligner_replacement?.sheet
            ? `${nthNumber(
                user?.record?.aligner_replacement?.sheet ||
                  user?.record?.aligner_replacement?.keep_number ||
                  0
              )} ${t(
                user?.record?.aligner_replacement?.keep_number
                  ? 'keep'
                  : 'more_info_aligner_current_sheet_label'
              )}`
            : `${
                user?.record?.aligner_replacement?.sheet ||
                user?.record?.aligner_replacement?.keep_number ||
                0
              } ${t(
                user?.record?.aligner_replacement?.keep_number
                  ? 'keep'
                  : 'more_info_aligner_current_sheet_label'
              )}`}
        </p>
      </Stack>
    </Stack>
  )
}
