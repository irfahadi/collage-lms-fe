import { Box, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
// import ReactQuill from 'react-quill'
import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'
const ReactQuill = dynamic(import('react-quill'), { ssr: false })

export default function RichTextBox({
  value = '',
  onChange = () => {},
  placeholder = '',
  label = '',
  sx = {},
  minRows = 2,
}: {
  value?: any
  onChange?: (val?: any) => void
  placeholder?: string
  label?: string
  sx?: any
  minRows?: number
}) {
  const { i18n } = useTranslation()
  const isTabletView = useMediaQuery('(max-width: 1180px)')
  return (
    <Box
      className="rich-text"
      sx={{
        '.ql-editor': {
          minHeight: minRows * 50,
          fontSize: isTabletView ? '14px !important' : '16px !important',
          fontFamily:
            i18n.language === 'en'
              ? 'SF Pro Display !important'
              : 'Hiramaru !important',
        },
      }}
    >
      <Typography variant="body1" mb={1}>
        {label}
      </Typography>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={{
          //   'link-tooltip': true,
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
            ['clean'],
          ],
        }}
        formats={[
          'bold',
          'italic',
          'underline',
          'strike',
          'list',
          'bullet',
          'link',
          'color',
        ]}
      />
    </Box>
  )
}
