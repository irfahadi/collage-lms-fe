import MainLayout from '@components/layout/main'
import { Box, Button, Grid, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { usePatient } from '@store/patient'
import BackButton from '@components/atoms/back-button'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import TopicCard from '@components/molecules/topic-card'

export default function ManageTopik() {
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

  // Data topik
  const [topics, setTopics] = React.useState<TopicModel[]>([
    {
      id: 1,
      title: 'Topik 1',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed quisque nunc aliquam vel.',
    },
    {
      id: 2,
      title: 'Topik 2',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed quisque nunc aliquam vel.',
    },
    {
      id: 3,
      title: 'Topik 3',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed quisque nunc aliquam vel.',
    },
  ])

  // Fungsi untuk menangani perubahan urutan setelah drag
  const handleDragEnd = (result: any) => {
    if (!result.destination) return // Jika elemen tidak dipindahkan
    const router = useRouter()
    const items = Array.from(topics)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setTopics(items) // Perbarui urutan topik
  }

  const handleEdit = (id: number) => {
    console.log(`Edit topic ${id}`)
  }

  const handleDelete = (id: number) => {
    console.log(`Delete topic ${id}`)
  }

  return (
    <Box sx={{ width: '100%' }}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <BackButton />
        <Button
          variant="outlined"
          onClick={() => router.push('topik/tambah')}
          sx={{ textTransform: 'none' }}
        >
          Tambah Topik
        </Button>
      </Box>

      {/* Drag and Drop Context */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="topics">
          {(provided) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              {topics.map((topic, index) => (
                <Draggable
                  key={topic.id}
                  draggableId={String(topic.id)}
                  index={index}
                >
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TopicCard
                        title={topic.title}
                        description={topic.description}
                        onQuiz={() => router.push('topik/kuis')}
                        onEdit={() => handleEdit(topic.id)}
                        onDelete={() => handleDelete(topic.id)}
                      />
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  )
}

ManageTopik.getLayout = function getLayout(page: any) {
  return <MainLayout title={'Manage Topik Kelas '}>{page}</MainLayout>
}
