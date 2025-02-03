import {
  Autocomplete,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'
import React from 'react'
import Title from '../title'
import { MaButton } from '@components/atoms'
import { students } from '@utils/dummy'

type ModalAddStudentsProps = {
  open: boolean
  handleClose: () => void
  onSave: () => void
}

export default function ModalAddStudents({
  open,
  handleClose,
  onSave,
}: ModalAddStudentsProps) {
  return (
    <Dialog fullWidth maxWidth={'xs'} open={open} onClose={handleClose}>
      <DialogTitle>
        <Title title="Tambah Mahasiswa" />
      </DialogTitle>
      <DialogContent>
        <Box py={2}>
          <Autocomplete
            multiple
            id="tags-outlined"
            options={students}
            getOptionLabel={(option) =>
              option.first_name + ' ' + option.last_name
            }
            defaultValue={[]}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Input Nama Mahasiswa"
                // placeholder="Input Nama Mahasiswa"
              />
            )}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ pb: 2, pr: 3 }}>
        <MaButton variant="secondary" onClick={handleClose}>
          Cancel
        </MaButton>
        <MaButton onClick={onSave}>Save</MaButton>
      </DialogActions>
    </Dialog>
  )
}
