import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const useDoctors = (query: string = '', isMagang: boolean = false) => {
  const destination = isMagang ? '/api/doctorMagang' : '/api/doctorList'

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

export const usePersonalDoctors = (id: string, query: string = '') => {
  const destination = `/api/${id}/personalDoctor/list`

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
