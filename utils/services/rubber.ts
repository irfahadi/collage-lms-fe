import { axiosPrivate } from '@utils/axios-private'

export const getDetailRubber = (id: string) => {
  return axiosPrivate
    .get(`/api/rubber-management/settings/rubber/one/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getAllRubber = (query?: string) => {
  return axiosPrivate
    .get('/api/rubber-management/settings/rubber/list' + (query ? query : ''))
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createRubber = (payload: any) => {
  return axiosPrivate
    .post('/api/rubber-management/settings/rubber/create', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrderRubber = (payload: any) => {
  return axiosPrivate
    .put('/api/rubber-management/settings/rubber/ordering', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateRubber = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/rubber-management/settings/rubber/update/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteRubber = (id: string) => {
  return axiosPrivate
    .delete(`/api/rubber-management/settings/rubber/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
