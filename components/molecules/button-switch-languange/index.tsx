import * as React from 'react'
import { Menu, MenuItem, Button } from '@mui/material'
import { Expand, ExpandMore } from '@mui/icons-material'
import { t } from 'i18next'

export default function ButtonSwitchLanguage() {
  const [selectedLanguage, setSelectedLanguage] = React.useState<'en' | 'jp'>(
    'jp'
  )
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  React.useEffect(() => {
    if (localStorage.getItem('lang'))
      setSelectedLanguage(localStorage.getItem('lang') as 'en' | 'jp')
  }, [])

  const handleMenuClick = (value: 'en' | 'jp') => {
    localStorage.setItem('lang', value)
    window.location.reload()
  }

  const flag = {
    en: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.2026 4.13794H1.79742C0.804703 4.13794 0 4.94264 0 5.93536V18.0647C0 19.0574 0.804703 19.8621 1.79742 19.8621H22.2026C23.1952 19.8621 24 19.0574 24 18.0647V5.93536C24 4.94264 23.1953 4.13794 22.2026 4.13794Z"
          fill="#41479B"
        />
        <path
          d="M23.9751 5.63822C23.8335 4.78702 23.094 4.13789 22.2026 4.13789H21.7349L14.069 9.16041V4.13794H9.93103V9.16046L2.26509 4.13794H1.79742C0.906 4.13794 0.166547 4.78702 0.0248906 5.63827L6.57698 9.93108H0V14.069H6.57698L0.0248906 18.3617C0.166547 19.2129 0.906 19.8621 1.79742 19.8621H2.26509L9.93103 14.8396V19.8621H14.069V14.8396L21.7349 19.8621H22.2026C23.094 19.8621 23.8335 19.213 23.9751 18.3617L17.423 14.0689H24V9.93099H17.423L23.9751 5.63822Z"
          fill="#F5F5F5"
        />
        <path
          d="M13.2414 4.13794H10.7586V10.7586H0V13.2414H10.7586V19.8621H13.2414V13.2414H24V10.7586H13.2414V4.13794Z"
          fill="#FF4B55"
        />
        <path
          d="M1.16217 19.7462L9.90825 14.069H8.38819L0.432373 19.2333C0.627045 19.4605 0.877217 19.6385 1.16217 19.7462Z"
          fill="#FF4B55"
        />
        <path
          d="M16.2369 14.069H14.7168L23.1879 19.5676C23.4249 19.412 23.6227 19.2017 23.7638 18.9548L16.2369 14.069Z"
          fill="#FF4B55"
        />
        <path
          d="M0.189697 5.13165L7.58329 9.93104H9.10335L0.725291 4.4926C0.500338 4.66004 0.31626 4.87894 0.189697 5.13165Z"
          fill="#FF4B55"
        />
        <path
          d="M15.5889 9.93103L23.5593 4.7572C23.3625 4.53075 23.1103 4.35375 22.8234 4.24814L14.0688 9.93103H15.5889Z"
          fill="#FF4B55"
        />
      </svg>
    ),
    jp: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 3.99989H0V20.0001H24V3.99989Z" fill="#F0F0F0" />
        <path
          d="M12 16.4997C14.4853 16.4997 16.5 14.485 16.5 11.9997C16.5 9.51444 14.4853 7.49972 12 7.49972C9.51472 7.49972 7.5 9.51444 7.5 11.9997C7.5 14.485 9.51472 16.4997 12 16.4997Z"
          fill="#D80027"
        />
      </svg>
    ),
  }
  return (
    <div>
      <Button
        id="basic-button"
        disabled={process.env.NEXT_PUBLIC_ENABLE_LOCALIZATION !== 'true'}
        sx={{ padding: 0, margin: 0 }}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {flag[selectedLanguage]}
        <ExpandMore sx={{ color: '#2B5692' }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => handleMenuClick('en')}
          sx={{ display: 'flex', gap: 1 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.2026 4.13794H1.79742C0.804703 4.13794 0 4.94264 0 5.93536V18.0647C0 19.0574 0.804703 19.8621 1.79742 19.8621H22.2026C23.1952 19.8621 24 19.0574 24 18.0647V5.93536C24 4.94264 23.1953 4.13794 22.2026 4.13794Z"
              fill="#41479B"
            />
            <path
              d="M23.9751 5.63822C23.8335 4.78702 23.094 4.13789 22.2026 4.13789H21.7349L14.069 9.16041V4.13794H9.93103V9.16046L2.26509 4.13794H1.79742C0.906 4.13794 0.166547 4.78702 0.0248906 5.63827L6.57698 9.93108H0V14.069H6.57698L0.0248906 18.3617C0.166547 19.2129 0.906 19.8621 1.79742 19.8621H2.26509L9.93103 14.8396V19.8621H14.069V14.8396L21.7349 19.8621H22.2026C23.094 19.8621 23.8335 19.213 23.9751 18.3617L17.423 14.0689H24V9.93099H17.423L23.9751 5.63822Z"
              fill="#F5F5F5"
            />
            <path
              d="M13.2414 4.13794H10.7586V10.7586H0V13.2414H10.7586V19.8621H13.2414V13.2414H24V10.7586H13.2414V4.13794Z"
              fill="#FF4B55"
            />
            <path
              d="M1.16217 19.7462L9.90825 14.069H8.38819L0.432373 19.2333C0.627045 19.4605 0.877217 19.6385 1.16217 19.7462Z"
              fill="#FF4B55"
            />
            <path
              d="M16.2369 14.069H14.7168L23.1879 19.5676C23.4249 19.412 23.6227 19.2017 23.7638 18.9548L16.2369 14.069Z"
              fill="#FF4B55"
            />
            <path
              d="M0.189697 5.13165L7.58329 9.93104H9.10335L0.725291 4.4926C0.500338 4.66004 0.31626 4.87894 0.189697 5.13165Z"
              fill="#FF4B55"
            />
            <path
              d="M15.5889 9.93103L23.5593 4.7572C23.3625 4.53075 23.1103 4.35375 22.8234 4.24814L14.0688 9.93103H15.5889Z"
              fill="#FF4B55"
            />
          </svg>
          {t('english')}
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuClick('jp')}
          sx={{ display: 'flex', gap: 1 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 3.99989H0V20.0001H24V3.99989Z" fill="#F0F0F0" />
            <path
              d="M12 16.4997C14.4853 16.4997 16.5 14.485 16.5 11.9997C16.5 9.51444 14.4853 7.49972 12 7.49972C9.51472 7.49972 7.5 9.51444 7.5 11.9997C7.5 14.485 9.51472 16.4997 12 16.4997Z"
              fill="#D80027"
            />
          </svg>
          {t('japan')}
        </MenuItem>
      </Menu>
    </div>
  )
}
