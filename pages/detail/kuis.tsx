import MainLayout from '@components/layout/main'
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import BackButton from '@components/atoms/back-button'
import CardInfo from '@components/molecules/card-info'
import DiscussionForum from '@components/molecules/discussion-forum'
import CardWidget from '@components/molecules/card-widget'
import LecturerInfo from '@components/molecules/lecturer-info'
import ModalAddStudents from '@components/organism/modal-add-students'
import StudentLayout from '@components/layout/student'
import QuestionCardStudent from '@components/molecules/question-card/student'
import PaginationButtons from '@components/atoms/pagination-button'

export default function KuisTopik() {
  const router = useRouter()
  const { id, tab } = router.query
  const [currentQuestion, setCurrentQuestion] = React.useState(1)
  const questions = [
    {
      question: 'Manakah yang bukan termasuk dari tag dasar HTML?',
      options: ['Opsi A', 'Opsi B', 'Opsi C', 'Opsi D'],
    },
    {
      question: 'Apa fungsi utama tag <head>?',
      options: ['Opsi A', 'Opsi B', 'Opsi C'],
    },
    {
      question: 'Bagaimana cara membuat hyperlink di HTML?',
      options: ['Opsi A', 'Opsi B', 'Opsi C', 'Opsi D', 'Opsi E'],
    },
    // Tambahkan pertanyaan lainnya di sini
  ]

  const handleSelectAnswer = (answer: string) => {
    console.log(`Selected answer for question ${currentQuestion}: ${answer}`)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const handleFinish = () => {
    console.log('Kuis selesai!')
    alert('Kuis selesai! Terima kasih telah menjawab.')
  }

  // Gunakan theme dan media query untuk mendeteksi ukuran layar
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

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

      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '24px',
          mt: 2,
          boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Grid container spacing={3}>
          {/* Bagian Pertanyaan */}
          <Grid item xs={12} md={8}>
            <QuestionCardStudent
              question={questions[currentQuestion - 1]?.question}
              options={questions[currentQuestion - 1]?.options}
              onSelect={handleSelectAnswer}
            />
          </Grid>

          {/* Bagian Navigasi */}
          <Grid item xs={12} md={4}>
            {!isMobile && (
              <PaginationButtons
                total={questions.length}
                current={currentQuestion}
                onChange={setCurrentQuestion}
              />
            )}
          </Grid>
        </Grid>

        {/* Tombol Navigasi Soal */}
        <Box display="flex" justifyContent="space-between" mt={3}>
          <Button
            variant="outlined"
            onClick={handlePrevious}
            disabled={currentQuestion === 1} // Disable jika di pertanyaan pertama
          >
            Sebelumnya
          </Button>

          {currentQuestion === questions.length ? (
            <Button variant="contained" color="primary" onClick={handleFinish}>
              Selesai
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Selanjutnya
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  )
}

KuisTopik.getLayout = function getLayout(page: any) {
  return <StudentLayout title={'Kuis Pertemuan 1'}>{page}</StudentLayout>
}
