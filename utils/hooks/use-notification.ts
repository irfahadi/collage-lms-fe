import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const useNotifications = (isLogin: boolean, query: string = '') => {
  const destination = '/api/notification'

  const { data, error } = useSWR(
    isLogin ? [destination, query] : null,
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
