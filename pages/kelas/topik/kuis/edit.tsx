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
import { usePatient } from '@store/patient'
import BackButton from '@components/atoms/back-button'
import QuestionCard from '@components/molecules/question-card'
import AddQuestionButton from '@components/atoms/add-question-button'
import StickyHeader from '@components/molecules/sticky-header'

export default function EditKuisTopik() {
  const router = useRouter()
  const { id, tab } = router.query
  const { handleSetPatient }: any = usePatient()
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

  const [questions, setQuestions] = React.useState<QuizModel[]>([
    {
      id: 1,
      question: 'Which of the following is not a networking protocol?',
      options: [
        { id: 1, label: 'ICP' },
        { id: 2, label: 'DCP' },
        { id: 3, label: 'BCP' },
        { id: 4, label: 'CCP' },
      ],
      answer: 3,
    },
  ])

  const handleAddQuestion = () => {
    const newQuestion: QuizModel = {
      id: Date.now(),
      question: '',
      options: [{ id: 1, label: 'Opsi ke-1' }],
      answer: null,
    }
    setQuestions([...questions, newQuestion])
  }

  const handleDeleteQuestion = (questionId: number) => {
    setQuestions(questions.filter((q) => q.id !== questionId))
  }

  const handleQuestionChange = (questionId: number, text: string) => {
    setQuestions(
      questions.map((q) => (q.id === questionId ? { ...q, question: text } : q))
    )
  }

  const handleAddOption = (questionId: number) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: [
                ...q.options,
                { id: Date.now(), label: `Opsi ke-${q.options.length + 1}` },
              ],
            }
          : q
      )
    )
  }

  const handleDeleteOption = (questionId: number, optionId: number) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? { ...q, options: q.options.filter((opt) => opt.id !== optionId) }
          : q
      )
    )
  }

  const handleOptionChange = (
    questionId: number,
    optionId: number,
    text: string
  ) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.map((opt) =>
                opt.id === optionId ? { ...opt, label: text } : opt
              ),
            }
          : q
      )
    )
  }

  const handleCorrectAnswerChange = (questionId: number, optionId: number) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId ? { ...q, correctAnswer: optionId } : q
      )
    )
  }

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
      <StickyHeader onSave={() => console.log('Save Quiz')} />

      {questions.map((q) => (
        <QuestionCard
          key={q.id}
          question={q.question}
          options={q.options}
          correctAnswer={q.answer}
          onQuestionChange={(text) => handleQuestionChange(q.id, text)}
          onOptionChange={(optionId, text) =>
            handleOptionChange(q.id, optionId, text)
          }
          onCorrectAnswerChange={(optionId) =>
            handleCorrectAnswerChange(q.id, optionId)
          }
          onAddOption={() => handleAddOption(q.id)}
          onDeleteOption={(optionId) => handleDeleteOption(q.id, optionId)}
          onDeleteQuestion={() => handleDeleteQuestion(q.id)}
        />
      ))}

      <AddQuestionButton onAddQuestion={handleAddQuestion} />
    </Box>
  )
}

EditKuisTopik.getLayout = function getLayout(page: any) {
  return <MainLayout title={'Edit Kuis Topik '}>{page}</MainLayout>
}
