import MainLayout from '@components/layout/main'
import { Box, Button, Grid, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { usePatient } from '@store/patient'
import BackButton from '@components/atoms/back-button'
import CardInfo from '@components/molecules/card-info'
import DiscussionForum from '@components/molecules/discussion-forum'
import CardWidget from '@components/molecules/card-widget'
import LecturerInfo from '@components/molecules/lecturer-info'
import ModalAddStudents from '@components/organism/modal-add-students'
import StudentLayout from '@components/layout/student'

export default function DeskripsiTopik() {
  const router = useRouter()
  const { id, tab } = router.query
  const { handleSetPatient }: any = usePatient()
  // const [detailPatient, setDetailPatient] = React.useState<PatientType | null>(
  //   null
  // )
  // const [label, setLabel] = React.useState<string>('')
  //   const { data: detailPatient, revalidate: revalidatePatient }: any =
  //     useDetailKelas(id as string)

  //   const handleGetPatientDetail = async (data: any) => {
  //     try {
  //       // setDetailPatient(res?.data)
  //       const treatmentrecordres = await getPatientTreatmentRecord(
  //         id as string,
  //         '?rsvp_datetime=newest'
  //       )
  //       const alignerdata = await getAlignerReplacment(id as string)

  //       const newdata = {
  //         ...data,
  //         treatment_record: treatmentrecordres?.data || [],
  //         aligner_data: alignerdata?.data || null,
  //       }
  //       handleSetPatient(newdata)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   useEffect(() => {
  //     if (detailPatient?.data) {
  //       handleGetPatientDetail(detailPatient?.data)
  //     }
  //   }, [detailPatient?.data])

  return (
    <Box sx={{ width: '100%' }}>
      <BackButton />

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={12}>
          <CardInfo
            title="Nama Topik"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          />
        </Grid>
      </Grid>
    </Box>
  )
}

DeskripsiTopik.getLayout = function getLayout(page: any) {
  return <StudentLayout title={'Deskripsi Pertemuan 1'}>{page}</StudentLayout>
}
