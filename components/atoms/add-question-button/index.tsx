import React from 'react'
import { Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

interface AddQuestionButtonProps {
  onAddQuestion: () => void
}

const AddQuestionButton: React.FC<AddQuestionButtonProps> = ({
  onAddQuestion,
}) => {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={onAddQuestion}
      >
        Tambah Pertanyaan
      </Button>
    </Box>
  )
}

export default AddQuestionButton
