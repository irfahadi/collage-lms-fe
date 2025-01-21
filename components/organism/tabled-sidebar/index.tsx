import {
  Box,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import DashboardIcon from '@mui/icons-material/Dashboard'
import MenuIcon from '@mui/icons-material/Menu'
import React, { Fragment, useEffect, useState } from 'react'
import { NavType } from '../sidebar/types'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useAuth } from '@store/auth'
import { BarChart, EmailOutlined } from '@mui/icons-material'

type Props = {
  onChange: () => void
}

export default function TabledSidebar({ onChange }: Props) {
  const { t } = useTranslation()
  const router = useRouter()
  const {
    state: { user },
  }: any = useAuth()

  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: '#2B5692',
        width: '245px',
        zIndex: '9999',
        height: '100vh',
        position: 'sticky',
        top: '0',
      }}
    >
      <Stack
        direction="column"
        sx={{
          backgroundColor: 'white',
          color: '#2B5692',
          borderRight: '1px solid #eaeaea',
          maxWidth: '245px',
          minWidth: '245px',
          zIndex: '10',
          position: 'fixed',
          height: '100vh',
          top: '0',
        }}
      >
        <Stack
          direction="row"
          justifyContent={'space-between'}
          alignItems="center"
          sx={{ padding: '8px' }}
        >
          <Box sx={{ mx: 'auto' }}>
            <Typography variant="h6">SKURING</Typography>
          </Box>
          <IconButton onClick={onChange}>
            <MenuIcon style={{ color: '#2B5692' }} />
          </IconButton>
        </Stack>
        <List
          sx={{
            width: '100%',
            px: 2,
            boxSizing: 'border-box',
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton
            sx={{
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'center',
            }}
            onClick={() => router.push('/')}
          >
            <ListItemIcon sx={{}}>
              <EmailOutlined />
            </ListItemIcon>
            <ListItemText
              sx={{ color: 'black' }}
              primary={'First Time Inbox'}
            />
          </ListItemButton>
        </List>
        <Divider />
        <List
          sx={{
            width: '100%',
            px: 2,
            boxSizing: 'border-box',
          }}
          component="nav"
          subheader={
            <ListSubheader sx={{ mb: 1, height: '32px' }} component="div">
              Ongoing
            </ListSubheader>
          }
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton
            sx={{
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'center',
            }}
            onClick={() => router.push('/')}
          >
            <ListItemIcon sx={{}}>
              <Box
                sx={{
                  backgroundColor: '#29B6F6',
                  color: 'white',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                炭
              </Box>
            </ListItemIcon>
            <ListItemText sx={{ color: 'black' }} primary={'Tanjiro Kamado'} />
          </ListItemButton>
        </List>
        <Divider />
        <List
          sx={{
            width: '100%',
            px: 2,
            boxSizing: 'border-box',
          }}
          component="nav"
          subheader={
            <ListSubheader sx={{ mb: 1, height: '32px' }} component="div">
              Idle chat
            </ListSubheader>
          }
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton
            sx={{
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'center',
            }}
            onClick={() => router.push('/')}
          >
            <ListItemIcon sx={{}}>
              <Box
                sx={{
                  backgroundColor: '#29B6F6',
                  color: 'white',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                炭
              </Box>
            </ListItemIcon>
            <ListItemText sx={{ color: 'black' }} primary={'Muzan Kibutsuji'} />
          </ListItemButton>
        </List>
      </Stack>
    </Stack>
  )
}
