import { Box, IconButton, Stack, Typography } from '@mui/material'
// import { DoorClosedIcon as CloseIcon, FileText, ImageIcon } from 'lucide-react'
import Image from 'next/image'

interface FileAttachmentPreviewProps {
  file: File
  onRemove: () => void
}

export function FileAttachmentPreview({
  file,
  onRemove,
}: FileAttachmentPreviewProps) {
  const isImage = file.type.startsWith('image/')
  const preview = isImage ? URL.createObjectURL(file) : null

  return (
    <Box
      sx={{
        position: 'relative',
        width: 200,
        height: 200,
        border: '1px solid #E0E0E0',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      {isImage ? (
        <Image
          src={preview || ''}
          alt={file.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      ) : (
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={1}
          height="100%"
          p={2}
        >
          xx
          <Typography variant="body2" textAlign="center" noWrap>
            {file.name}
          </Typography>
        </Stack>
      )}
      <IconButton
        size="small"
        onClick={onRemove}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      >
        x
      </IconButton>
    </Box>
  )
}
