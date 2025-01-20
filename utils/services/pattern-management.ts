import { axiosPrivate } from '@utils/axios-private'

export const getPatternById = (id: string) => {
  return axiosPrivate
    .get(`/api/rubber-management/settings/pattern/one/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getPatternMaster = (query = '') => {
  return axiosPrivate
    .get(`/api/rubber-management/settings/pattern/list${query}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const storePattern = (payload: any) => {
  return axiosPrivate
    .post('/api/rubber-management/settings/pattern/create', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrderPattern = (payload: any) => {
  return axiosPrivate
    .put('/api/rubber-management/settings/pattern/ordering', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updatePattern = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/rubber-management/settings/pattern/update/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deletePattern = (id: string) => {
  return axiosPrivate
    .delete(`/api/rubber-management/settings/pattern/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
