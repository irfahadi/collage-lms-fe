import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const useLabels = (query: string = '') => {
  const destination = '/api/label-management/label/list'

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

export const usePatientsLabel = (patientId: string, query: string = '') => {
  const destination = `/api/${patientId}/editLabel`

  const { data, error } = useSWR(
    patientId ? [destination, query] : null,
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
