import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const useDashboard = (query: string = '', refreshInterval = 10000) => {
  const destination = '/api/dashboard'

  const { data, error } = useSWR(
    [destination, query],
    (url: string, query: string) => fetcher(url, query),
    { refreshInterval }
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

export const useDashboardSummary = (query: string = '') => {
  const destination = '/api/dashboard/summaryByStatusReservation'

  const { data, error } = useSWR(
    [destination, query],
    (url: string, query: string) => fetcher(url, query),
    { refreshInterval: 10000 }
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
