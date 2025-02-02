import { axiosPrivate } from '@utils/axios-private'

export const getWithdrawalList = (query?: string) => {
  return axiosPrivate
    .get(`/api/daily-journal/withdrawal/list` + query)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const storeWithdrawal = (data: any) => {
  return axiosPrivate
    .post(`/api/daily-journal/withdrawal/create`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateWithdrawal = (data: any) => {
  return axiosPrivate
    .put(`/api/daily-journal/withdrawal/update/${data?.id}`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteWithdrawal = (id: string) => {
  return axiosPrivate
    .delete(`/api/daily-journal/withdrawal/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
