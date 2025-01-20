import { Box, Input, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

type UploadCaseroomProps = {
  onSelectFile: any
  image: any
  title: string
  description: string
  width?: number
  height?: number
  onClick: () => void
}

const UploadCaseroom = React.forwardRef(
  (
    {
      onSelectFile,
      image,
      title,
      description,
      width,
      height,
      onClick = () => {},
    }: UploadCaseroomProps,
    ref: any
  ) => {
    const [dragActive, setDragActive] = React.useState(false)
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
        onSelectFile(e.dataTransfer.files[0])
      }
    }
    return (
      <Box
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onClick}
        sx={{
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <Input
          inputProps={{ accept: 'image/*', ref: ref }}
          onChange={onSelectFile}
          type="file"
          style={{ display: 'none' }}
        />
        {image ? (
          <Image
            alt={description}
            src={image}
            height={height}
            width={width}
            style={{ objectFit: 'contain' }}
          />
        ) : null}
        <Box>
          <Typography variant="h5">{title.toUpperCase()}</Typography>
          <Typography variant="h5">{description.toUpperCase()}</Typography>
        </Box>
      </Box>
    )
  }
)

export default UploadCaseroom
