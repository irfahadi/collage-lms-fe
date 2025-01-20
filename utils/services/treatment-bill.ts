import { axiosPrivate } from '@utils/axios-private'

export const createGeneralBill = (payload: any) => {
  return axiosPrivate
    .post(`/api/daily-journal/general/billing`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getTreatmentBill = (id: string) => {
  return axiosPrivate
    .get(`/api/treatmentRecord/billings/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getLastIssuedBilling = (id: string) => {
  return axiosPrivate
    .get(`/api/lastIssuedBillings/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const storeTreatmentBill = (payload: any) => {
  return axiosPrivate
    .post(`/api/treatmentRecord/billings`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const billIssued = (payload: any) => {
  return axiosPrivate
    .post(`/api/issuedBillings`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const multipleBillIssued = async (payload: any) => {
  return axiosPrivate
    .post('/api/issuedBillings/multiple', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getBillingByDate = (id: string | number, date: string) => {
  return axiosPrivate
    .get(`/api/${id}/billings/${date}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const singleSendBillEmail = (
  patientid: number | string,
  query: string
) => {
  return axiosPrivate
    .get(`/api/billing/issue/send/one/${patientid}${query}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const multipleSendBillEmail = async (
  patientid: number | string,
  query: string
) => {
  return axiosPrivate
    .get(`/api/billing/issue/send/multiple/${patientid}?${query}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
