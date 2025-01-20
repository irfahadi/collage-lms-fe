import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { useTranslation } from 'react-i18next'

interface SearchInputProps {
  bordered?: boolean
  width?: number
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f5f5f5',
  color: 'black',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  cursor: 'pointer',
  color: '#2B5692',
  right: 4,
  top: 8,
  zIndex: 10,
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0.1)})`,
    paddingRight: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const StyledInputBaseBordered = styled(InputBase)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    paddingLeft: `calc(1em + ${theme.spacing(0.2)})`,
    width: '100%',
  },
  paddingRight: `calc(1em + ${theme.spacing(0.2)})`,
  border: 'solid 1px #2B5692',
}))

export default function SearchInput(props: SearchInputProps) {
  const { t } = useTranslation()
  const ref = React.useRef<any>(null)

  if (props.bordered) {
    return (
      <StyledInputBaseBordered
        style={{ width: props.width }}
        placeholder={`${t('search')}…`}
        endAdornment={<SearchIcon />}
        value={props?.value}
        onChange={props?.onChange}
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            props?.onSubmit && props?.onSubmit(e)
          }
        }}
      />
    )
  }

  return (
    <Search>
      <SearchIconWrapper
        onClick={(e: any) => props?.onSubmit && props?.onSubmit(e)}
      >
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        ref={ref}
        placeholder={`${t('search')}…`}
        inputProps={{ 'aria-label': 'search' }}
        value={props?.value}
        onChange={props?.onChange}
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            props?.onSubmit && props?.onSubmit(e)
          }
        }}
      />
    </Search>
  )
}
