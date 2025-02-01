import MainLayout from '@components/layout/main'
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import BackButton from '@components/atoms/back-button'

export default function KuisTopik() {
  const router = useRouter()
  const { id, tab } = router.query
  const [isAddStudents, setisAddStudents] = React.useState(false)
  // const [detailPatient, setDetailPatient] = React.useState<PatientType | null>(
  //   null
  // )
  // const [label, setLabel] = React.useState<string>('')
  //   const { data: detailPatient, revalidate: revalidatePatient }: any =
  //     useManageTopik(id as string)

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

  const questions: QuizModel[] = [
    {
      id: 1,
      question: 'Which of the following is not a networking protocol?',
      options: [
        { label: 'a. ICP', value: 'ICP' },
        { label: 'b. DCP', value: 'DCP' },
        { label: 'c. BCP', value: 'BCP' },
        { label: 'd. CCP', value: 'CCP' },
      ],
      answer: 'BCP',
    },
    {
      id: 2,
      question: 'Which of the following is not a networking protocol?',
      options: [
        { label: 'a. ICP', value: 'ICP' },
        { label: 'b. DCP', value: 'DCP' },
        { label: 'c. BCP', value: 'BCP' },
        { label: 'd. CCP', value: 'CCP' },
      ],
      answer: 'BCP',
    },
    {
      id: 3,
      question: 'Which of the following is not a networking protocol?',
      options: [
        { label: 'a. ICP', value: 'ICP' },
        { label: 'b. DCP', value: 'DCP' },
        { label: 'c. BCP', value: 'BCP' },
        { label: 'd. CCP', value: 'CCP' },
      ],
      answer: 'BCP',
    },
  ]

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        padding: 3,
        borderRadius: 2,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <BackButton />
        <Button
          variant="outlined"
          onClick={() => router.push('kuis/edit')}
          sx={{ textTransform: 'none' }}
        >
          Edit Kuis
        </Button>
      </Box>

      {/* Quiz Content */}
      {questions.map((question, index) => (
        <Box
          key={question.id}
          sx={{
            mb: 4, // Margin bottom untuk memisahkan antar pertanyaan
            paddingBottom: 2,
            borderBottom:
              index !== questions.length - 1 ? '1px solid #E0E0E0' : 'none', // Garis bawah antar pertanyaan
          }}
        >
          {/* Question Title */}
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            Pertanyaan ke-{index + 1}
          </Typography>

          {/* Question Text */}
          <Typography variant="body1" gutterBottom>
            {question.question}
          </Typography>

          {/* Answer Options */}
          <FormControl component="fieldset">
            <RadioGroup value={question.answer}>
              {question.options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio disabled />} // Read-only
                  label={option.label}
                  sx={{
                    // Highlight correct answer
                    backgroundColor:
                      option.value === question.answer
                        ? '#DFF2BF'
                        : 'transparent',
                    borderRadius: 1,
                    py: 0.5,
                    px: 1,
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      ))}
    </Box>
  )
}

KuisTopik.getLayout = function getLayout(page: any) {
  return <MainLayout title={'Kuis Topik '}>{page}</MainLayout>
}
