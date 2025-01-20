import { axiosPrivate } from '@utils/axios-private'

export const getFeeManagement = () => {
  return axiosPrivate
    .get(
      '/api/treatment-plan/settings/list?page=0&per_page=1000&search&sort=asc'
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

// * Merchandise * //

export const getMerchandiseById = (id: string) => {
  return axiosPrivate
    .get(`/api/treatment-plan/settings/merchandise/one/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createMerchandise = (payload: any) => {
  return axiosPrivate
    .post('/api/treatment-plan/settings/merchandise/create', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateMerchandise = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/treatment-plan/settings/merchandise/update/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrderMerchandiseList = (payload: any) => {
  return axiosPrivate
    .put('/api/treatment-plan/settings/merchandise/ordering', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteMerchandise = (id: string) => {
  return axiosPrivate
    .delete(`/api/treatment-plan/settings/merchandise/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

// * Maintenance * //

export const getMaintenanceById = (id: string) => {
  return axiosPrivate
    .get(`/api/treatment-plan/settings/maintenance/one/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createMaintenance = (payload: any) => {
  return axiosPrivate
    .post('/api/treatment-plan/settings/maintenance/create', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateMaintenance = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/treatment-plan/settings/maintenance/update/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrderMaintenanceList = (payload: any) => {
  return axiosPrivate
    .put('/api/treatment-plan/settings/maintenance/ordering', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteMaintenance = (id: string) => {
  return axiosPrivate
    .delete(`/api/treatment-plan/settings/maintenance/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

// * Treatment * //

export const getTreatmentById = (id: string) => {
  return axiosPrivate
    .get(`/api/treatment-plan/settings/treatment/one/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createTreatment = (payload: any) => {
  return axiosPrivate
    .post('/api/treatment-plan/settings/treatment/create', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateTreatment = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/treatment-plan/settings/treatment/update/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrderTreatmentList = (payload: any) => {
  return axiosPrivate
    .put('/api/treatment-plan/settings/treatment/ordering', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteTreatment = (id: string) => {
  return axiosPrivate
    .delete(`/api/treatment-plan/settings/treatment/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
