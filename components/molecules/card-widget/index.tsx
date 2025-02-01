import React from 'react'
import { Box, Typography, IconButton, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

interface CardWidgetProps {
  title: string
  items: string[]
  onEdit?: (index: number) => void
  onDelete?: (index: number) => void
  onActionButton?: () => void
  actionButtonText?: string
}

const CardWidget: React.FC<CardWidgetProps> = ({
  title,
  items,
  onEdit,
  onDelete,
  onActionButton,
  actionButtonText,
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
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          onClick={onActionButton}
          sx={{ textTransform: 'none' }}
        >
          {actionButtonText}
        </Button>
      </Box>

      {/* Daftar Topik */}
      <Box
        sx={{
          mt: 2,
          maxHeight: isScrollable ? 150 : 'auto',
          overflowY: isScrollable ? 'auto' : 'visible',
          border: isScrollable ? '1px solid #E0E0E0' : 'none',
          borderRadius: 2,
        }}
      >
        {items.map((topic, index) => (
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
            <Typography variant="body2">{topic}</Typography>
            <Box>
              {onEdit && (
                <IconButton size="small" onClick={() => onEdit(index)}>
                  <EditIcon fontSize="small" />
                </IconButton>
              )}
              {onDelete && (
                <IconButton size="small" onClick={() => onDelete(index)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default CardWidget
