import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const useJournalSummary = (query: string = '') => {
  const destination = '/api/daily-journal/today/summary'

  const { data, error } = useSWR(
    [destination, query],
    (url: string, query: string) => fetcher(url, query),
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Never retry on 404.
        if (error.status === 404) return

        // Only retry up to 10 times.
        if (retryCount > 3) return

        // Retry after 5 seconds.
        setTimeout(() => revalidate({ retryCount }), 5000)
      },
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

export const useJournalSummaryById = (
  id: string | number,
  query: string = ''
) => {
  const destination = id ? `/api/daily-journal/detail/${id}/summary` : null

  const { data, error } = useSWR(
    [destination, query],
    (url: string, query: string) => fetcher(url, query),
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Never retry on 404.
        if (error.status === 404) return

        // Only retry up to 10 times.
        if (retryCount > 3) return

        // Retry after 5 seconds.
        setTimeout(() => revalidate({ retryCount }), 5000)
      },
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
