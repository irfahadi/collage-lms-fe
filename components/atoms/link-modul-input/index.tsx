import React, { useState } from 'react'
import {
  Box,
  TextField,
  MenuItem,
  Button,
  IconButton,
  Grid,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'

interface LinkModule {
  link: string
  type: string
}

const LinkModuleInput: React.FC = () => {
  const [modules, setModules] = useState<LinkModule[]>([
    { link: '', type: 'Video' }, // Default input pertama
  ])

  // Fungsi untuk menambahkan modul baru
  const handleAddModule = () => {
    setModules([...modules, { link: '', type: 'Video' }])
  }

  // Fungsi untuk menangani perubahan nilai pada input
  const handleChange = (
    index: number,
    field: keyof LinkModule,
    value: string
  ) => {
    const updatedModules = [...modules]
    updatedModules[index][field] = value
    setModules(updatedModules)
  }

  // Fungsi untuk menghapus modul
  const handleRemoveModule = (index: number) => {
    const updatedModules = modules.filter((_, i) => i !== index)
    setModules(updatedModules)
  }

  return (
    <Box>
      {/* Daftar Input Modul */}
      {modules.map((module, index) => (
        <Grid
          container
          spacing={2}
          alignItems="center"
          key={index}
          sx={{ mb: 2 }}
        >
          {/* Input Link */}
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              label="Link Modul"
              value={module.link}
              onChange={(e) => handleChange(index, 'link', e.target.value)}
              variant="outlined"
              placeholder="Masukkan link"
            />
          </Grid>

          {/* Select Tipe Link */}
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              select
              label="Tipe Link"
              value={module.type}
              onChange={(e) => handleChange(index, 'type', e.target.value)}
              variant="outlined"
            >
              <MenuItem value="Video">Video</MenuItem>
              <MenuItem value="URL">URL</MenuItem>
            </TextField>
          </Grid>

          {/* Tombol Hapus */}
          {modules.length > 1 && (
            <Grid item xs={12} md={1}>
              <IconButton
                color="error"
                onClick={() => handleRemoveModule(index)}
                sx={{ width: '100%' }}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>
      ))}

      {/* Tombol Tambah Modul */}
      <Box display="flex" justifyContent="flex-end" pr="15%">
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleAddModule}
          sx={{ textTransform: 'none' }}
        >
          Tambah Modul
        </Button>
      </Box>
    </Box>
  )
}

export default LinkModuleInput
