import * as React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material'

export type TableProps = {
  columns: GridColDef[]
  rows: any[]
  isCheckboxSelection?: boolean
}

const useStyles = makeStyles({
  tableHead: {
    background: '#2B5692',
  },
})

export default function MaTable({
  columns,
  rows,
  isCheckboxSelection = false,
}: TableProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
          '.MuiDataGrid-columnHeaders': {
            background: '#2B5692',
            color: '#fff',
          },
          '.MuiDataGrid-columnHeaders svg': {
            fill: '#fff',
          },
          '.MuiDataGrid-columnHeaderCheckbox, .MuiDataGrid-cellCheckbox ': {
            display: isCheckboxSelection ? 'inherit' : 'none',
          },
        }}
        disableColumnMenu
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={isCheckboxSelection ? true : false}
        rowHeight={150}
      />
    </Box>
  )
}
