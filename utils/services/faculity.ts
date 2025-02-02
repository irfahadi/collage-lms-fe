import { axiosPrivate } from '@utils/axios-private'

export const createFaculity = (data: any) => {
  return axiosPrivate
    .post(`/api/v1/faculty`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateFaculity = (id: string | number, data: any) => {
  return axiosPrivate
    .put(`/api/v1/faculty/${id}`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteFaculity = (id: string | number) => {
  return axiosPrivate
    .delete(`/api/v1/faculty/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
