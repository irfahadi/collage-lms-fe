import React from 'react'
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material'

interface QuestionCardStudentProps {
  question: string
  options: string[]
  onSelect: (answer: string) => void
}

const QuestionCardStudent: React.FC<QuestionCardStudentProps> = ({
  question,
  options,
  onSelect,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '24px',
        width: '100%',
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', marginBottom: '16px' }}
      >
        {question}
      </Typography>
      <RadioGroup onChange={(e) => onSelect(e.target.value)}>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio />}
            label={option}
            sx={{ marginBottom: '8px' }}
          />
        ))}
      </RadioGroup>
    </Box>
  )
}

export default QuestionCardStudent
