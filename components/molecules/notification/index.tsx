import { Badge, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useNotifications } from '@utils/hooks/use-notification'
// import { useAuth } from '@store/auth'
import { NotificationsOutlined } from '@mui/icons-material'

export default function Notification() {
  // const { data: notifList = [] } = useNotifications(user?.id)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const notifList: any = { data: [] }

  return (
    <>
      <IconButton
        disabled={notifList?.data?.length === 0}
        onClick={handleOpenUserMenu}
        style={{ marginLeft: 0 }}
      >
        <Badge badgeContent={notifList?.data?.length} color="success">
          <NotificationsOutlined sx={{ color: '#2B5692' }} />
        </Badge>
      </IconButton>
      {notifList?.data?.length > 0 ? (
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
          {notifList?.data?.map((notif: any, index: number) => (
            <MenuItem key={index} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{notif?.data?.data}</Typography>
            </MenuItem>
          ))}
        </Menu>
      ) : null}
    </>
  )
}
