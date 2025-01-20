import React from 'react'
import soundFile from '@assets/images/related-file/sound.png'
import videoFile from '@assets/images/related-file/video.png'
import documentFile from '@assets/images/related-file/document.png'
import Image from 'next/image'
import PdfIcon from '@assets/icons/pdf.svg'
import { Box, Stack, Typography } from '@mui/material'

export default function FileThumbnail({
  fileUrl,
  fileName,
  isShowName = true,
}: {
  fileUrl: string
  fileName: string
  isShowName?: boolean
}) {
  function render({
    fileUrl,
    fileName,
  }: {
    fileUrl: string
    fileName: string
  }) {
    const fileType = getFileType(fileName)
    // console.log(fileType)
    switch (fileType) {
      case 'image':
        return (
          <img
            style={{
              cursor: 'pointer',
              objectFit: 'cover',
            }}
            width={100}
            src={fileUrl}
            alt="related-file"
          />
        )
      case 'video':
        return (
          <Image
            style={{
              cursor: 'pointer',
              objectFit: 'cover',
            }}
            width={78}
            height={110}
            src={videoFile}
            alt="related-file"
          />
        )
      case 'audio':
        return (
          <Image
            style={{
              cursor: 'pointer',
              objectFit: 'cover',
            }}
            width={78}
            height={110}
            src={soundFile}
            alt="related-file"
          />
        )
      case 'pdf':
        return (
          <Box
            style={{
              cursor: 'pointer',
              backgroundColor: '#fff',
            }}
          >
            <PdfIcon width={78} height={110} />
          </Box>
        )
      default:
        return (
          <Image
            style={{
              cursor: 'pointer',
              objectFit: 'cover',
            }}
            width={78}
            height={110}
            src={documentFile}
            alt="related-file"
          />
        )
    }
  }

  function getFileType(name: string): any {
    const extension = name?.split('.')?.pop()?.toLowerCase()

    switch (extension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return 'image'
      case 'mp4':
      case 'mov':
      case 'avi':
        return 'video'
      case 'mp3':
      case 'wav':
      case 'ogg':
      case 'm4a':
        return 'audio'
      case 'pdf':
        return 'pdf'
      default:
        return 'unknown'
    }
  }

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      sx={{ height: '100%' }}
    >
      <Box>{render({ fileName, fileUrl })}</Box>
      {isShowName && (
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          {fileName}
        </Typography>
      )}
    </Stack>
  )
}
