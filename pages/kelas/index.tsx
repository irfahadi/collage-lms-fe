import React, { useEffect } from 'react'
import MainLayout from '@components/layout/main'
import { Box, Drawer, Stack, useMediaQuery } from '@mui/material'
import { usePatients } from '@utils/hooks/use-patients'
import { useRouter } from 'next/router'
import { MaButton } from '@components/atoms'
import ClassTabel from '@components/organism/class-table'
import { SearchInput } from '@components/molecules'
import { useClasses } from '@utils/hooks/use-class'

export default function LihatKelas() {
  const router = useRouter()
  const { search } = router.query
  const [isOpenModalAggree, setIsOpenModalAggree] = React.useState(false)
  const [searchFilter, setSearchFilter] = React.useState<string>('')
  const [selectedPatient, setSelectedPatient] = React.useState<any>({})
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [open, setOpen] = React.useState(false)
  const [filter, setFilter] = React.useState('&patient_sort=asc')
  const isTabletView = useMediaQuery('(max-width: 1180px)')
  const [searchValue, setSearchValue] = React.useState('')
  const { data: classesData = [] } = useClasses(
    `e327e2e0-eac4-413d-9c15-38d4582d875f`
  )

  // console.log(classesData)

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
        <SearchInput
          placeholder="Cari Kelas"
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
        <ClassTabel
          totalPage={0}
          data={[]}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowPageChange={handleChangeRowsPerPage}
          onRowClick={(data: any) => {
            // setSelectedPatient(data)
            // setIsOpenModalAggree(true)
          }}
        />
      </Box>
    </Stack>
  )
}

LihatKelas.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout title="Lihat Kelas">{page}</MainLayout>
}
