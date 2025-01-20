import { Button, Stack, SxProps, Typography } from '@mui/material'
import React from 'react'

export type Props = {
  title: string | React.ReactNode
  actionButtons?: React.ReactNode
  withAccent?: boolean
  color?: string
  sx?: SxProps
}

export default function Title({
  title,
  actionButtons = <></>,
  withAccent = false,
  color = '#2B5692',
  sx = {},
}: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignContent={'center'}
      sx={{ borderBottom: '1px solid #9E9E9E', paddingBottom: '.25rem', ...sx }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        {withAccent && (
          <div
            style={{
              width: '12px',
              height: '100%',
              backgroundColor: color,
              borderRadius: '0px 2px 2px 0px',
            }}
          />
        )}
        <Typography
          variant="h6"
          fontWeight="medium"
          gutterBottom
          sx={{ width: 'fit-content', marginBottom: 0 }}
        >
          {title}
        </Typography>
      </Stack>
      {actionButtons}
    </Stack>
  )
}
