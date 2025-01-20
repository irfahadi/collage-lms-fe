import { axiosPrivate } from '@utils/axios-private'

export const getFormContentById = (id: string) => {
  return axiosPrivate
    .get(`/api/request-form/templates/content/one/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getFormContentList = () => {
  return axiosPrivate
    .get(
      '/api/request-form/templates/content/list?page=1&per_page=10&search&sort=asc'
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createFormContent = (payload: any) => {
  return axiosPrivate
    .post('/api/request-form/templates/content/create', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrderFormContentList = (payload: any) => {
  return axiosPrivate
    .put('/api/request-form/templates/content/ordering', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateFormContent = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/request-form/templates/content/update/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteFormContent = (id: string) => {
  return axiosPrivate
    .delete(`/api/request-form/templates/content/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
