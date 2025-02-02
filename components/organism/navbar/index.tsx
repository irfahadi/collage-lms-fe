import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  SwipeableDrawer,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import ModalConfirmLogout from '../modal-confirm-logout'
import { useTranslation } from 'react-i18next'
import MenuIcon from '@mui/icons-material/Menu'
import TabledSidebar from '../tabled-sidebar'
import { MaButton } from '@components/atoms'

type NavbarProps = {
  title: string
  isCollapse?: boolean
  withSiderbar?: boolean
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'
  elevation?: number
}

export default function Navbar({
  title = '',
  isCollapse = false,
  withSiderbar = true,
  position,
  elevation = 1,
}: NavbarProps) {
  const { t } = useTranslation()
  const router = useRouter()
  const { id, search } = router.query
  const [searchValue, setSearchValue] = React.useState('')
  const [openDrawer, setOpeDrawer] = useState<boolean>(false)
  const [openModalLogout, setOpenModalLogout] = React.useState(false)
  const isTabletView = useMediaQuery('(max-width: 1180px)')
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  useEffect(() => {
    const searchQuery = (search as string)?.split('?')[0]
    if (search) {
      setSearchValue(searchQuery)
      router.events.on('routeChangeStart', () => setSearchValue(''))
    }
  }, [search])

  if (isTabletView)
    return (
      <>
        <AppBar
          elevation={1}
          sx={{
            backgroundColor: 'white',
            zIndex: '9',
          }}
          position="fixed"
        >
          <Toolbar
            sx={{
              justifyContent: 'space-between',
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ flexGrow: 1 }}
            >
              <Typography color="#2B5692" variant="h6" component="div">
                {title}
              </Typography>
              {/* {withSiderbar && (
              <SearchInput
                value={searchValue}
                onChange={(e: any) => setSearchValue(e.target.value)}
                onSubmit={(e: any) => {
                  e.preventDefault()
                  router.replace(`/chat/${id}?search=${searchValue}`)
                }}
              />
            )} */}
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="flex-end"
            >
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      sx={{ width: 24, height: 24 }}
                      alt="Remy Sharp"
                      src=""
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {/* <MenuItem disabled>
                    <Typography textAlign="center">user</Typography>
                  </MenuItem> */}
                  <MenuItem
                    onClick={() => {
                      setOpenModalLogout(true)
                    }}
                  >
                    <Typography textAlign="center">logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Stack>
          </Toolbar>
        </AppBar>
        <React.Fragment key={'left'}>
          {/* <Button onClick={() => {}}>left</Button> */}
          <SwipeableDrawer
            anchor={'left'}
            open={openDrawer}
            onClose={() => {
              setOpeDrawer(false)
            }}
            onOpen={() => {
              setOpeDrawer(true)
            }}
          >
            <TabledSidebar onChange={() => setOpeDrawer(false)} />
          </SwipeableDrawer>
        </React.Fragment>
        <ModalConfirmLogout
          open={openModalLogout}
          handleClose={() => setOpenModalLogout(false)}
        />
      </>
    )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={elevation}
        sx={{
          backgroundColor: 'white',
          zIndex: '9',
          paddingLeft: withSiderbar ? (isCollapse ? '8rem' : '16rem') : 0,
        }}
        position={position}
      >
        <Toolbar>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            <Typography color="#2B5692" variant="h6" component="div">
              {title}
            </Typography>
            {/* {withSiderbar && (
              <SearchInput
                value={searchValue}
                onChange={(e: any) => setSearchValue(e.target.value)}
                onSubmit={(e: any) => {
                  e.preventDefault()
                  router.replace(`/chat/${id}?search=${searchValue}`)
                }}
              />
            )} */}
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{ width: 24, height: 24 }}
                    alt="Remy Sharp"
                    src=""
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* <MenuItem disabled>
                  <Typography textAlign="center">user</Typography>
                </MenuItem> */}
                <MenuItem
                  onClick={() => {
                    setOpenModalLogout(true)
                  }}
                >
                  <Typography textAlign="center">logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <ModalConfirmLogout
        open={openModalLogout}
        handleClose={() => setOpenModalLogout(false)}
      />
    </Box>
  )
}
