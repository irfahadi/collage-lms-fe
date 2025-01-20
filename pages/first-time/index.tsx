import { MaButton } from '@components/atoms'
import MainLayout from '@components/layout/main'
import { ModalTakeConsultation, SidebarFirstTime } from '@components/organism'
import {
  Box,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'

export default function FirstimePage() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Box sx={{ px: 3, pt: 3, pb: 10 }}>
      <Box sx={{ backgroundColor: 'white', p: 2 }}>
        <Typography variant="h6" sx={{ borderBottom: '1px solid #E2E8F0' }}>
          First Time Inbox
        </Typography>
        <Stack direction="row" justifyContent="space-between" mt={2}>
          <Box width={250}>
            <FormControl fullWidth>
              <InputLabel id="select-clinic">Clinic</InputLabel>
              <Select
                labelId="select-clinic"
                id="clinic"
                value={''}
                label="Clinic"
                onChange={() => {}}
              >
                <MenuItem value={10}>All</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box width={250}>
            <FormControl fullWidth>
              <InputLabel id="select-clinic">Sort By</InputLabel>
              <Select
                labelId="select-clinic"
                id="clinic"
                value={''}
                label="Clinic"
                onChange={() => {}}
              >
                <MenuItem value={10}>Oldest Created</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
        <Box mt={2}>
          <List>
            <ListItem
              sx={{
                '&:hover': {
                  backgroundColor: '#2273E21A',
                },
              }}
              disablePadding
            >
              <ListItemButton
                onClick={() => setIsOpen(true)}
                sx={{ borderBottom: '1px solid #E0E0E0' }}
              >
                <ListItemText
                  primary={
                    <>
                      <Typography variant="subtitle1">Samehadaku</Typography>
                      <Typography color="#9E9E9E" variant="body2">
                        From Clinic : 名駅MA矯正歯科
                      </Typography>
                    </>
                  }
                />
                <MaButton>Take Consultation</MaButton>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
      {/* <SidebarFirstTime /> */}
      <ModalTakeConsultation
        open={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </Box>
  )
}

FirstimePage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout title="Dashboard">{page}</MainLayout>
}
