import { axiosPrivate } from '@utils/axios-private'

export const createPatientMaintenanceFee = (id: string, payload: any) => {
  return axiosPrivate
    .post(`/api/${id}/moreInfo/deposit/maintenanceFee/add`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deletePatientMaintenanceFee = (
  id: string,
  idMaintenancePlan: number
) => {
  return axiosPrivate
    .delete(
      `/api/${id}/moreInfo/deposit/maintenanceFee/delete/${idMaintenancePlan}`
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getPatientMaintenanceFeeDetail = (
  id: string,
  id_maintenance: string
) => {
  return axiosPrivate
    .get(`/api/${id}/moreInfo/deposit/maintenanceFee/edit/${id_maintenance}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updatePatientMaintenanceFee = (id: string, payload: any) => {
  return axiosPrivate
    .put(
      `/api/${id}/moreInfo/deposit/maintenanceFee/edit/${payload?.id_maintenance}`,
      payload
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
