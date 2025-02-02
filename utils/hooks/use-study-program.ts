import useSWR, { mutate } from 'swr'

import { fetcher } from '@libs/fetch'

export const useStudyPrograms = (query: string = '') => {
  const destination = '/api/v1/study_program'

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

export const useStudyProgramDetail = (
  id: string | number,
  query: string = ''
) => {
  const destination = id ? `/api/v1/study_program/${id}` : null

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
