import { axiosPrivate } from '@utils/axios-private'

export const getJournalReportList = (query?: string) => {
  return axiosPrivate
    .get(`/api/daily-journal/list-for-accountant${query}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getJournalReportDetail = (id: string) => {
  return axiosPrivate
    .get(`/api/daily-journal/detail/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateStatusJournalReport = (payload: any) => {
  return axiosPrivate
    .post(`/api/daily-journal/accountant/change-status`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
