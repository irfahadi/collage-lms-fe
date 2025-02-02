import FilePresentOutlined from '@mui/icons-material/FilePresentOutlined'
import { Box, FormHelperText, Input, Stack, Typography } from '@mui/material'
import React from 'react'
type InputFileProps = {
  placeholder?: string
  onChange: (file: any) => void
  error?: string
}

export default function InputMultiFile({
  placeholder = 'Upload a Related File',
  onChange,
  error,
}: InputFileProps) {
  const fileRef = React.useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0 && files[0] instanceof Blob) {
      onChange(files[0])
    }
  }

  return (
    <Box>
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
        <FilePresentOutlined style={{ color: error ? '#d32f2f' : 'inherit' }} />
        <Typography variant="body1" color={error ? '#d32f2f' : 'black'}>
          {placeholder}
        </Typography>
      </Stack>
      <Input
        // inputRef={fileRef}
        inputProps={{ ref: fileRef }}
        onChange={handleFileChange}
        type="file"
        style={{ display: 'none' }}
      />
      {error && <FormHelperText error>{error}</FormHelperText>}
    </Box>
  )
}
