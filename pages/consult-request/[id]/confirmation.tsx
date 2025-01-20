import { MaButton } from '@components/atoms'
import { Title } from '@components/organism'
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function ConfirmationPage() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Confirmation</title>
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
          <CardContent sx={{ width: '30rem' }}>
            <Title title="Consult Request" />
            <Stack direction="column" mt={2} spacing={2}>
              <Box>
                <Grid container spacing={2}>
                  <Grid item sm={6}>
                    <Typography variant="subtitle1">Clinic</Typography>
                  </Grid>
                  <Grid item sm={6}>
                    <Typography variant="subtitle1">名駅MA矯正歯科</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item sm={6}>
                    <Typography variant="subtitle1">Payment Method</Typography>
                  </Grid>
                  <Grid item sm={6}>
                    <Typography variant="subtitle1">Credit Card</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box my={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1">Description</Typography>
                </Stack>
                <Typography variant="body2">
                  プロフェッショナルな歯のホワイトニング治療で、より明るい笑顔を手に入れましょう。当院では、歯の表面の汚れを落とす安全かつ効果的なホワイトニング技術を使用します。あなたの具体的なニーズと目標に合わせて、最適なホワイトニング方法をご提案します。
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ borderBottom: '1px solid #E0E0E0' }}
                >
                  ITEM
                </Typography>
                <Stack my={1} direction="row" justifyContent="space-between">
                  <Box>
                    <Typography variant="body1">インプラント</Typography>
                    <Typography variant="caption" color="#9E9E9E">
                      1 x 500円
                    </Typography>
                  </Box>
                  <Typography variant="body1">500円</Typography>
                </Stack>
                <Stack my={1} direction="row" justifyContent="space-between">
                  <Box>
                    <Typography variant="body1">Tax</Typography>
                  </Box>
                  <Typography variant="body1">5円</Typography>
                </Stack>
                <Stack
                  sx={{ borderTop: '1px solid #E0E0E0' }}
                  pt={1}
                  direction="row"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography variant="body1">Total due</Typography>
                  </Box>
                  <Typography variant="body1">505円</Typography>
                </Stack>
              </Box>
              <Box>
                <FormGroup sx={{ mb: 1 }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <Typography variant="body1">
                        I confirm that the information provided is correct and
                        agree to the Handling of{' '}
                        <Link href={'/privacy-policy'}>
                          Personal Information
                        </Link>
                      </Typography>
                    }
                  />
                </FormGroup>
                <MaButton
                  onClick={() => {
                    router.push('/payment-status/process')
                  }}
                  fullWidth
                >
                  Confirm & Request
                </MaButton>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}
