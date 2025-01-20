import { axiosPrivate } from '@utils/axios-private'

export const getPatientTreatmentRecord = (id: string, query?: string) => {
  return axiosPrivate
    .get(`/api/${id}/treatmentRecord/list${query}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createTreatmentRecord = (id: string, payload: any) => {
  return axiosPrivate({
    method: 'post',
    url: `/api/${id}/treatmentRecord/add`,
    data: payload,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getDetailTreatmentRecord = (
  id: string,
  idtreatment: string | number
) => {
  return axiosPrivate
    .get(`/api/${id}/treatmentRecord/edit/${idtreatment}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updatePatientTreatmentRecord = (
  id: string,
  id_treatment: string,
  payload: any
) => {
  return axiosPrivate({
    method: 'post',
    url: `/api/${id}/treatmentRecord/edit/${id_treatment}`,
    data: payload,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateTreatmentRelatedFile = (
  id: string,
  id_treatment: string,
  payload: any
) => {
  return axiosPrivate({
    method: 'post',
    url: `/api/${id}/treatmentRecord/${id_treatment}/relatedFile/upload`,
    data: payload,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteRelatedFile = (
  id: string,
  idtreatment: string,
  idfile: string
) => {
  return axiosPrivate
    .delete(
      `/api/${id}/treatmentRecord/delete/${idtreatment}/relatedFile/${idfile}`
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getPatientTreatmentRecordLog = (id: string, recordId: string) => {
  return axiosPrivate
    .get(`/api/log/${id}/TreatmentRecord/${recordId}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
