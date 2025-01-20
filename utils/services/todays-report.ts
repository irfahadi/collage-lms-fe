import { axiosPrivate } from '@utils/axios-private'

export const submitTodaysJournal = (payload: any) => {
  return axiosPrivate
    .post(`/api/daily-journal/today/submit`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reSubmitTodaysJournal = (payload: any) => {
  return axiosPrivate
    .post(`/api/daily-journal/today/re-submit`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
