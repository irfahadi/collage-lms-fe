import React, { useEffect, useRef, useState } from 'react'
import { Box, Button } from '@mui/material'
import BackButton from '@components/atoms/back-button'

interface StickyHeaderProps {
  onSave: () => void
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ onSave }) => {
  const [isFixed, setIsFixed] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Ambil posisi scroll dari dokumen
      const scrollTop = window.scrollY

      // Jika posisi scroll lebih dari 0, header menjadi fixed
      if (scrollTop > 0) {
        setIsFixed(true)
      } else {
        setIsFixed(false) // Kembali ke relative jika scrollTop == 0
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      ref={headerRef}
      sx={{
        position: isFixed ? 'fixed' : 'relative', // Fixed jika scroll lebih dari 0
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#FFF',
        boxShadow: isFixed ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none', // Shadow hanya saat fixed
        p: 2,
      }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <BackButton />
      <Button variant="contained" onClick={onSave}>
        Save
      </Button>
    </Box>
  )
}

export default StickyHeader
