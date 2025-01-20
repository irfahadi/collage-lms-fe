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
  const [isOpenRequest, setIsOpenRequest] = React.useState(true)
  const [isOpenOnGoing, setIsOpenOnGoing] = React.useState(true)
  const [isOpenClosed, setIsOpenClosed] = React.useState(true)
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
        backgroundColor: '#EAEEF4',
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
          }}
        >
          <Stack
            direction="row"
            justifyContent={isCollapse ? 'center' : 'space-between'}
            alignItems="center"
            sx={{ padding: '8px' }}
          >
            {!isCollapse && (
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ pl: 2, cursor: 'pointer' }}
                onClick={() => router.push('/')}
              >
                <UilChatBubbleUser />
                <Typography variant="h6" textAlign="left">
                  Chat Consultation
                </Typography>
              </Stack>
            )}
            {/* <IconButton onClick={handleCollapse}>
              <UilChatBubbleUser />
            </IconButton> */}
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
              sx={handleItemButtonStyle('/first-time')}
              onClick={() => router.push('/first-time')}
            >
              <ListItemTextCustom
                isCollapse={isCollapse}
                path="/first-time"
                label="First Time"
              />
              <ListItemIcon sx={iconWrapperStyle}>
                <UilPlus style={handleIconStyle('/first-time')} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              sx={handleItemButtonStyle('/request-chat')}
              onClick={() => setIsOpenRequest(!isOpenRequest)}
            >
              <ListItemTextCustom
                isCollapse={isCollapse}
                path="/request-chat"
                label="Request Chat"
              />
              <ListItemIcon sx={iconWrapperStyle}>
                {
                  isOpenRequest ? (
                    <UilAngleDown style={handleIconStyle('/request-chat')} />
                  ) : (
                    <UilAngleUp style={handleIconStyle('/request-chat')} />
                  ) // UisAngleDown
                }
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={isOpenRequest} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  onClick={() => router.push('/chat/1')}
                  sx={{ pl: 4 }}
                >
                  <ListItemIcon sx={{ minWidth: '36px' }}>
                    <Avatar name="tanjiro" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontWeight={500}>Tanjiro Kamado</Typography>
                    }
                  />
                </ListItemButton>
              </List>
            </Collapse>
            <Divider />
            <ListItemButton
              sx={handleItemButtonStyle('/ongoing-chat')}
              onClick={() => setIsOpenOnGoing(!isOpenOnGoing)}
            >
              <ListItemTextCustom
                isCollapse={isCollapse}
                path="/ongoing-chat"
                label="Ongoing"
              />
              <ListItemIcon sx={iconWrapperStyle}>
                {
                  isOpenOnGoing ? (
                    <UilAngleDown style={handleIconStyle('/ongoing-chat')} />
                  ) : (
                    <UilAngleUp style={handleIconStyle('/ongoing-chat')} />
                  ) // UisAngleDown
                }
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={isOpenOnGoing} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  onClick={() => router.push('/chat/1')}
                  sx={{ pl: 4 }}
                >
                  <ListItemIcon sx={{ minWidth: '36px' }}>
                    <Avatar name="Ajior" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontWeight={500}>Ajior Going</Typography>
                    }
                  />
                </ListItemButton>
              </List>
            </Collapse>
            <Divider />
            <ListItemButton
              sx={handleItemButtonStyle('/closed-chat')}
              onClick={() => setIsOpenClosed(!isOpenClosed)}
            >
              <ListItemTextCustom
                isCollapse={isCollapse}
                path="/closed-chat"
                label="Closed"
              />
              <ListItemIcon sx={iconWrapperStyle}>
                {
                  isOpenClosed ? (
                    <UilAngleDown style={handleIconStyle('/closed-chat')} />
                  ) : (
                    <UilAngleUp style={handleIconStyle('/closed-chat')} />
                  ) // UisAngleDown
                }
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={isOpenClosed} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  onClick={() => router.push('/chat/1')}
                  sx={{ pl: 4 }}
                >
                  <ListItemIcon sx={{ minWidth: '36px' }}>
                    <Avatar name="Naruto" />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography fontWeight={500}>Naruto</Typography>}
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
