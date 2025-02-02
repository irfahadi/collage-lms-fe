import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import UserImage from '@assets/images/default-user.jpeg'

interface ClassProps {
  data: ClassModelWithRelations
}

export default function ClassCard({ data }: ClassProps) {
  const isTabletView = useMediaQuery('(max-width: 1180px)')
  return (
    <Stack
      sx={{ minWidth: '280px' }}
      direction="row"
      alignItems="center"
      spacing={1}
    >
      <Image
        width={80}
        height={80}
        style={{ borderRadius: '2px', objectFit: 'cover' }}
        src={UserImage}
        alt={'user image'}
      />
      <Stack gap={1}>
        <p
          style={{
            color: '#212121',
            fontWeight: '500',
            fontSize: isTabletView ? '14px' : '16px',
            margin: 0,
          }}
        >
          {data.class_name_long}
        </p>
        <p
          style={{
            color: '#212121',
            fontWeight: '500',
            fontSize: isTabletView ? '12px' : '12px',
            margin: 0,
          }}
        >
          {data.class_code}
        </p>
      </Stack>
    </Stack>
  )
}
