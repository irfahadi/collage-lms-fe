import { axiosPrivate } from '@utils/axios-private'

export const deleteConsentForm = (id: number) => {
  return axiosPrivate
    .delete(`/api/consentForm/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const generateConsentForm = (id: string) => {
  return axiosPrivate
    .get(`/api/${id}/moreInfo/consentForm/generate`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getConsentFormPdf = (token: string) => {
  return axiosPrivate
    .get(`/api/consentForm/pdf?token=${token}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const sendConsentToPatients = (token: string) => {
  return axiosPrivate
    .get(`/api/consentForm/sendToPatient?token=${token}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const submitGenerateConsent = (token: string, payload: any) => {
  return axiosPrivate
    .post(`/api/consentForm/pdf?token=${token}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
