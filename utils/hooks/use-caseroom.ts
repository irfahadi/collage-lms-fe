import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const useCaseroomList = (id: string | number, query: string = '') => {
  const destination = id
    ? `/api/${id}/treatmentRecord/caseroom/perDateList`
    : null

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

export const useCaseroomTemplate = (query?: string) => {
  const destination = '/api/caserooms/templates'

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
