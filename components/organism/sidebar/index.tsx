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
import MenuIcon from '@mui/icons-material/Menu'
import React, { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@store/auth'
import { BarChart, EmailOutlined } from '@mui/icons-material'
import { UilChatBubbleUser } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilAngleUp } from '@iconscout/react-unicons'

const ListItemTextCustom = ({
  isCollapse,
  path,
  label,
}: {
  isCollapse: boolean
  path: string
  label: string
}) => {
  const router = useRouter()
  return (
    <>
      {!isCollapse && (
        <ListItemText
          sx={{
            color: router.pathname === path ? 'white' : '#2B5692',
           
          }}
          primary={<Typography fontWeight="bold">{label}</Typography>}
        />
      )}
    </>
  )
}

const Avatar = ({ name }: { name: string }) => {
  const router = useRouter()
  return (
    <Box
      sx={{
        width: '26px',
        height: '26px',
        backgroundColor: '#EAEEF4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography color="#2B5692">{name?.charAt(0)?.toUpperCase()}</Typography>
    </Box>
  )
}

export type SidebarProps = {
  isCollapse: boolean
  setIsCollapse: (value: boolean) => void
  isTabled?: boolean
}

export default function Sidebar({
  isCollapse,
  setIsCollapse,
  isTabled,
}: SidebarProps) {
  const router = useRouter()
  const {
    state: { user },
  }: any = useAuth()
  const [open, setOpen] = React.useState(true)
  const [isOpenKelas, setisOpenKelas] = React.useState(true)
  const [isOpenFakultas, setisOpenFakultas] = React.useState(true)
  const [isOpenProdi, setisOpenProdi] = React.useState(true)
  const [isOpenUser, setisOpenUser] = React.useState(true)
  const isTabletView = useMediaQuery('(max-width: 1180px)')

  const handleCollapse = () => {
    setOpen(false)
    setIsCollapse(!isCollapse)
  }

  const handleActiveState = (path: string) => {
    return router.pathname === path ? '#2B5692' : ''
  }

  const handleIconStyle = (path: string) => {
    return {
      color: router.pathname === path ? 'white' : '#2B5692',
      ml: 'auto',
    }
  }

  const iconWrapperStyle = {
    minWidth: isCollapse ? 0 : 'auto',
    display: 'flex',
    justifyContent: 'flex-end',
  }

  const handleItemButtonStyle = (path: string) => {
    return {
      borderRadius: '4px',
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: router.pathname === path ? '#2B5692' : '',
      '&:hover': {
        backgroundColor: router.pathname === path ? '#5678a8' : '#d5dde9',
      },
    }
  }

  return (
    <>
      {isTabletView ? null : (
        <Stack
          direction="column"
          sx={{
            backgroundColor: 'white',
            color: '#2B5692',
            borderRight: '1px solid #eaeaea',
            maxWidth: isTabled ? '100%' : '245px',
            minWidth: !isCollapse && !isTabled ? '245px' : 'auto',
            zIndex: '10',
            position: 'fixed',
            height: '100vh',
            top: '0',
            pt: 2
          }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ padding: '8px' }}
          >
            <Typography variant="h6" textAlign="center">
                  SKURING
            </Typography>
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
              sx={handleItemButtonStyle('/')}
              onClick={() => router.push('/')}
            >
              <ListItemTextCustom
                isCollapse={isCollapse}
                path="/"
                label="Dashboard"
              />
            </ListItemButton>
            <ListItemButton
              sx={handleItemButtonStyle('/kelas')}
              onClick={() => setisOpenKelas(!isOpenKelas)}
            >
              <ListItemTextCustom
                isCollapse={isCollapse}
                path="/kelas"
                label="Kelas"
              />
              <ListItemIcon sx={iconWrapperStyle}>
                {
                  isOpenKelas ? (
                    <UilAngleDown style={handleIconStyle('/kelas')} />
                  ) : (
                    <UilAngleUp style={handleIconStyle('/kelas')} />
                  ) // UisAngleDown
                }
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={isOpenKelas} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  onClick={() => router.push('/kelas/tambah')}
                  sx={{ pl: 4 }}
                >
                  <ListItemText
                    primary={
                      <Typography fontWeight={500}>Tambah Kelas</Typography>
                    }
                  />
                </ListItemButton>
                <ListItemButton
                  onClick={() => router.push('/kelas')}
                  sx={{ pl: 4 }}
                >
                  <ListItemText
                    primary={
                      <Typography fontWeight={500}>Lihat Kelas</Typography>
                    }
                  />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton
              sx={handleItemButtonStyle('/fakultas')}
              onClick={() => setisOpenFakultas(!isOpenFakultas)}
            >
              <ListItemTextCustom
                isCollapse={isCollapse}
                path="/fakultas"
                label="Fakultas"
              />
              <ListItemIcon sx={iconWrapperStyle}>
                {
                  isOpenFakultas ? (
                    <UilAngleDown style={handleIconStyle('/fakultas')} />
                  ) : (
                    <UilAngleUp style={handleIconStyle('/fakultas')} />
                  ) // UisAngleDown
                }
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={isOpenFakultas} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  onClick={() => router.push('/fakultas/tambah')}
                  sx={{ pl: 4 }}
                >
                  <ListItemText
                    primary={
                      <Typography fontWeight={500}>Tambah Fakultas</Typography>
                    }
                  />
                </ListItemButton>
                <ListItemButton
                  onClick={() => router.push('/fakultas')}
                  sx={{ pl: 4 }}
                >
                  <ListItemText
                    primary={
                      <Typography fontWeight={500}>Lihat Fakultas</Typography>
                    }
                  />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton
              sx={handleItemButtonStyle('/prodi')}
              onClick={() => setisOpenProdi(!isOpenProdi)}
            >
              <ListItemTextCustom
                isCollapse={isCollapse}
                path="/prodi"
                label="prodi"
              />
              <ListItemIcon sx={iconWrapperStyle}>
                {
                  isOpenProdi ? (
                    <UilAngleDown style={handleIconStyle('/prodi')} />
                  ) : (
                    <UilAngleUp style={handleIconStyle('/prodi')} />
                  ) // UisAngleDown
                }
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={isOpenProdi} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton
                  onClick={() => router.push('/prodi/tambah')}
                  sx={{ pl: 4 }}
                >
                  <ListItemText
                    primary={
                      <Typography fontWeight={500}>Tambah Prodi</Typography>
                    }
                  />
                </ListItemButton>
                <ListItemButton
                  onClick={() => router.push('/prodi')}
                  sx={{ pl: 4 }}
                >
                  <ListItemText
                    primary={
                      <Typography fontWeight={500}>Lihat Prodi</Typography>
                    }
                  />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton
              sx={handleItemButtonStyle('/user')}
              onClick={() => setisOpenUser(!isOpenUser)}
            >
              <ListItemTextCustom
                isCollapse={isCollapse}
                path="/user"
                label="User"
              />
              <ListItemIcon sx={iconWrapperStyle}>
                {
                  isOpenUser ? (
                    <UilAngleDown style={handleIconStyle('/prodi')} />
                  ) : (
                    <UilAngleUp style={handleIconStyle('/prodi')} />
                  ) // UisAngleDown
                }
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={isOpenUser} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton
                  onClick={() => router.push('/user/tambah')}
                  sx={{ pl: 4 }}
                >
                  <ListItemText
                    primary={
                      <Typography fontWeight={500}>Tambah User</Typography>
                    }
                  />
                </ListItemButton>
                <ListItemButton
                  onClick={() => router.push('/user')}
                  sx={{ pl: 4 }}
                >
                  <ListItemText
                    primary={
                      <Typography fontWeight={500}>Lihat User</Typography>
                    }
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Stack>
      )}
    </>
  )
}
