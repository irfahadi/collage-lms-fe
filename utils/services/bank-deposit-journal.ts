import { axiosPrivate } from '@utils/axios-private'

export const getBankDepositList = (query?: string) => {
  return axiosPrivate
    .get(`/api/daily-journal/bank-deposit/list` + query)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const storeBankDeposit = (data: any) => {
  return axiosPrivate
    .post(`/api/daily-journal/bank-deposit/create`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateBankDeposit = (data: any) => {
  return axiosPrivate
    .put(`/api/daily-journal/bank-deposit/update/${data?.id}`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteBankDeposit = (id: string) => {
  return axiosPrivate
    .delete(`/api/daily-journal/bank-deposit/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
