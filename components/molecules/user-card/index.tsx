import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import UserImage from '@assets/images/default-user.jpeg'

interface UserData {
  user: UserModelWithRelation
}

export default function UserCard({ user }: UserData) {
  const isTabletView = useMediaQuery('(max-width: 1180px)')
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
        src={UserImage}
        alt={'user image'}
      />
      <Stack gap={1}>
        {/* <p
          style={{
            color: '#212121',
            fontWeight: '500',
            fontSize: isTabletView ? '14px' : '16px',
            margin: 0,
          }}
        >
          kode kelas
        </p> */}
        <p
          style={{
            color: '#212121',
            fontWeight: '500',
            fontSize: isTabletView ? '12px' : '12px',
            margin: 0,
          }}
        >
          {/* {user.first_name + ' ' + user.last_name} */}
          {user.username}
        </p>
      </Stack>
    </Stack>
  )
}
