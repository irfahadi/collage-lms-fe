import { axiosPrivate } from '@utils/axios-private'

export const getDoctorById = (id: string) => {
  return axiosPrivate
    .get(`/api/doctorList/edit/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getDoctorLists = () => {
  return axiosPrivate
    .get(`/api/doctorList`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getDoctorMagangLists = (search: string) => {
  return axiosPrivate
    .get(`/api/doctorListOnlyMagang?keyword=${search}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createDoctor = (payload: any) => {
  return axiosPrivate
    .post('/api/doctorList/add', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createDoctorMagang = (payload: any) => {
  return axiosPrivate
    .post('/api/doctorMagang/add', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrderDoctorList = (payload: any) => {
  return axiosPrivate
    .put('/api/doctorList', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateDoctor = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/doctorList/edit/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteDoctor = (id: string) => {
  return axiosPrivate
    .delete(`/api/doctorList/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
