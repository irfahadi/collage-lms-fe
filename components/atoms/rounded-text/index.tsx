import styled from '@emotion/styled'

const RoundedText = styled('div')<RoundedTextProps>((props) => ({
  borderRadius: '4px',
  border: props.isBordered ? '1px solid #2273E2' : '',
  padding: '5px 10px',
  color: props.textColor,
  background: props.backgroundColor,
  display: 'inline-block',
  cursor: props.isButton ? 'pointer' : '',
  textAlign: 'center',
}))

interface RoundedTextProps {
  backgroundColor?: string
  isBordered?: boolean
  isButton?: boolean
  textColor?: string
  variant?:
    | 'Pending'
    | 'Visited'
    | 'In Treatment'
    | 'Waiting for Billing'
    | 'Discharged'
    | 'Cancelled'
  label?: string
  onClick?: () => void
}

const MaRoundedText = ({
  isButton = false,
  isBordered = false,
  backgroundColor = '#2273E2',
  textColor = '#FFFFFF',
  variant = 'Visited',
  label = '',
  onClick,
}: RoundedTextProps) => {
  switch (variant) {
    case 'Pending':
      return (
        <RoundedText
          isBordered={true}
          backgroundColor="#FFFFFF"
          textColor="#2273E2"
          onClick={onClick}
        >
          {label}
        </RoundedText>
      )
    case 'Visited':
      return (
        <RoundedText
          backgroundColor="#2273E2"
          textColor="#FFFFFF"
          onClick={onClick}
        >
          {label}
        </RoundedText>
      )
    case 'In Treatment':
      return (
        <RoundedText
          backgroundColor="#4CAF50"
          textColor="#FFFFFF"
          onClick={onClick}
        >
          {label}
        </RoundedText>
      )
    case 'Waiting for Billing':
      return (
        <RoundedText
          backgroundColor="#FB8C00"
          textColor="#FFFFFF"
          onClick={onClick}
        >
          {label}
        </RoundedText>
      )
    case 'Discharged':
      return (
        <RoundedText
          backgroundColor="#2B5692"
          textColor="#FFFFFF"
          onClick={onClick}
        >
          {label}
        </RoundedText>
      )
    case 'Cancelled':
      return (
        <RoundedText
          backgroundColor="#F44336"
          textColor="#FFFFFF"
          onClick={onClick}
        >
          {label}
        </RoundedText>
      )
    default:
      return (
        <RoundedText
          backgroundColor={backgroundColor}
          isBordered={isBordered}
          isButton={isButton}
          textColor={textColor}
          onClick={onClick}
        >
          {label}
        </RoundedText>
      )
  }
}

export default MaRoundedText
