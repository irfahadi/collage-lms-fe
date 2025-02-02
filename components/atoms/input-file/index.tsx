import { Box, FormHelperText, Input, Stack, Typography } from '@mui/material'
import React from 'react'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'
type InputFileProps = {
  placeholder?: string
  file: any
  onChange: (file: any) => void
  error?: string
}

export default function InputFile({
  placeholder = 'Upload a face photo. Max size 10MB',
  file,
  onChange,
  error,
}: InputFileProps) {
  const [dragActive, setDragActive] = React.useState(false)
  const fileRef = React.useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      onChange(files[0])
    }
  }

  // handle drag events
  const handleDrag = function (e: any) {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  // triggers when file is dropped
  const handleDrop = function (e: any) {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onChange(e.dataTransfer.files)
    }
  }

  return (
    <Box
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <Stack
        direction="row"
        spacing={1}
        onClick={() => {
          fileRef.current?.click()
        }}
        sx={{
          p: '12px',
          borderRadius: '4px',
          border: error ? '1px dashed #d32f2f' : '1px dashed #2B5692',
          cursor: 'pointer',
        }}
      >
        <ImageOutlinedIcon style={{ color: error ? '#d32f2f' : 'inherit' }} />
        <Typography
          variant="body1"
          color={error ? '#d32f2f' : !file ? '#2B5692' : 'black'}
        >
          {file ? file.name : placeholder}
        </Typography>
      </Stack>
      <Input
        // inputRef={fileRef}
        inputProps={{ accept: 'image/*', ref: fileRef }}
        onChange={handleFileChange}
        type="file"
        style={{ display: 'none' }}
      />
      {error && <FormHelperText error>{error}</FormHelperText>}
    </Box>
  )
}
