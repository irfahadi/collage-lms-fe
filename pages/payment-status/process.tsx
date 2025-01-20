import { Box, Card, CardContent, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function PaymentStatusProses() {
  return (
    <>
      <Head>
        <title>Payment Status</title>
      </Head>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                width: '48px',
                height: '48px',
                backgroundColor: '#EAEEF4',
                mx: 'auto',
              }}
            ></Box>
            <Typography variant="h6" color="#2B5692" mb={3}>
              Purchase request
            </Typography>
            <Typography variant="body1">
              You will be automatically redirected to payment website in 3
              seconds
            </Typography>
            <Typography variant="body1">
              If you are not redirected, please click{' '}
              <Link
                color="#2B5692"
                style={{
                  textDecoration: 'none',
                }}
                href="/payment"
              >
                Payment website
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}
