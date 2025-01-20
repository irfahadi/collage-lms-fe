import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from '@mui/material'
import React, { useEffect } from 'react'
import Title from '../title'
import { t } from 'i18next'
import { MaButton } from '@components/atoms'
import Image from 'next/image'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import Close from '@mui/icons-material/Close'

type ModalPreviewImageProps = {
  open: boolean
  handleClose: () => void
  list?: Array<any>
  current?: number
}

export default function ModalPreviewImage({
  open,
  handleClose,
  list = [],
  current = 0,
}: ModalPreviewImageProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(current)

  const handleNext = () => {
    if (currentImageIndex < list.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }
  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  useEffect(() => {
    setCurrentImageIndex(current)
  }, [current])

  const currentimage = list[currentImageIndex]
  // console.log('currentimage', currentimage)

  return (
    <Dialog fullWidth maxWidth={'md'} open={open} onClose={handleClose}>
      <DialogTitle>
        <Title
          title={`${t('caseroom_preview')} - ${
            currentimage?.file?.name || currentimage?.name
          } `}
          withAccent
          actionButtons={
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          }
        />
      </DialogTitle>
      <DialogContent>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              opacity: currentImageIndex === 0 ? 0.5 : 1,
              cursor: currentImageIndex === 0 ? 'not-allowed' : 'pointer',
            }}
          >
            <ArrowBackIosNewOutlinedIcon />
          </IconButton>
          <Box>
            <Image
              src={list[currentImageIndex]?.url}
              width={500}
              style={{ objectFit: 'contain' }}
              height={400}
              alt="image"
            />
          </Box>
          <IconButton
            onClick={handleNext}
            sx={{
              opacity: currentImageIndex === list.length - 1 ? 0.5 : 1,
              cursor:
                currentImageIndex === list.length - 1
                  ? 'not-allowed'
                  : 'pointer',
            }}
          >
            <ArrowForwardIosOutlinedIcon />
          </IconButton>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
