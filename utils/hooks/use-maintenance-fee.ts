import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const usePatientMaintenanceFee = (id: string, query: string = '') => {
  const destination = `/api/${id}/moreInfo/deposit/maintenanceFee`

  const { data, error } = useSWR(
    id ? [destination, query] : null,
    (url: string, query: string) => fetcher(url, query),
    {
      //no cache
      revalidateOnFocus: false,
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
