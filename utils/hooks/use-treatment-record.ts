import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const usePatientTreatmentRecord = (id: string, query: string = '') => {
  const destination = `/api/${id}/treatmentRecord/list`

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
