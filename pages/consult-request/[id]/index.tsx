import { AttachmentUpload, MaButton } from '@components/atoms'
import MainLayout from '@components/layout/main'
import { RichTextBox } from '@components/molecules'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import dayjs from 'dayjs'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'

const SectionCard = ({
  onClick,
  isSelected,
}: {
  onClick?: () => void
  isSelected: boolean
}) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        backgroundColor: isSelected ? '#B8C7DB' : 'white',
        '&:hover': {
          backgroundColor: '#B8C7DB',
        },
      }}
    >
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_20381_202584)">
              <path
                d="M14.7143 37.5722C12.6714 37.5722 11 39.2436 11 41.2865H37C37 39.2436 35.3286 37.5722 33.2857 37.5722H25.8571V33.8579H31.4286C33.4714 33.8579 35.1429 32.1865 35.1429 30.1436H20.2857C17.2029 30.1436 14.7143 27.655 14.7143 24.5722C14.7143 22.5479 15.81 20.7836 17.4257 19.8179C16.8871 19.0565 16.5714 18.1465 16.5714 17.1436C16.5714 16.7536 16.6457 16.3636 16.7386 15.9922C13.3771 17.385 11 20.7093 11 24.5722C11 29.6979 15.16 33.8579 20.2857 33.8579V37.5722H14.7143Z"
                fill="#616161"
              />
              <path
                d="M21.3256 12.5186C23.8328 12.5743 25.8571 14.6171 25.8571 17.1429C25.8571 18.5357 25.2442 19.7614 24.2785 20.6157L25.3742 23.6243L27.1199 22.9929L27.7514 24.7386L31.2428 23.4757L30.6114 21.73L32.3571 21.0986L27.2685 7.11429L25.5228 7.74571L24.8914 6L21.3999 7.26286L22.0314 9.00857L20.2856 9.65857L21.3256 12.5186Z"
                fill="#616161"
              />
              <path
                d="M21.2142 19.9308C22.7527 19.9308 23.9999 18.6836 23.9999 17.1451C23.9999 15.6066 22.7527 14.3594 21.2142 14.3594C19.6757 14.3594 18.4285 15.6066 18.4285 17.1451C18.4285 18.6836 19.6757 19.9308 21.2142 19.9308Z"
                fill="#616161"
              />
            </g>
            <rect
              x="1.5"
              y="1.5"
              width="45"
              height="45"
              stroke="#616161"
              strokeWidth="3"
            />
            <defs>
              <clipPath id="clip0_20381_202584">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Typography color="#212121" variant="h6">
            Consultation Menu
          </Typography>
        </Stack>
        <Typography variant="body2" color="#212121" mt={1}>
          Receive a thorough examination of your teeth and oral health. Our
          dentists will assess your teeth, gums, nerves, and soft tissues. Early
          detection of cavities, gum disease, and other oral issues is possible.
          We will provide personalized treatment recommendations based on your
          unique needs.
        </Typography>
      </CardContent>
      <CardActions>
        <Box ml={1}>
          <Typography color="#808080" variant="body2">
            Consultation Fee
          </Typography>
          <Typography fontWeight="bold" variant="subtitle1">
            200,000円
          </Typography>
        </Box>
      </CardActions>
    </Card>
  )
}

const menulist = [
  {
    title: 'Consultation Menu',
    description:
      'Receive a thorough examination of your teeth and oral health. Our dentists will assess your teeth, gums, nerves, and soft tissues. Early detection of cavities, gum disease, and other oral issues is possible. We will provide personalized treatment recommendations based on your unique needs.',
    price: '200,000円',
  },
  {
    title: 'Consultation Menu 2',
    description:
      'Receive a thorough examination of your teeth and oral health. Our dentists will assess your teeth, gums, nerves, and soft tissues. Early detection of cavities, gum disease, and other oral issues is possible. We will provide personalized treatment recommendations based on your unique needs.',
    price: '200,000円',
  },
  {
    title: 'Consultation Menu 3',
    description:
      'Receive a thorough examination of your teeth and oral health. Our dentists will assess your teeth, gums, nerves, and soft tissues. Early detection of cavities, gum disease, and other oral issues is possible. We will provide personalized treatment recommendations based on your unique needs.',
    price: '200,000円',
  },
]

export default function ConsultRequestPage() {
  const router = useRouter()
  const { id } = router.query
  const [selectedMenu, setSelectedMenu] = React.useState<any>(null)
  const formik = useFormik({
    initialValues: {
      introduce_chat: '',
      attachments: [],
    },
    onSubmit: (values) => {
      console.log(values)
      router.push('/consult-request/' + id + '/confirmation')
    },
  })
  return (
    <Box sx={{ px: 3, pt: 3, pb: 10 }}>
      <Grid container spacing={4}>
        {menulist.map((item, index) => (
          <Grid key={index} item md={4}>
            <SectionCard
              isSelected={selectedMenu?.title === item?.title}
              onClick={() => {
                setSelectedMenu(item)
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Stack spacing={2}>
            <Box>
              <Typography variant="subtitle1">Introduce Chat</Typography>
              <RichTextBox
                value={formik.values.introduce_chat}
                onChange={(value) => {
                  formik.setFieldValue('introduce_chat', value)
                }}
              />
            </Box>
            <AttachmentUpload
              onChange={(files) => {
                const datenow = dayjs(new Date()).format('YYYY-MM-DD')
                const newfilelist = files.map((file: any) => ({
                  file: file?.file || file,
                  id: file?.id || null,
                  name: file?.name,
                  path: `chat-attachment/${datenow}`,
                  url: file?.url,
                }))
                formik.setFieldValue('attachments', newfilelist)
              }}
              fileList={formik.values.attachments?.map((item: any) => ({
                file: item?.file,
                id: item?.id,
                name: item?.name,
                url: item?.url,
              }))}
            />
            <Box>
              <Stack direction="row" justifyContent="flex-end" spacing={2}>
                <MaButton
                  variant="secondary"
                  onClick={() => {
                    formik.resetForm()
                  }}
                >
                  Cancel
                </MaButton>
                <MaButton
                  onClick={() => {
                    formik.handleSubmit()
                  }}
                >
                  Submit
                </MaButton>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}

ConsultRequestPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout title="Dashboard">{page}</MainLayout>
}
