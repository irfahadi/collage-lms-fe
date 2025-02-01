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

export default function DetailKelas() {
  const router = useRouter()
  const { id, tab } = router.query
  const { handleSetPatient }: any = usePatient()
  const [isAddStudents, setisAddStudents] = React.useState(false)
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

  const handleDeleteMahasiswa = (index: number) => {
    console.log(`Hapus Mahasiswa ke-${index}`)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <BackButton />

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {/* Informasi Kelas */}
        <Grid item xs={12} md={8}>
          <Stack gap={2}>
            <CardInfo
              title="Nama (Kode)"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
              tags={['Tag: Lorem', 'Ipsum']}
              image="gambar"
            />
            <LecturerInfo
              lecturerName="Nama Dosen"
              program="Program Studi"
              faculty="Fakultas"
              schedule="22/06/2022 - 22/09/2022"
            />
          </Stack>
        </Grid>

        {/* Daftar Mahasiswa */}
        <Grid item xs={12} md={4}>
          <Stack gap={2}>
            <CardWidget
              title="Mahasiswa"
              items={[
                'Mahasiswa 1',
                'Mahasiswa 2',
                'Mahasiswa 3',
                'Mahasiswa 4',
              ]}
              onDelete={handleDeleteMahasiswa} // Fungsi hapus
              onActionButton={() => setisAddStudents(true)}
              actionButtonText="Tambah Mahasiswa"
            />
            {/* Daftar Topik */}
            <CardWidget
              title="Topik"
              items={['Topik 1', 'Topik 2', 'Topik 3', 'Topik 4']}
              onActionButton={() => router.push('topik')}
              actionButtonText="Manage Topik"
            />
          </Stack>
        </Grid>

        {/* Forum Diskusi */}
        <Grid item xs={12}>
          <DiscussionForum
            title="Forum Diskusi"
            messages={[
              {
                user: 'Bapak Dosen',
                role: 'Dosen',
                message:
                  'Kalau pakai tag ol, itu jadi list 1. 2. 3. atau numbering.',
                time: 'Dikirim pada 2024-10-11T08:29:34.427Z',
              },
              {
                user: 'Nama',
                role: 'Mahasiswa',
                message:
                  'Pak kalau misalkan saya tanuh tag itu dia muncul angka atau bullet list?',
                time: 'Dikirim pada 2024-10-11T08:28:34.427Z',
              },
            ]}
            onSendMessage={(msg) => console.log(`Pesan terkirim: ${msg}`)}
          />
        </Grid>
      </Grid>
      <ModalAddStudents
        open={isAddStudents}
        handleClose={() => setisAddStudents(false)}
        onSave={() => {
          // router.push('/consult-request/' + selectedPatient?.id)
        }}
      />
    </Box>
  )
}

DetailKelas.getLayout = function getLayout(page: any) {
  return <MainLayout title={'Detail Kelas'}>{page}</MainLayout>
}
