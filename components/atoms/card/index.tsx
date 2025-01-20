import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import { ReactNode } from 'react'

interface Props {
  title: string
  body: string
  children?: ReactNode
}

export default function MaCard({ title, body, children }: Props) {
  return (
    <Card>
      <Stack direction="row">
        <Stack
          sx={{
            width: '12px',
            px: 0,
            backgroundColor: '#2B5692',
          }}
        />
        <CardContent sx={{ width: '100%' }}>
          <Stack gap={2} sx={{ p: 2 }}>
            <Typography variant="h5">{title}</Typography>
            <Divider />
            <Typography variant="body1" sx={{ p: 1 }}>
              {body}
            </Typography>
            <Box sx={{ marginLeft: 'auto', width: 100 }}>{children}</Box>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  )
}
