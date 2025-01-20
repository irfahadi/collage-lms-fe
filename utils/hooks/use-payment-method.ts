import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const usePaymentMethod = (query: string = '') => {
  const destination = '/api/payment-method-management/first-consult/list'

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

export const usePaymentMethodDeposit = (query: string = '') => {
  const destination = '/api/payment-method-management/deposit/list'

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
