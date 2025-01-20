import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { DropzoneArea } from 'material-ui-dropzone'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'

type MaDropZoneAreaProps = {
  onChange: (files: File[]) => void
  showPreviews?: boolean
  placeholder?: string
  filesLimit?: number
  isChipsForPreview?: boolean
  keynya?: number
}

const useStyles = makeStyles((theme) =>
  createStyles({
    previewChip: {
      minHeight: 'auto',
    },
  })
)

const theme = createTheme()

export default function MaDropZoneArea({
  onChange,
  showPreviews = false,
  placeholder = 'Drop files here or click to upload',
  filesLimit = 1,
  isChipsForPreview = true,
  keynya = 1,
}: MaDropZoneAreaProps) {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <DropzoneArea
        key={keynya || 1}
        dropzoneText={placeholder}
        showPreviews={showPreviews}
        showPreviewsInDropzone={false}
        filesLimit={filesLimit}
        maxFileSize={5000000000}
        useChipsForPreview={isChipsForPreview}
        onChange={onChange}
        showAlerts={false}
        classes={{ root: classes.previewChip }}
        previewText={t('selected_files')}
      />
    </ThemeProvider>
  )
}
