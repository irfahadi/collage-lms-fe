import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

interface CardInfoProps {
  title: string
  description: string
  tags?: string[]
  items?: string[] // Untuk daftar mahasiswa atau item lainnya
  onDelete?: (index: number) => void // Callback untuk ikon hapus
  image?: string
}

const CardInfo: React.FC<CardInfoProps> = ({
  title,
  description,
  tags,
  items = [],
  onDelete,
  image,
}) => {
  const isScrollable = items.length > 3 // Tentukan apakah daftar perlu scroll

  return (
    <Box
      sx={{
        border: '1px solid #E0E0E0',
        borderRadius: 2,
        padding: 2,
        backgroundColor: '#FFF',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {image && (
        <Box
          sx={{
            width: '100%',
            height: 220,
            backgroundColor: '#E4E4E4',
            borderRadius: 2,
            marginBottom: 2,
          }}
        />
      )}
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 1, lineHeight: 1.8 }}
      >
        {description}
      </Typography>
      {tags && (
        <Typography
          variant="caption"
          color="text.primary"
          sx={{ mt: 2, display: 'block' }}
        >
          {tags.join(', ')}
        </Typography>
      )}

      {/* Daftar Item */}
      {items.length > 0 && (
        <Box
          sx={{
            mt: 2,
            maxHeight: isScrollable ? 150 : 'auto',
            overflowY: isScrollable ? 'auto' : 'visible',
            border: isScrollable ? '1px solid #E0E0E0' : 'none',
            borderRadius: 2,
          }}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                padding: 1,
                borderBottom: '1px solid #E0E0E0',
                '&:last-child': { borderBottom: 'none' },
              }}
            >
              <Typography variant="body2">{item}</Typography>
              {onDelete && (
                <IconButton
                  size="small"
                  onClick={() => onDelete(index)}
                  aria-label={`delete-item-${index}`}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default CardInfo
