import { axiosPrivate } from '@utils/axios-private'

export const getDetailRubberSubClass = (id: string) => {
  return axiosPrivate
    .get(`/api/rubber-management/settings/rubber/subclass/one/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getAllRubberSubClass = (query?: string) => {
  return axiosPrivate
    .get(
      '/api/rubber-management/settings/rubber/subclass/list' +
        (query ? query : '')
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createRubberSubClass = (payload: any) => {
  return axiosPrivate
    .post('/api/rubber-management/settings/rubber/subclass/create', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrderRubberSubClass = (payload: any) => {
  return axiosPrivate
    .put('/api/rubber-management/settings/rubber/subclass/ordering', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateRubberSubClass = (id: string, payload: any) => {
  return axiosPrivate
    .put(
      `/api/rubber-management/settings/rubber/subclass/update/${id}`,
      payload
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteRubberSubClass = (id: string) => {
  return axiosPrivate
    .delete(`/api/rubber-management/settings/rubber/subclass/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
