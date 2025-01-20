import { axiosPrivate } from '@utils/axios-private'

export const getStaffById = (id: string) => {
  return axiosPrivate
    .get(`/api/staffList/edit/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getAllStaffs = () => {
  return axiosPrivate
    .get('/api/staffList')
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createStaff = (payload: any) => {
  return axiosPrivate
    .post('/api/staffList/add', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrderStaffList = (payload: any) => {
  return axiosPrivate
  .put('/api/staffList', payload)
  .then((res) => Promise.resolve(res.data))
  .catch((err) => Promise.reject(err.response))
}

export const updateStaff = (id: string, payload: any) => {
  return axiosPrivate
  .put(`/api/staffList/edit/${id}`, payload)
  .then((res) => Promise.resolve(res.data))
  .catch((err) => Promise.reject(err.response))
}

export const deleteStaff = (id: string) => {
  return axiosPrivate
    .delete(`/api/staffList/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}