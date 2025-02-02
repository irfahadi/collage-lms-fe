import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'

interface TopicCardProps {
  title: string
  description: string
  onQuiz: () => void
  onEdit: () => void
  onDelete: () => void
}

const TopicCard: React.FC<TopicCardProps> = ({
  title,
  description,
  onQuiz,
  onEdit,
  onDelete,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        border: '1px solid #E0E0E0',
        borderRadius: 2,
        padding: 2,
        backgroundColor: '#FFF',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        mb: 2,
      }}
    >
      {/* Drag Handle */}
      <Box display="flex" alignItems="center" sx={{ mr: 2, cursor: 'grab' }}>
        {/* <DragIndicatorIcon /> */}
      </Box>

      {/* Topic Content */}
      <Box flex={1}>
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1, mb: 1 }}
        >
          {description}
        </Typography>
      </Box>

      {/* Actions */}
      <Box display="flex" gap={1}>
        <Button
          variant="outlined"
          size="small"
          sx={{ textTransform: 'none' }}
          onClick={onQuiz}
        >
          Quiz
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{ textTransform: 'none' }}
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{ textTransform: 'none' }}
          onClick={onDelete}
        >
          Hapus
        </Button>
      </Box>
    </Box>
  )
}

export default TopicCard
