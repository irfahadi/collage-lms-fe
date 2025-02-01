import React from 'react'
import { Box, Typography } from '@mui/material'

interface StatsCardProps {
  icon: React.ReactNode
  title: string
  value: number
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        gap: '16px',
        height: '120px', // Tetapkan tinggi tetap
      }}
    >
      <Box>{icon}</Box>
      <Box>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="h4" fontWeight="bold">
          {value}
        </Typography>
      </Box>
    </Box>
  )
}

export default StatsCard
