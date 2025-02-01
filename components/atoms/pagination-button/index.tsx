import React from 'react'
import { Box, Button } from '@mui/material'

interface PaginationButtonsProps {
  total: number
  current: number
  onChange: (index: number) => void
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  total,
  current,
  onChange,
}) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '8px',
        backgroundColor: 'white',
        padding: '16px',
        borderRadius: '12px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {Array.from({ length: total }, (_, i) => (
        <Button
          key={i}
          variant={current === i + 1 ? 'contained' : 'outlined'}
          onClick={() => onChange(i + 1)}
          sx={{
            minWidth: '48px',
            height: '48px',
            fontWeight: 'bold',
            color: current === i + 1 ? 'white' : 'black',
            backgroundColor: current === i + 1 ? 'primary.main' : 'white',
            borderRadius: '8px',
          }}
        >
          {i + 1}
        </Button>
      ))}
    </Box>
  )
}

export default PaginationButtons
