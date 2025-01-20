import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import ChatIcon from '@mui/icons-material/Chat'
import { MaButton } from '@components/atoms'

function TimeDivider() {
  return (
    <Box
      sx={{
        backgroundColor: '#E0E0E0',
        color: '#616161',
        width: 'fit-content',
        px: 1,
        py: 0.5,
        mx: 'auto',
      }}
    >
      <Typography> 25 March 2024</Typography>
    </Box>
  )
}

function ChatItem() {
  return (
    <Stack direction="row" alignItems="flex-start" spacing={1} my={2}>
      <Avatar>H</Avatar>
      <Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>きくち</Typography>
          <Typography>10.00</Typography>
        </Stack>
        <Box sx={{ backgroundColor: '#FAFAFA', p: 1, borderRadius: 1, mt: 1 }}>
          <Typography>
            I was recommended by the staff of [clinic] to consult with you. I
            would like to ask about [describe complaint or problem]. Can you
            help me?
          </Typography>
        </Box>
      </Box>
    </Stack>
  )
}

export default function SidebarFirstTime() {
  return (
    <Box
      sx={{
        zIndex: 100,
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        p: 2,
        pt: 0,
        width: 450,
        maxWidth: '100%',
      }}
    >
      <Stack direction="row" justifyContent="flex-end">
        <IconButton>
          <CloseOutlinedIcon />
        </IconButton>
      </Stack>
      <Box>
        <Stack
          direction="row"
          alignItems="flex-end"
          justifyContent="space-between"
          sx={{ borderBottom: '1px solid #E0E0E0', pb: 2, mb: 2 }}
          spacing={2}
        >
          <Stack>
            <Box
              sx={{
                backgroundColor: '#039BE5',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              菊
            </Box>
            <Typography sx={{ py: 1 }} variant="h6">
              きくち
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <ChatIcon
                sx={{
                  width: '14px',
                  height: '14px',
                }}
              />
              <Typography>Consult : New aligner</Typography>
            </Stack>
            <Stack pt={1} direction="row" alignItems="center" spacing={1}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.9863 5.59356e-09C5.46124 -4.85169e-06 5.92456 0.146882 6.31274 0.420526C6.70092 0.69417 6.99497 1.08118 7.15458 1.52849H14V2.49315L12.274 3.65611V13.0411H13.4247C13.5264 13.0411 13.6239 13.0815 13.6959 13.1534C13.7678 13.2254 13.8082 13.3229 13.8082 13.4247C13.8082 13.5264 13.7678 13.6239 13.6959 13.6959C13.6239 13.7678 13.5264 13.8082 13.4247 13.8082H12.274V13.814H1.53425V13.8082H0.383562C0.281835 13.8082 0.184274 13.7678 0.112343 13.6959C0.0404109 13.6239 0 13.5264 0 13.4247C0 13.3229 0.0404109 13.2254 0.112343 13.1534C0.184274 13.0815 0.281835 13.0411 0.383562 13.0411H1.53425V3.64268L0 2.48049V1.52811H2.81803C2.9777 1.08086 3.27177 0.69394 3.65995 0.420369C4.04813 0.146798 4.51141 -3.309e-05 4.9863 5.59356e-09ZM5.36986 1.91781V1.15068H4.60274V1.91781H3.83562V2.68493H4.60274V3.45205H5.36986V2.68493H6.13699V1.91781H5.36986ZM10.7397 6.90411V13.0411H7.67123V6.90411H10.7397ZM5.75342 6.90411H3.06849V9.58904H5.75342V6.90411Z"
                  fill="#424242"
                />
              </svg>

              <Typography>Clinic : 心斎橋MA矯正歯科</Typography>
            </Stack>
          </Stack>
          <Box>
            <MaButton
              sx={{
                whiteSpace: 'nowrap',
              }}
            >
              Take Consultation
            </MaButton>
          </Box>
        </Stack>
        <Box>
          <TimeDivider />
          <ChatItem />
        </Box>
      </Box>
    </Box>
  )
}
