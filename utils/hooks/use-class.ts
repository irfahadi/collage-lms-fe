import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const useClasses = (periodId: string, query: string = '') => {
  const destination = '/api/v1/class_by_period/' + periodId

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

export const usePatientDetails = (id: string | number, query: string = '') => {
  const destination = id ? `/api/${id}/editPatientInfo` : null

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
