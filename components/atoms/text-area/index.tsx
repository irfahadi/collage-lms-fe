// import TextareaAutosize from '@mui/base/TextareaAutosize'
import { TextareaAutosize } from '@mui/base'
import { Box, styled } from '@mui/system'

const StyledTextarea = styled(TextareaAutosize)(
  () => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid #d0d7de;
    color: #24292f;
    box-shadow: 0px 2px 2px #f6f8fa;
    width: 100% !important;

    &:hover {
      border-color: #3399FF;
    }
  
    &:focus {
      border-color: #3399FF;
      box-shadow: 0 0 0 3px #b6daff;
    }
  `
)

interface MaProps {
  value: string | undefined
  name: string | undefined
  onChange: (file: any) => void
  required?: boolean
  placeholder?: string
}

export default function MaTextArea({
  value,
  name,
  required = false,
  onChange,
  placeholder = 'Input text',
}: MaProps) {
  return (
    <Box pt={1} sx={{ width: '100%' }}>
      <StyledTextarea
        required={required}
        minRows={8}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </Box>
  )
}
