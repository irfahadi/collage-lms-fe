import {
  Box,
  IconButton,
  Input,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import React, { useRef } from 'react'
import MaButton from '../button'
import { useTranslation } from 'react-i18next'
import FilePresentOutlined from '@mui/icons-material/FilePresentOutlined'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'
import ModalPreviewImage from '@components/organism/modal-preview-image'

type InputFileProps = {
  placeholder?: string
  fileList: any
  onChange: (file: any) => void
  error?: string
}

export default function AttachmentUpload({
  placeholder = '',
  fileList,
  onChange,
  error = '',
}: InputFileProps) {
  const { t } = useTranslation()
  const fileRef = useRef<HTMLInputElement>(null)

  const [openModal, setOpenModal] = React.useState(false)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      onChange([...fileList, files[0]])
      if (fileRef?.current) {
        fileRef.current.value = ''
      }
    }
  }

  function shortenFileName(fileName: string) {
    const maxLength = 40
    if (fileName.length > maxLength) {
      const extensionIndex = fileName.lastIndexOf('.')
      const extension = fileName.slice(extensionIndex)
      const prefixLength = (maxLength - 3 - extension.length) / 2
      const prefix = fileName.slice(0, Math.ceil(prefixLength))
      const suffix = fileName.slice(-Math.floor(prefixLength))
      return `${prefix}...${suffix}`
    }
    return fileName
  }
  // console.log('fileList', fileList)
  return (
    <>
      <Box>
        <Typography variant="caption">
          {placeholder ? placeholder : t('upload_placeholder')}
        </Typography>
        <Stack spacing={1} alignItems="flex-start">
          <Box>
            <MaButton
              onClick={() => {
                fileRef.current?.click()
              }}
            >
              <FilePresentOutlined /> {t('attachment')}
            </MaButton>
          </Box>
          <Stack direction="row" spacing={2}>
            {fileList?.map((file: any, index: number) => (
              <Stack key={index} alignItems="center">
                <Tooltip sx={{ maxWidth: 100 }} title={file?.name} followCursor>
                  <img
                    style={{
                      cursor: 'pointer',
                      objectFit: 'contain',
                    }}
                    onClick={() => {
                      setCurrentImageIndex(index)
                      setOpenModal(true)
                    }}
                    key={index}
                    width={78}
                    height={78}
                    src={
                      file?.url
                        ? file?.url
                        : file?.file instanceof Blob // Ensure it's a valid File or Blob
                        ? URL.createObjectURL(file.file)
                        : '' // Fallback to empty string if invalid
                    }
                    alt={file?.name}
                  />
                </Tooltip>
                {/* <Typography>
                {file?.name?.length > 40
                  ? shortenFileName(file?.name)
                  : file?.name}
              </Typography> */}
                <IconButton
                  onClick={() => {
                    //reset file
                    if (fileRef.current) fileRef.current.value = ''
                    //remove file from list based on index
                    const newfilelist = fileList.filter(
                      (item: any, i: number) => i !== index
                    )
                    onChange(newfilelist)
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Input
          inputProps={{ accept: 'image/*', ref: fileRef }}
          type="file"
          sx={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </Box>
      <ModalPreviewImage
        open={openModal}
        handleClose={() => {
          setOpenModal(false)
          setCurrentImageIndex(0)
        }}
        list={fileList?.map((el: any) => ({
          ...el,
          url: el.url
            ? el.url
            : el?.file instanceof Blob // Ensure it's a valid File or Blob
            ? URL.createObjectURL(el.file)
            : '', // Fallback to empty string if invalid
        }))}
        current={currentImageIndex}
      />
    </>
  )
}
