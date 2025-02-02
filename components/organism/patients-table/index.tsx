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
import { PatientCard, PatientExternalLink } from '@components/molecules'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import AscendingIcon from '@assets/icons/ascending.svg'
import DescendingIcon from '@assets/icons/descending.svg'
import SortIcon from '@assets/icons/sort.svg'

interface PatientsTableProps {
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
  onClick: (title: string, value: string) => void
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

export default function PatientsTable(props: PatientsTableProps) {
  const {
    data = [],
    page,
    rowsPerPage,
    onPageChange,
    onRowPageChange,
    totalPage,
    onClick,
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
            <StyledTableCell
              sx={{ width: '300px', minWidth: '300px' }}
              onClick={() => {
                switch (patientName) {
                  case 'asc': {
                    setPatientName('desc')
                    onClick('patientName', 'desc')
                    break
                  }
                  case 'desc': {
                    setPatientName('')
                    onClick('patientName', '')
                    break
                  }
                  default:
                    setPatientName('asc')
                    onClick('patientName', 'asc')
                    break
                }
              }}
            >
              <Stack
                direction="row"
                sx={{
                  textAlign: 'left',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                gap={1}
              >
                {t('patient_name_table')}
                {patientName === 'asc' ? (
                  <AscendingIcon />
                ) : patientName === 'desc' ? (
                  <DescendingIcon />
                ) : (
                  <SortIcon />
                )}
              </Stack>
            </StyledTableCell>
            <StyledTableCell
              sx={{ width: '150px', minWidth: '150px' }}
              onClick={() => {
                switch (doctor) {
                  case 'asc': {
                    setDoctor('desc')
                    onClick('doctor', 'desc')
                    break
                  }
                  case 'desc': {
                    setDoctor('')
                    onClick('doctor', '')
                    break
                  }
                  default:
                    setDoctor('asc')
                    onClick('doctor', 'asc')
                    break
                }
              }}
            >
              <Stack
                direction="row"
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                gap={1}
              >
                {t('doctor_staff_table')}
                {doctor === 'asc' ? (
                  <AscendingIcon />
                ) : doctor === 'desc' ? (
                  <DescendingIcon />
                ) : (
                  <SortIcon />
                )}
              </Stack>
            </StyledTableCell>
            <StyledTableCell
              sx={{ width: '150px' }}
              onClick={() => {
                switch (firstConsult) {
                  case 'newest': {
                    setFirstConsult('oldest')
                    onClick('firstConsult', 'oldest')
                    break
                  }
                  case 'oldest': {
                    setFirstConsult('')
                    onClick('firstConsult', '')
                    break
                  }
                  default:
                    setFirstConsult('newest')
                    onClick('firstConsult', 'newest')
                    break
                }
              }}
            >
              <Stack
                direction="row"
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                gap={1}
              >
                {t('first_consult_table')}
                {firstConsult === 'newest' ? (
                  <AscendingIcon />
                ) : firstConsult === 'oldest' ? (
                  <DescendingIcon />
                ) : (
                  <SortIcon />
                )}
              </Stack>
            </StyledTableCell>
            <StyledTableCell
              sx={{ width: '150px' }}
              onClick={() => {
                switch (nextReservation) {
                  case 'newest': {
                    setNextReservation('oldest')
                    onClick('nextReservation', 'oldest')
                    break
                  }
                  case 'oldest': {
                    setNextReservation('')
                    onClick('nextReservation', '')
                    break
                  }
                  default:
                    setNextReservation('newest')
                    onClick('nextReservation', 'newest')
                    break
                }
              }}
            >
              <Stack
                direction="row"
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                gap={1}
              >
                {t('next_appointment_table')}
                {nextReservation === 'newest' ? (
                  <AscendingIcon />
                ) : nextReservation === 'oldest' ? (
                  <DescendingIcon />
                ) : (
                  <SortIcon />
                )}
              </Stack>
            </StyledTableCell>
            <StyledTableCell sx={{ minWidth: '150px', width: '150px' }}>
              {t('external_link')}
            </StyledTableCell>
            <StyledTableCell sx={{ width: '160px', minWidth: '160px' }}>
              {t('clincheck')}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => {
            const firstConsultDate = row.first_consult?.date.split('-')
            const recordDate = row.record?.date_time.split(' ')[0].split('-')
            return (
              <TableRow key={row.id}>
                <TableCell
                  sx={{
                    width: '300px',
                    py: 1,
                    px: 0.5,
                    boxSizing: 'border-box',
                    boxShadow: row?.genie_patient_id
                      ? '7px 0px 1px -4px #f14b4b inset'
                      : 'none',
                  }}
                  onClick={() => goToPatientDetailPage(row)}
                >
                  <PatientCard user={row} />
                </TableCell>
                <TableCell sx={{ px: 0.5, width: '150px' }}>
                  <Stack
                    sx={{ minWidth: '130px' }}
                    gap={1}
                    direction="column"
                    justifyContent="center"
                  >
                    {row.doctor?.doctor_displayname ? (
                      <Box>
                        <MaButton
                          size="small"
                          onClick={() => goToPatientDetailPage(row)}
                          sx={{
                            textAlign: 'center',
                            color: `white !important`,
                            backgroundColor: `${row.doctor?.color} !important`,
                            fontSize: isTabletView ? '12px' : '12px',
                          }}
                        >
                          {row.doctor?.doctor_displayname}
                        </MaButton>
                      </Box>
                    ) : null}
                    {row.staff?.staff_displayname ? (
                      <Box>
                        <MaButton
                          size="small"
                          onClick={() => goToPatientDetailPage(row)}
                          sx={{
                            textAlign: 'center',
                            color: `white !important`,
                            backgroundColor: `${row.staff?.color} !important`,
                            fontSize: isTabletView ? '12px' : '12px',
                          }}
                        >
                          {row.staff?.staff_displayname}
                        </MaButton>
                      </Box>
                    ) : null}
                  </Stack>
                </TableCell>
                <TableCell
                  onClick={() => goToPatientDetailPage(row)}
                  sx={{ textAlign: 'center', px: 0.5, width: '150px' }}
                >
                  <Link
                    href={`/patients/${row.id}`}
                    style={{
                      cursor: 'pointer',
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: isTabletView ? '12px' : '16px',
                        minWidth: '150px',
                      }}
                    >
                      {row.first_consult?.date
                        ? `${firstConsultDate?.[0]}年 ${firstConsultDate?.[1]}月 ${firstConsultDate?.[2]}日`
                        : ''}
                    </Typography>
                  </Link>
                </TableCell>
                <TableCell
                  onClick={() => goToPatientDetailPage(row)}
                  sx={{ textAlign: 'center', px: 0.5, width: '150px' }}
                >
                  <Link
                    href={`/patients/${row.id}`}
                    style={{
                      cursor: 'pointer',
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    <Stack gap={1} sx={{ minWidth: '180px' }}>
                      <Typography
                        sx={{ fontSize: isTabletView ? '12px' : '16px' }}
                      >
                        {row.record?.date_time
                          ? `${recordDate?.[0]}年 ${recordDate?.[1]}月 ${recordDate?.[2]}日`
                          : ''}
                      </Typography>
                      {row?.record?.treatment_statuses?.map((status: any) => (
                        <Typography
                          key={status.id}
                          sx={{ fontSize: isTabletView ? '12px' : '16px' }}
                        >
                          {status.treatment_status}
                        </Typography>
                      ))}
                    </Stack>
                  </Link>
                </TableCell>
                <TableCell sx={{ px: 0.5, width: '150px' }}>
                  <Stack direction="row" justifyContent="center">
                    <PatientExternalLink
                      orientation={isTabletView ? 'vertical' : 'horizontal'}
                      invisalign={row?.invisalign}
                      cc={row?.invisalign_cc}
                      webch={row?.webceph}
                    />
                  </Stack>
                </TableCell>
                <TableCell sx={{ px: 0.5, width: '160px', minWidth: '160px' }}>
                  {row?.status_cc ? (
                    <Typography
                      sx={{
                        fontSize: '12px !important',
                        borderRadius: 2,
                        border: '2px solid #2273E2',
                        textAlign: 'center',
                        width: 'fit-content',
                        minWidth: '150px',
                        mx: 'auto',
                        p: 1,
                      }}
                    >
                      {row?.status_cc}
                    </Typography>
                  ) : null}
                </TableCell>
              </TableRow>
            )
          })}
          {data?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: isTabletView ? '12px' : '16px' }}>
                  {t('no_data')}
                </Typography>
              </TableCell>
            </TableRow>
          ) : null}
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
