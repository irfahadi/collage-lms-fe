import { axiosPrivate } from '@utils/axios-private'

export const deleteRequestForm = (id: string, idform: number) => {
  return axiosPrivate
    .delete(`/api/request-form/${id}/delete/${idform}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getRequestForm = (id: string, idform: number) => {
  return axiosPrivate
    .get(`/api/request-form/${id}/one/${idform}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createRequestForm = (id: string, payload: any) => {
  return axiosPrivate
    .post(`/api/request-form/${id}/create`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateRequestForm = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/request-form/${id}/update/${payload?.id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
