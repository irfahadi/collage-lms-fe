import { axiosPrivate } from '@utils/axios-private'

export const getPatientFirstConsult = (id: string) => {
  return axiosPrivate
    .get(`/api/${id}/firstConsultInfo`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateFirstConsult = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/${id}/firstConsultInfo`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getFirstConsultLog = (id: string) => {
  return axiosPrivate
    .get(`/api/log/${id}/FirstCons`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}