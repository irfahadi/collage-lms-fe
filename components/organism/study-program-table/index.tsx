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
import { MaButton, TablePaginationActions } from '@components/atoms'
import { useRouter } from 'next/router'
import ClassCard from '@components/molecules/class-card'
import { classes, faculties, studyPrograms } from '@utils/dummy'
import { formatDateRange } from '@utils/date'

interface ClassTableProps {
  data: any
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
  // onClick: (title: string, value: string) => void
  patientName: string
  doctor: string
  firstConsult: string
  nextReservation: string
  setPatientName: React.Dispatch<React.SetStateAction<string>>
  setDoctor: React.Dispatch<React.SetStateAction<string>>
  setFirstConsult: React.Dispatch<React.SetStateAction<string>>
  onRowClick?: (data: any) => void
  setNextReservation: React.Dispatch<React.SetStateAction<string>>
}

export default function StudyProgramTabel(props: ClassTableProps) {
  const {
    data = [],
    page,
    rowsPerPage,
    onPageChange,
    onRowPageChange,
    totalPage,
    // onRowClick = () => {},
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

  const goToPatientDetailPage = (data: any) => {
    // onRowClick(data)
  }

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
                Prodi
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
                Nama Ketua Prodi
              </Stack>
            </StyledTableCell>
            <StyledTableCell sx={{ width: '200pxß' }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                gap={1}
              >
                Tahun Berdiri
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
                Kontak
              </Stack>
            </StyledTableCell>
            <StyledTableCell sx={{ width: '200px' }}>Aksi</StyledTableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {studyPrograms.map((row: StudyProgramModel) => {
            return (
              <TableRow key={row.id}>
                <TableCell
                  sx={{
                    width: '200px',
                    boxSizing: 'border-box',
                  }}
                  // onClick={() => goToPatientDetailPage(row)}
                >
                  <p
                    style={{
                      color: '#212121',
                      fontWeight: '500',
                      fontSize: isTabletView ? '14px' : '16px',
                      margin: 0,
                    }}
                  >
                    {row.name}
                  </p>
                  <p
                    style={{
                      color: '#212121',
                      fontWeight: '500',
                      fontSize: isTabletView ? '12px' : '12px',
                      margin: 0,
                    }}
                  >
                    {row.code}
                  </p>
                </TableCell>
                <TableCell
                  sx={{ textAlign: 'center', px: 0.5, width: '200px' }}
                  onClick={() => goToPatientDetailPage(row)}
                >
                  <Typography sx={{ fontSize: isTabletView ? '12px' : '16px' }}>
                    {row.head_of_program}
                  </Typography>
                </TableCell>
                <TableCell
                  // onClick={() => goToPatientDetailPage(row)}
                  sx={{ textAlign: 'center', px: 0.5, width: '300px' }}
                >
                  <Typography sx={{ fontSize: isTabletView ? '12px' : '16px' }}>
                    {row.established_year}
                  </Typography>
                </TableCell>
                <TableCell
                  // onClick={() => goToPatientDetailPage(row)}
                  sx={{ textAlign: 'center', px: 0.5, width: '200px' }}
                >
                  <Typography sx={{ fontSize: isTabletView ? '12px' : '16px' }}>
                    {row.contact_email}
                  </Typography>
                  <Typography sx={{ fontSize: isTabletView ? '12px' : '16px' }}>
                    {row.contact_phone}
                  </Typography>
                </TableCell>
                <TableCell sx={{ px: 0.5, width: '200px' }}>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={0.5}
                  >
                    <Box>
                      <MaButton
                        size="small"
                        onClick={() => router.push('prodi/edit')}
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
                        onClick={() => goToPatientDetailPage(row)}
                        sx={{
                          textAlign: 'center',
                          fontSize: isTabletView ? '12px' : '12px',
                        }}
                      >
                        Hapus
                      </MaButton>
                    </Box>
                  </Stack>
                </TableCell>
              </TableRow>
            )
          })}
          {data?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: isTabletView ? '12px' : '16px' }}>
                  Tidak Ada Data Program Studi
                </Typography>
              </TableCell>
            </TableRow>
          ) : null} 
        </TableBody> */}
        {data.length > 0 && (
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
        )}
      </Table>
    </TableContainer>
  )
}
