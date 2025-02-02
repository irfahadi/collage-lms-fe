import { Stack } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import invisalignImg from '@assets/images/invisalign.png'
import ccImg from '@assets/images/cc.png'
import webchImg from '@assets/images/webch.png'

type Props = {
  invisalign: string
  cc: string
  webch: string
  position?: 'left' | 'right' | 'center'
  orientation?: 'vertical' | 'horizontal'
}

export default function PatientExternalLink({
  invisalign,
  cc,
  webch,
  position = 'center',
  orientation = 'horizontal',
}: Props) {
  return (
    <Stack
      direction={orientation === 'horizontal' ? 'row' : 'column'}
      spacing={0.5}
      alignItems="center"
      justifyContent={position}
    >
      <Link
        aria-disabled={invisalign ? false : true}
        onClick={(e) => {
          invisalign ? e.stopPropagation() : e.preventDefault()
        }}
        href={invisalign || '#'}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          width={30}
          height={30}
          objectFit="contain"
          style={{
            opacity: invisalign ? 1 : 0.5,
            cursor: invisalign ? 'pointer' : 'not-allowed',
          }}
          src={invisalignImg}
          alt="Invisalign"
        />
      </Link>
      <Link
        aria-disabled={cc ? false : true}
        onClick={(e) => {
          cc ? e.stopPropagation() : e.preventDefault()
        }}
        href={cc || '#'}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          width={30}
          height={30}
          objectFit="contain"
          style={{
            opacity: cc ? 1 : 0.5,
            cursor: cc ? 'pointer' : 'not-allowed',
          }}
          src={ccImg}
          alt="cc"
        />
      </Link>
      <Link
        aria-disabled={webch ? false : true}
        onClick={(e) => {
          webch ? e.stopPropagation() : e.preventDefault()
        }}
        href={webch || '#'}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          objectFit="contain"
          style={{
            opacity: webch ? 1 : 0.5,
            cursor: webch ? 'pointer' : 'not-allowed',
          }}
          src={webchImg}
          alt="webch"
        />
      </Link>
    </Stack>
  )
}
