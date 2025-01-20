import { axiosPrivate } from '@utils/axios-private'

export const createPatient = (payload: any) => {
  return axiosPrivate({
    method: 'post',
    url: '/api/addNewPatient',
    data: payload,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getPatientDetail = (id: string) => {
  return axiosPrivate
    .get(`/api/${id}/editPatientInfo`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updatePatient = (payload: any, id: any) => {
  return axiosPrivate({
    method: 'post',
    url: '/api/' + id + '/editPatientInfo',
    data: payload,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updatePatientEmail = (payload: any, id: any) => {
  return axiosPrivate({
    method: 'post',
    url: '/api/' + id + '/updateEmail',
    data: payload,
  })
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const putToArchive = (id: number) => {
  return axiosPrivate
    .put(`/api/${id}/addToArchive`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const editMemoPatient = (id: number, payload: any) => {
  return axiosPrivate
    .put(`/api/${id}/memo`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const restorePatient = (id: number) => {
  return axiosPrivate
    .put(`/api/${id}/restore`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const putPatientsLabels = (id: number, payload: any) => {
  return axiosPrivate
    .put(`/api/${id}/editLabel`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getPatientLabels = (id: string) => {
  return axiosPrivate
    .get(`/api/${id}/editLabel`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getBasicInfoLog = (id: string) => {
  return axiosPrivate
    .get(`/api/log/${id}/BasicInfo`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getPatientDepositLog = (id: string) => {
  return axiosPrivate
    .get(`/api/log/${id}/Deposit`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getPatientRequestFormLog = (id: string) => {
  return axiosPrivate
    .get(`/api/log/${id}/ReqForm`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
