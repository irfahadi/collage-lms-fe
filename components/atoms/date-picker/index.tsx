import { Stack, TextField, useMediaQuery } from '@mui/material'
import {
  DatePicker,
  DatePickerSlotsComponentsProps,
  DateValidationError,
  LocalizationProvider,
} from '@mui/x-date-pickers'
import EventIcon from '@mui/icons-material/Event'
import { t } from 'i18next'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import 'dayjs/locale/ja'
import React from 'react'

interface Props {
  value?: any
  onChange?: (value: any) => void
  disabled?: boolean
  label?: string | React.ReactNode
  fullWidth?: boolean
  onError?:
    | ((error: DateValidationError, value: dayjs.Dayjs | null) => void)
    | undefined
  onBlur?: () => void
  slotProps?: DatePickerSlotsComponentsProps<dayjs.Dayjs> | undefined
  minDate?: dayjs.Dayjs | undefined
  maxDate?: dayjs.Dayjs | undefined
  required?: boolean
  noLabel?: boolean
}

export default function MaDatePicker({
  value,
  onChange = () => {},
  onBlur = () => {},
  disabled = false,
  label = t('date'),
  fullWidth,
  onError,
  slotProps,
  minDate,
  maxDate,
  required = false,
  noLabel = false,
}: Props) {
  const isTabletView = useMediaQuery('(max-width: 1180px)')
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
      {isTabletView ? (
        <Stack
          direction="row"
          alignItems="center"
          sx={{ position: 'relative' }}
        >
          <DesktopDatePicker
            label={label}
            disabled={disabled}
            sx={{ width: fullWidth ? '100%' : 'auto' }}
            value={value}
            onChange={onChange}
            onError={onError}
            onClose={onBlur}
            slotProps={{
              ...slotProps,
              textField: { required: required }, // Pass 'required' to the TextField slot
            }}
            minDate={minDate}
            maxDate={maxDate}
          />
          <EventIcon
            sx={{
              color: '#757575',
              position: 'absolute',
              zIndex: '-1',
              top: '27%',
              right: '10px',
            }}
          />
        </Stack>
      ) : (
        <DesktopDatePicker
          disabled={disabled}
          label={label}
          sx={{ width: fullWidth ? '100%' : 'auto' }}
          value={value}
          onChange={onChange}
          onError={onError}
          onClose={onBlur}
          slotProps={{
            ...slotProps,
            textField: { required: required }, // Pass 'required' to the TextField slot
          }}
          minDate={minDate}
          maxDate={maxDate}
        />
      )}
    </LocalizationProvider>
  )
}
