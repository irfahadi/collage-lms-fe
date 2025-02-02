import React from 'react'
import { Box, Typography, Avatar } from '@mui/material'

interface LecturerInfoProps {
  lecturerName: string
  program: string
  faculty: string
  schedule: string
}

const LecturerInfo: React.FC<LecturerInfoProps> = ({
  lecturerName,
  program,
  faculty,
  schedule,
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
        backgroundColor: 'white',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Avatar and Lecturer Info */}
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar
          sx={{
            width: 64,
            height: 64,
            backgroundColor: '#E0E0E0',
          }}
        />
        <Box>
          <Typography variant="body1" fontWeight="bold">
            {lecturerName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {program}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {faculty}
          </Typography>
        </Box>
      </Box>

      {/* Schedule */}
      <Box>
        <Typography variant="body1" fontWeight="bold" textAlign="right">
          Jadwal Perkuliahan
        </Typography>
        <Typography variant="body2" textAlign="right" color="text.secondary">
          {schedule}
        </Typography>
      </Box>
    </Box>
  )
}

export default LecturerInfo
