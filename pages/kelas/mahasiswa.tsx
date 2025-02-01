import React, { useEffect } from 'react'
import MainLayout from '@components/layout/main'
import { Box, Drawer, Stack, useMediaQuery } from '@mui/material'
import { usePatients } from '@utils/hooks/use-patients'
import { useRouter } from 'next/router'
import { MaButton } from '@components/atoms'
import FilterComponent from '@components/organism/modal-advanced-filter'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import { useTranslation } from 'react-i18next'
import { ModalAggreement } from '@components/organism'
import ClassTabel from '@components/organism/class-table'
import { SearchInput } from '@components/molecules'
import StudentsTabel from '@components/organism/students-table'
import ModalAddStudents from '@components/organism/modal-add-students'
import { students } from '@utils/dummy'

export default function MahasiswaKelas() {
  const router = useRouter()
  const { search } = router.query
  const [isAddStudents, setisAddStudents] = React.useState(false)
  const [searchFilter, setSearchFilter] = React.useState<string>('')
  const [patientName, setPatientName] = React.useState<string>('asc')
  const [doctor, setDoctor] = React.useState<string>('')
  const [firstConsult, setFirstConsult] = React.useState<string>('')
  const [nextReservation, setNextReservation] = React.useState<string>('')
  const [selectedPatient, setSelectedPatient] = React.useState<any>({})
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [open, setOpen] = React.useState(false)
  const [filter, setFilter] = React.useState('&patient_sort=asc')
  const isTabletView = useMediaQuery('(max-width: 1180px)')
  const [searchValue, setSearchValue] = React.useState('')
  // const { data: patientListData = [] } = usePatients(
  //   `page=${page + 1}&per_page=10${
  //     searchFilter ? `&keyword=${searchFilter}` : ''
  //   }${filter && filter}`
  // )
  const { t } = useTranslation()

  useEffect(() => {
    if (typeof search === 'string') {
      if (search) {
        const parts = search.split('?')[0]
        setSearchFilter(parts)
        setPage(0)
      } else {
        setSearchFilter('')
      }
    } else {
      setSearchFilter('')
    }
  }, [search])

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => setPage(newPage)

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setRowsPerPage(parseInt(event.target.value))

  const goToPatientArchivePage = () => router.push('/patients/archive')

  useEffect(() => {
    const data = router.asPath
      .split('?')
      .filter((str) => !str.includes('search'))
    const rule = data.length === 1 ? data[0] !== '/patients' : true
    // console.log(router.asPath)
    // console.log(data)
    if (rule) {
      setFilter('&' + router.asPath.split('?').splice(-1))
    }
  }, [router.query])

  const handleFilterChange = (value: string) => {
    setDoctor('')
    setPatientName('')
    setFirstConsult('')
    setNextReservation('')
    setFilter(value)
  }

  return (
    <Stack
      spacing={3}
      sx={{
        pt: 3,
        pb: 10,
        pl: 3,
        mb: 10,
        width: isTabletView ? '100vw' : '100%',
        pr: isTabletView ? 4 : 4,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <div></div>
        <MaButton
          onClick={() => setisAddStudents(true)}
          sx={{
            textAlign: 'center',
            fontSize: isTabletView ? '12px' : '12px',
          }}
        >
          Tambah Mahasiswa
        </MaButton>
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <SearchInput
          placeholder="Cari Mahasiswa"
          value={searchValue}
          onChange={(e: any) => setSearchValue(e.target.value)}
          onSubmit={(e: any) => {
            e.preventDefault()
            // router.push(`/patients/archive?search=${searchValue}`)
            setSearchValue('')
          }}
          bordered
          width="100%"
        />
      </Stack>

      <Box sx={{ maxWidth: 'inherit' }}>
        <StudentsTabel
          totalPage={0}
          data={students}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          doctor={doctor}
          firstConsult={firstConsult}
          nextReservation={nextReservation}
          patientName={patientName}
          setDoctor={setDoctor}
          setFirstConsult={setFirstConsult}
          setNextReservation={setNextReservation}
          setPatientName={setPatientName}
          onRowClick={(data: any) => {
            setSelectedPatient(data)
            // setisAddStudents(true)
          }}
        />
      </Box>
      <ModalAddStudents
        open={isAddStudents}
        handleClose={() => setisAddStudents(false)}
        onSave={() => {
          // router.push('/consult-request/' + selectedPatient?.id)
        }}
      />
    </Stack>
  )
}

MahasiswaKelas.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout title="Lihat Mahasiswa Kelas">{page}</MainLayout>
}
