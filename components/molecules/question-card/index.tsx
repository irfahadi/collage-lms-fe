import React from 'react'
import {
  Box,
  TextField,
  IconButton,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

interface Option {
  id: number
  label: string
}

interface QuestionCardProps {
  question: string
  options: Option[]
  correctAnswer: number | null
  onQuestionChange: (text: string) => void
  onOptionChange: (optionId: number, text: string) => void
  onCorrectAnswerChange: (optionId: number) => void
  onAddOption: () => void
  onDeleteOption: (optionId: number) => void
  onDeleteQuestion: () => void
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  correctAnswer,
  onQuestionChange,
  onOptionChange,
  onCorrectAnswerChange,
  onAddOption,
  onDeleteOption,
  onDeleteQuestion,
}) => {
  return (
    <Box
      sx={{
        mb: 3,
        p: 3,
        border: '1px solid #E0E0E0',
        borderRadius: 2,
        backgroundColor: '#FFF',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Pertanyaan */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <TextField
          fullWidth
          placeholder="Type your question here"
          variant="outlined"
          value={question}
          onChange={(e) => onQuestionChange(e.target.value)}
          sx={{ mb: 2 }}
        />
        <IconButton color="error" onClick={onDeleteQuestion}>
          <DeleteIcon />
        </IconButton>
      </Box>

      {/* Opsi Jawaban */}
      <RadioGroup
        value={correctAnswer || ''}
        onChange={(e) => onCorrectAnswerChange(parseInt(e.target.value))}
      >
        {options.map((option) => (
          <Box
            key={option.id}
            display="flex"
            alignItems="center"
            sx={{ mb: 1 }}
          >
            <FormControlLabel
              value={option.id}
              control={<Radio />}
              label={
                <TextField
                  fullWidth
                  variant="standard"
                  value={option.label}
                  onChange={(e) => onOptionChange(option.id, e.target.value)}
                />
              }
            />
            <IconButton
              color="error"
              onClick={() => onDeleteOption(option.id)}
              disabled={options.length === 1} // Minimal 1 opsi
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </RadioGroup>

      {/* Tombol Tambah Opsi */}
      <Button variant="text" onClick={onAddOption} startIcon={<AddIcon />}>
        Tambah Opsi
      </Button>
    </Box>
  )
}

export default QuestionCard
