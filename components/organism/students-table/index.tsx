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
import { useTranslation } from 'react-i18next'
import StudentCard from '@components/molecules/user-card'
interface ClassTableProps {
  data: any
  page: number
  rowsPerPage: number
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void
  totalPage: number
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

export default function StudentsTabel(props: ClassTableProps) {
  const {
    data = [],
    page,
    rowsPerPage,
    onPageChange,
    totalPage,
    patientName,
    setPatientName,
    doctor,
    setDoctor,
    firstConsult,
    setFirstConsult,
    nextReservation,
    setNextReservation,
    onRowClick = () => {},
  } = props
  const router = useRouter()
  const { t } = useTranslation()
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
    onRowClick(data)
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
                Nama Mahasiswa
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
                Username
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
                Aksi
              </Stack>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: UserModelWithRelation) => {
            return (
              <TableRow key={row.id}>
                <TableCell
                  sx={{
                    width: '200px',
                    py: 1,
                    px: 0.5,
                    boxSizing: 'border-box',
                  }}
                  // onClick={() => goToPatientDetailPage(row)}
                >
                  <StudentCard user={row} />
                </TableCell>
                <TableCell
                  // onClick={() => goToPatientDetailPage(row)}
                  sx={{ textAlign: 'center', px: 0.5, width: '200px' }}
                >
                  <Typography sx={{ fontSize: isTabletView ? '12px' : '16px' }}>
                    {row.username}
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
          {/* {data?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: isTabletView ? '12px' : '16px' }}>
                  {t('no_data')}
                </Typography>
              </TableCell>
            </TableRow>
          ) : null} */}
        </TableBody>
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
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </TableContainer>
  )
}
