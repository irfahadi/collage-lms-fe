import { axiosPrivate } from '@utils/axios-private'

export const createPersonalDoctor = (payload: any) => {
  return axiosPrivate
    .post(`/api/${payload.patient_id}/personalDoctor/add`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getPersonalDoctor = (idPatient: any, idDoctor: string) => {
  return axiosPrivate
    .get(`/api/${idPatient}/personalDoctor/edit/${idDoctor}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updatePersonalDoctor = (idPatient: any, payload: any) => {
  return axiosPrivate
    .put(`/api/${idPatient}/personalDoctor/edit/${payload?.id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deletePersonalDoctor = (idPatient: string, idDoctor: number) => {
  return axiosPrivate
    .delete(`/api/${idPatient}/personalDoctor/delete/${idDoctor}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getPersonalDoctorLog = (id: string) => {
  return axiosPrivate
    .get(`/api/log/${id}/Doctor`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}