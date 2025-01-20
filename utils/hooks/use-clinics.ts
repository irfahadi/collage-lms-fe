import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const useClinics = (query: string = '') => {
  const destination = '/api/clinicList'

  const { data, error } = useSWR(
    [destination, query],
    (url: string, query: string) => fetcher(url, query),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
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
