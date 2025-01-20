import React from 'react'
import MainLayout from '@components/layout/main'
import { Drawer, Stack } from '@mui/material'
import { useArchivePatients } from '@utils/hooks/use-patients'
import PatientsTable from '@components/organism/patients-table'
import { useRouter } from 'next/router'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import FilterComponent from '@components/organism/modal-advanced-filter'
import { SearchInput } from '@components/molecules'
import { MaButton } from '@components/atoms'
import { useTranslation } from 'react-i18next'

export default function PatientArchive() {
  const { t } = useTranslation()
  const router = useRouter()
  const { search } = router.query
  const [searchValue, setSearchValue] = React.useState('')
  const [patientName, setPatientName] = React.useState<string>('asc')
  const [doctor, setDoctor] = React.useState<string>('')
  const [firstConsult, setFirstConsult] = React.useState<string>('')
  const [nextReservation, setNextReservation] = React.useState<string>('')
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [open, setOpen] = React.useState(false)
  const [filter, setFilter] = React.useState('&patient_sort=asc')
  // const { data: patientListData = [] } = useArchivePatients(
  //   `page=${page + 1}&per_page=10${search ? `&keyword=${search}` : ''}${
  //     filter && filter
  //   }`
  // )

  const breadcrumbs = [
    {
      title: t('breadcrumb_patient_list'),
      href: '/patients',
    },
    {
      title: t('patient_list_archive_title'),
      href: '/patients/archive',
    },
  ]

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => setPage(newPage)

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setRowsPerPage(parseInt(event.target.value))

  const handleFilterChange = (value: string) => {
    setDoctor('')
    setPatientName('')
    setFirstConsult('')
    setNextReservation('')
    setFilter(value)
  }

  const handlePatientTableClick = (title: string, value: string) => {
    let sort: string[] = filter.split('&')
    const sortArray = [
      'patient_sort',
      'doctor_sort',
      'next_reservation_sort',
      'first_consult_sort',
    ]
    sort = sort.filter((item: string) =>
      sortArray.every((arr: string) => !item.includes(arr))
    )
    switch (title) {
      case 'patientName':
        setDoctor('')
        setFirstConsult('')
        setNextReservation('')
        value.length !== 0 && sort.push(`patient_sort=${value}`)
        break
      case 'doctor':
        setPatientName('')
        setFirstConsult('')
        setNextReservation('')
        value.length !== 0 && sort.push(`doctor_sort=${value}`)
        break
      case 'nextReservation':
        setPatientName('')
        setDoctor('')
        setFirstConsult('')
        value.length !== 0 && sort.push(`next_reservation_sort=${value}`)
        break
      case 'firstConsult':
        setPatientName('')
        setDoctor('')
        setNextReservation('')
        value.length !== 0 && sort.push(`first_consult_sort=${value}`)
        break
    }
    setFilter(sort.join('&'))
  }

  return (
    <Stack spacing={3} sx={{ pt: 3, pb: 10, pl: 3, pr: 3, mb: 10 }}>
      {/* <MaBreadcrumbs list={breadcrumbs} /> */}
      <Stack direction="row" justifyContent="space-between">
        <SearchInput
          value={searchValue}
          onChange={(e: any) => setSearchValue(e.target.value)}
          onSubmit={(e: any) => {
            e.preventDefault()
            router.push(`/patients/archive?search=${searchValue}`)
            setSearchValue('')
          }}
          bordered
          width={400}
        />

        <Stack direction="row" spacing={2}>
          <MaButton
            variant="secondary"
            endIcon={<FilterAltOutlinedIcon />}
            onClick={() => setOpen(true)}
          >
            {t('filter_button')}
          </MaButton>
          <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <FilterComponent
              onReturnValue={handleFilterChange}
              onClose={() => setOpen(false)}
              defaultValue={filter}
            />
          </Drawer>
        </Stack>
      </Stack>

      <PatientsTable
        totalPage={0}
        data={[]}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowPageChange={handleChangeRowsPerPage}
        onClick={handlePatientTableClick}
        doctor={doctor}
        firstConsult={firstConsult}
        nextReservation={nextReservation}
        patientName={patientName}
        setDoctor={setDoctor}
        setFirstConsult={setFirstConsult}
        setNextReservation={setNextReservation}
        setPatientName={setPatientName}
      />
    </Stack>
  )
}

PatientArchive.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout title="Archive Patients List">{page}</MainLayout>
}
