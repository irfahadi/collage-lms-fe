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
import { Notification, SearchInput } from '@components/molecules'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useAuth } from '@store/auth'
import ModalConfirmLogout from '../modal-confirm-logout'
import { useTranslation } from 'react-i18next'
import MenuIcon from '@mui/icons-material/Menu'
import TabledSidebar from '../tabled-sidebar'
import { MaButton } from '@components/atoms'
const ButtonSwitchLanguage = dynamic(
  () => import('@components/molecules/button-switch-languange'),
  { ssr: false }
)
// import ButtonSwitchLanguage from "@components/molecules/button-switch-languange";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
export type TitleType =
  | 'Dashboard'
  | 'Edit Information patient'
  | 'Add new patient'
  | 'Patient List'
  | 'Archive Patients List'
  | 'Clinic Setting'
  | 'Doctor Management'
  | 'Staff Management'
  | 'Fee Management'
  | 'Label Management'
  | 'Request Form Template Management'
  | 'Merchandise Management'
  | 'Maintenance Management'
  | 'Treatment Management'
  | 'Patient Detail'
  | 'Add Caseroom'
  | 'Consent Form'
  | 'Deposit Tracking'
  | 'Diagnose Problem Template'
  | 'Method of Treatment Template'
  | 'Important Point Template'
  | 'Treatment Plan Template'
  | 'Rubber Management'
  | 'Journal Report'
  | 'Chat'

type NavbarProps = {
  title: TitleType
  isCollapse?: boolean
  withSiderbar?: boolean
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'
  elevation?: number
}

export const header = {
  Dashboard: 'dashboard_title',
  'Edit Information patient': 'edit_information_patient',
  'Add new patient': 'add_patient_new_title',
  'Patient List': 'patient_list_title',
  'Archive Patients List': 'patient_list_archive_title',
  'Clinic Setting': 'clinic_setting_title',
  'Doctor Management': 'doctor_management_title',
  'Staff Management': 'staff_management_title',
  'Fee Management': 'fee_management_title',
  'Label Management': 'label_management_title',
  'Request Form Template Management': 'request_form_title',
  'Merchandise Management': 'merchandise_management',
  'Maintenance Management': 'maintenance_management',
  'Treatment Management': 'treatment_management',
  'Patient Detail': 'breadcrumb_patient_detail',
  'Add Caseroom': 'caseroom_add',
  'Consent Form': 'concent_form_title',
  'Deposit Tracking': 'more_info_deposit_tracking_title',
  'Diagnose Problem Template': 'diagnose_problem_template',
  'Method of Treatment Template': 'method_of_treatment_template',
  'Important Point Template': 'important_point_template',
  'Treatment Plan Template': 'treatment_plan_template',
  'Rubber Management': 'rubber_management_title',
  'Journal Report': 'journal_report',
  Chat: 'Chat',
}

export default function Navbar({
  title = 'Dashboard',
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

  const header = {
    Dashboard: 'dashboard_title',
    'Edit Information patient': 'edit_information_patient',
    'Add new patient': 'add_patient_new_title',
    'Patient List': 'patient_list_title',
    'Archive Patients List': 'patient_list_archive_title',
    'Clinic Setting': 'clinic_setting_title',
    'Doctor Management': 'doctor_management_title',
    'Staff Management': 'staff_management_title',
    'Fee Management': 'fee_management_title',
    'Label Management': 'label_management_title',
    'Request Form Template Management': 'request_form_title',
    'Merchandise Management': 'merchandise_management',
    'Maintenance Management': 'maintenance_management',
    'Treatment Management': 'treatment_management',
    'Patient Detail': 'breadcrumb_patient_detail',
    'Add Caseroom': 'caseroom_add',
    'Consent Form': 'concent_form_title',
    'Deposit Tracking': 'more_info_deposit_tracking_title',
    'Diagnose Problem Template': 'diagnose_problem_template',
    'Method of Treatment Template': 'method_of_treatment_template',
    'Important Point Template': 'important_point_template',
    'Treatment Plan Template': 'treatment_plan_template',
    'Rubber Management': 'rubber_management_title',
    'Journal Report': 'journal_report',
  }

  // console.log(title);

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
              <IconButton
                onClick={() => {
                  setOpeDrawer(true)
                }}
              >
                <MenuIcon style={{ color: '#2B5692' }} />
              </IconButton>
              {router.pathname !== '/patients/archive' && (
                <SearchInput
                  value={searchValue}
                  onChange={(e: any) => setSearchValue(e.target.value)}
                  onSubmit={(e: any) => {
                    e.preventDefault()
                    let searchQuery = router.asPath.split('?')[1]
                    let newQuery = router.asPath.split('?')[2]
                    if (searchQuery?.includes('search')) {
                      router.replace(
                        `/patients?search=${searchValue}${
                          newQuery ? `&${newQuery}` : ''
                        }`
                      )
                    } else if (!newQuery) {
                      router.replace(
                        `/patients?search=${searchValue}${
                          searchQuery ? `&${searchQuery}` : ''
                        }`
                      )
                    } else {
                      router.replace(`/patients?search=${searchValue}`)
                    }
                  }}
                />
              )}
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="flex-end"
            >
              <MaButton
                onClick={() => {
                  //
                }}
              >
                {t('Back to Orva')}
              </MaButton>
              <ButtonSwitchLanguage />
              <Notification />
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
              Consultation
            </Typography>
            {withSiderbar && (
              <SearchInput
                value={searchValue}
                onChange={(e: any) => setSearchValue(e.target.value)}
                onSubmit={(e: any) => {
                  e.preventDefault()
                  router.replace(`/chat/${id}?search=${searchValue}`)
                }}
              />
            )}
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="flex-end"
          >
            <MaButton
              onClick={() => {
                //
              }}
            >
              {t('Back to Orva')}
            </MaButton>
            <ButtonSwitchLanguage />
            <Notification />
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
