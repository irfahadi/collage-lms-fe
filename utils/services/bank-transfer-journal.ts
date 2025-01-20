import { axiosPrivate } from '@utils/axios-private'

export const getBankTransferList = (query?: string) => {
  return axiosPrivate
    .get(`/api/daily-journal/bank-transfer/list` + query)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const storeBankTransfer = (data: any) => {
  return axiosPrivate
    .post(`/api/daily-journal/bank-transfer/create`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateBankTransfer = (data: any) => {
  return axiosPrivate
    .put(`/api/daily-journal/bank-transfer/update/${data?.id}`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteBankTransfer = (id: string) => {
  return axiosPrivate
    .delete(`/api/daily-journal/bank-transfer/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
