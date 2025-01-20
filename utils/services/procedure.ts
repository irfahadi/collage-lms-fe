import { axiosPrivate } from '@utils/axios-private'

export const getProcedureList = () => {
  return axiosPrivate
    .get(`/api/daily-journal/procedure/list`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteProcedure = (id: string) => {
  return axiosPrivate
    .delete(`/api/daily-journal/procedure/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

//create a new procedure
export const createProcedure = (data: any) => {
  return axiosPrivate
    .post(`/api/daily-journal/procedure/maintenance/add`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

//edit a procedure
export const editProcedure = (id: string | number, data: any) => {
  return axiosPrivate
    .put(`/api/daily-journal/procedure/maintenance/edit/${id}`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const editGeneralMaintenance = (id: string | number, data: any) => {
  return axiosPrivate
    .put(`/api/daily-journal/general/maintenance/edit/${id}`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

// delete a procedure
export const deleteProcedureMaintenance = (id: string | number) => {
  return axiosPrivate
    .delete(`/api/daily-journal/procedure/maintenance/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteGeneralProcedureMaintenance = (id: string | number) => {
  return axiosPrivate
    .delete(`/api/daily-journal/general/maintenance/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
