import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useMediaQuery } from '@mui/material'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export function MaTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value == index && <Box sx={{ paddingY: 2 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}

export interface MaTabsProps {
  type?: 'color' | 'clean'
  list: Array<string>
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
  value: number | string
  id?: string
}

export function MaTabs({
  type = 'color',
  list,
  handleChange,
  value,
  id = '',
}: MaTabsProps) {
  const isTabletView = useMediaQuery('(max-width: 1180px)')

  return (
    <Box
      id={id}
      className="scroll-margin"
      sx={{
        borderBottom: type === 'color' ? 2 : 0,
        borderColor: type === 'color' ? '#2273E2' : 'none',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            display: 'none',
          },
        }}
        variant={isTabletView ? 'fullWidth' : 'standard'}
        sx={{
          '& .MuiButtonBase-root.MuiTab-root.Mui-selected': {
            color: type === 'color' ? 'white' : 'inherit',
          },
          '& .Mui-selected': {
            backgroundColor: type === 'color' ? '#2273E2' : 'white',
            color: type === 'color' ? 'white' : '#2273E2',
            fontWeight: 500,
            borderRadius: '4px 4px 0 0',
            border: type === 'clean' ? '1px solid #9E9E9E' : 'none',
            borderBottom: 'none',
          },
        }}
      >
        {list.map((item, index) => (
          <Tab
            sx={{
              borderBottom: type === 'color' ? 'none' : '1px solid black',
              fontSize: isTabletView ? '12px' : '0.875rem',
              padding: isTabletView ? 0 : 'auto',
            }}
            key={index}
            label={item}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
    </Box>
  )
}
