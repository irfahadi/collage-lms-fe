import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const useRelationShip = (query: string = '') => {
  const destination = `/api/relationship`

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

export const usePatientsRelatedFamily = (id: string, query: string = '') => {
  const destination = `/api/${id}/relatedFamily/list`

  const { data, error } = useSWR(
    id ? [destination, query] : null,
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
