import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const useAditionalReason = (query: string = '') => {
  const destination = '/api/additionalSetReasonList'

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
