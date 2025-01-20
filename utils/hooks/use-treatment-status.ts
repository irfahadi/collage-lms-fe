import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const useTreatmentStatus = (query: string = '') => {
  const destination = `/api/treatment-status-management/treatment-status/list`

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

export const useTreatmentRecordDetail = (
  idpatient: string | number,
  idtreat: string | number,
  query?: string
) => {
  const destination = idpatient
    ? `/api/${idpatient}/treatmentRecord/edit/${idtreat}`
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
