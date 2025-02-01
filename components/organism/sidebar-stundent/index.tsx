import React from 'react'
import { Box, List, ListItem, ListItemText, Collapse } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

type MenuItem = {
  label: string
  onClick?: () => void // Fungsi untuk menangani klik item
  children?: MenuItem[]
}

type SidebarProps = {
  menuItems: MenuItem[]
}

export default function SidebarStudent({ menuItems }: SidebarProps) {
  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({})

  const toggleCollapse = (label: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  const renderMenuItems = (items: MenuItem[], level = 0) =>
    items.map((item, index) => (
      <React.Fragment key={index}>
        <ListItem
          button
          onClick={() => {
            if (item.children) {
              toggleCollapse(item.label)
            }
            if (item.onClick) {
              item.onClick()
            }
          }}
          sx={{ pl: level * 2 + 2 }} // Padding sesuai level menu
        >
          <ListItemText primary={item.label} />
          {item.children ? (
            openItems[item.label] ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )
          ) : null}
        </ListItem>
        {item.children && (
          <Collapse in={openItems[item.label]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding onClick={item.onClick}>
              {renderMenuItems(item.children, level + 1)}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ))

  return (
    <Box
      sx={{
        width: 240,
        backgroundColor: '#fff',
        height: '100vh',
        overflowY: 'auto',
        position: 'fixed', // Sticky sidebar
        top: 0,
        left: 0,
        padding: '1rem', // Padding di dalam sidebar
        boxShadow: '2px 0px 5px rgba(0,0,0,0.1)',
        zIndex: 1000, // Paling depan
      }}
    >
      <List>{renderMenuItems(menuItems)}</List>
    </Box>
  )
}
