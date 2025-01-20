import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const useTreatmentPlanTemplate = (
  type: 'diagnoses' | 'methodTreatments' | 'importantPoints',
  query?: string
) => {
  const newtype =
    type === 'diagnoses'
      ? 'diagnose-problem'
      : type === 'methodTreatments'
      ? 'method-of-treatment'
      : 'important-point'
  const destination = `/api/treatment-plan/templates/${newtype}/list`

  const { data, error } = useSWR(
    [destination, query],
    (url: string, query: string) => fetcher(url, query)
  )

  const revalidate = () => {
    mutate([destination, query])
  }

  return {
    data: data?.data,
    isLoading: !data && !error,
    isError: error,
    url: destination,
    revalidate,
  }
}
