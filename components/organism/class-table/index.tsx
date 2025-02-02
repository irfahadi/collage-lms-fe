import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  tableCellClasses,
  TableFooter,
  TablePagination,
  ButtonGroup,
  Stack,
  Typography,
  useMediaQuery,
  Box,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { MaButton } from '@components/atoms'
import { useRouter } from 'next/router'
import ClassCard from '@components/molecules/class-card'
import { classes } from '@utils/dummy'
import { formatDateRange } from '@utils/date'

interface ClassTableProps {
  data: ClassModelWithRelations[]
  page: number
  rowsPerPage: number
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void
  onRowPageChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  totalPage: number
  onClick?: (title: string, value: string) => void
  onRowClick?: (data: any) => void
}

export default function ClassTabel(props: ClassTableProps) {
  const {
    data = [],
    page,
    rowsPerPage,
    onPageChange,
    onRowPageChange,
    totalPage,
    onClick,
    onRowClick = () => {},
  } = props
  const router = useRouter()
  const isTabletView = useMediaQuery('(max-width: 1180px)')
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      background: '#2B5692',
      color: theme.palette.common.white,
    },
    textAlign: 'center',
    padding: isTabletView ? '16px 5px' : 'auto',
  }))

  const [userData, setUserData] = React.useState({
    role: null,
  })

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Cek apakah kode berjalan di client
      const storedUserData = localStorage.getItem('userdata')
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData))
      }
    }
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: '#2B5692' }}>
          <TableRow>
            <StyledTableCell sx={{ width: '200px', minWidth: '200px' }}>
              <Stack
                direction="row"
                sx={{
                  textAlign: 'center',
                  cursor: 'pointer',
                  justifyContent: 'center',
                }}
                gap={1}
              >
                Kelas
              </Stack>
            </StyledTableCell>
            <StyledTableCell sx={{ width: '200px' }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                gap={1}
              >
                Dosen
              </Stack>
            </StyledTableCell>
            <StyledTableCell sx={{ width: '300px' }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                gap={1}
              >
                Jadwal
              </Stack>
            </StyledTableCell>
            <StyledTableCell sx={{ width: '200px' }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                gap={1}
              >
                Program Studi
              </Stack>
            </StyledTableCell>
            <StyledTableCell sx={{ width: '200px' }}>Aksi</StyledTableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {classes.map((row: ClassModelWithRelations) => {
            const date = formatDateRange(row.start_date, row.end_date)
            return (
              <TableRow key={row.class_id}>
                <TableCell
                  sx={{
                    width: '200px',
                    py: 1,
                    px: 0.5,
                    boxSizing: 'border-box',
                  }}
                  // onClick={() => goToPatientDetailPage(row)}
                >
                  <ClassCard data={row} />
                </TableCell>
                <TableCell
                  sx={{ textAlign: 'center', px: 0.5, width: '200px' }}
                  // onClick={() => goToPatientDetailPage(row)}
                >
                  <Typography sx={{ fontSize: isTabletView ? '12px' : '16px' }}>
                    {row.responsible_lecturer.first_name +
                      ' ' +
                      row.responsible_lecturer.last_name}
                  </Typography>
                </TableCell>
                <TableCell
                  // onClick={() => goToPatientDetailPage(row)}
                  sx={{ textAlign: 'center', px: 0.5, width: '300px' }}
                >
                  <Typography sx={{ fontSize: isTabletView ? '12px' : '16px' }}>
                    {date}
                  </Typography>
                </TableCell>
                <TableCell
                  // onClick={() => goToPatientDetailPage(row)}
                  sx={{ textAlign: 'center', px: 0.5, width: '200px' }}
                >
                  <Typography sx={{ fontSize: isTabletView ? '12px' : '16px' }}>
                    {row.study_program.name}
                  </Typography>
                </TableCell>
                <TableCell sx={{ px: 0.5, width: '200px' }}>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={0.5}
                  >
                    {userData?.role == 'Dosen' && (
                      <Box>
                        <MaButton
                          size="small"
                          onClick={() => router.push('kelas/detail')}
                          sx={{
                            textAlign: 'center',
                            fontSize: isTabletView ? '12px' : '12px',
                          }}
                        >
                          Detail
                        </MaButton>
                      </Box>
                    )}
                    {userData?.role == 'Admin Prodi' && (
                      <>
                        <Box>
                          <MaButton
                            size="small"
                            onClick={() => router.push('kelas/mahasiswa')}
                            sx={{
                              textAlign: 'center',
                              fontSize: isTabletView ? '12px' : '12px',
                            }}
                          >
                            Mahasiswa
                          </MaButton>
                        </Box>
                        <Box>
                          <MaButton
                            size="small"
                            onClick={() => router.push('kelas/edit')}
                            sx={{
                              textAlign: 'center',
                              fontSize: isTabletView ? '12px' : '12px',
                            }}
                          >
                            Edit
                          </MaButton>
                        </Box>
                        <Box>
                          <MaButton
                            size="small"
                            // onClick={() => goToPatientDetailPage(row)}
                            sx={{
                              textAlign: 'center',
                              fontSize: isTabletView ? '12px' : '12px',
                            }}
                          >
                            Hapus
                          </MaButton>
                        </Box>
                      </>
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
            )
          })}
          {data?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: isTabletView ? '12px' : '16px' }}>
                  Tidak ada kelas
                </Typography>
              </TableCell>
            </TableRow>
          ) : null}
        </TableBody> */}
        {/* {data.length > 0 && (
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10]}
                colSpan={6}
                count={totalPage}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowPageChange}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        )} */}
      </Table>
    </TableContainer>
  )
}
