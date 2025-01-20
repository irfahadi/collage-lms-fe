import { axiosPrivate } from '@utils/axios-private'

export const getLabelById = (labelId: string) => {
  return axiosPrivate
    .get(`/api/label-management/label/one/${labelId}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getLabelList = () => {
  return axiosPrivate
    .get(
      `/api/label-management/label/list?page=0&per_page=1000&search&sort=asc`
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createLabel = (payload: any) => {
  return axiosPrivate
    .post('/api/label-management/label/create', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrderLabelList = (payload: any) => {
  return axiosPrivate
    .put('/api/label-management/label/ordering', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateLabel = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/label-management/label/update/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteLabel = (id: string) => {
  return axiosPrivate
    .delete(`/api/label-management/label/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
