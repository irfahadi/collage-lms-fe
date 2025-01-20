import React from 'react'
import { useTranslation } from 'react-i18next'

type LinkedGenieProps = {
  isFirst?: boolean
}

export default function LinkedGenie({ isFirst = false }: LinkedGenieProps) {
  const { t } = useTranslation()
  return (
    <>
      <span style={{ color: 'red' }}>*</span>{' '}
      <span style={{ color: '#F57C00' }}>
        {isFirst ? t('linked_genie_first') : t('linked_genie')}
      </span>
    </>
  )
}
