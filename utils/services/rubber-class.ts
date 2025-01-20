import { axiosPrivate } from '@utils/axios-private'

export const getDetailRubberClass = (id: string) => {
  return axiosPrivate
    .get(`/api/rubber-management/settings/rubber/class/one/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getAllRubberClass = () => {
  return axiosPrivate
    .get(
      '/api/rubber-management/settings/rubber/class/list?page=0&per_page=10&search&sort=asc'
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createRubberClass = (payload: any) => {
  return axiosPrivate
    .post('/api/rubber-management/settings/rubber/class/create', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrderRubberClass = (payload: any) => {
  return axiosPrivate
    .put('/api/rubber-management/settings/rubber/class/ordering', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateRubberClass = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/rubber-management/settings/rubber/class/update/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteRubberClass = (id: string) => {
  return axiosPrivate
    .delete(`/api/rubber-management/settings/rubber/class/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
