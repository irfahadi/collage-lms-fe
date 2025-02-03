import React, { useEffect } from 'react'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { MaButton } from '@components/atoms'
import { Navbar, Sidebar } from '@components/organism'
import Head from 'next/head'
import cookie from 'cookie'
import { checkUser } from '@utils/services/user'
import MainLayout from '@components/layout/main'
import StatsCard from '@components/molecules/stats-card'
import PeopleIcon from '@mui/icons-material/People'
import SchoolIcon from '@mui/icons-material/School'
import ClassIcon from '@mui/icons-material/Class'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
import { useManager } from '@utils/hooks/use-manager'

export default function DashboardPage() {
  const router = useRouter()
  const { data: managerData = {} } = useManager()
  const [userData, setUserData] = React.useState({
    username: null,
    role: '',
  })
  console.log(managerData)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Cek apakah kode berjalan di client
      const storedUserData = localStorage.getItem('userdata')
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData))
      }
    }
  }, [])

  return (
    <>
      <Navbar
        withSiderbar={false}
        isCollapse={false}
        position="absolute"
        title="Dashboard"
      />
      <Box
        sx={{
          // paddingTop: '4rem',
          mb: 10,
          pr: 0,
        }}
      >
        <Box
          sx={{
            minHeight: '180px',
            color: 'white',
            display: 'flex',
            alignItems: 'flex-end',
            background:
              'linear-gradient(92.21deg, #388E3C 20.52%, #66BB6A 68.79%, #43A047 89.48%)',
            mb: 3,
          }}
        >
          <Box sx={{ width: '100%', mb: 2 }}>
            <Stack
              direction="row"
              mx={4}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography variant="h6">
                  Halo {userData.username ? userData.username : 'Admin'}
                </Typography>
                <Typography variant="subtitle1">
                  Selamat datang di Sistem Kuliah Daring - skuring.com
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>

        {userData.role.includes('Manager') && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <StatsCard
                icon={<PeopleIcon fontSize="large" />}
                title="Total Mahasiswa Terdaftar"
                value={managerData.student_count}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <StatsCard
                icon={<SchoolIcon fontSize="large" />}
                title="Total Dosen Terdaftar"
                value={managerData.lecturer_count}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <StatsCard
                icon={<ClassIcon fontSize="large" />}
                title="Total Kelas Terdaftar"
                value={managerData.class_count}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <StatsCard
                icon={<MeetingRoomIcon fontSize="large" />}
                title="Total Tatap Muka"
                value={managerData.meeting_count}
              />
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  )
}

DashboardPage.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <MainLayout title="Dashboard" isWithSidebar>
      {page}
    </MainLayout>
  )
}
