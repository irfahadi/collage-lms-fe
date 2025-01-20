import { axiosPrivate } from '@utils/axios-private'

export const createPatientTreatmentFee = (id: string, payload: any) => {
  return axiosPrivate
    .post(`/api/${id}/moreInfo/deposit/treatmentFee/add`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deletePatientTreatmentFee = (
  id: string,
  idTreatmentPlan: number
) => {
  return axiosPrivate
    .delete(
      `/api/${id}/moreInfo/deposit/treatmentFee/delete/${idTreatmentPlan}`
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getPatientTreatmentFeeDetail = (
  id: string,
  id_treatment: string
) => {
  return axiosPrivate
    .get(`/api/${id}/moreInfo/deposit/treatmentFee/edit/${id_treatment}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updatePatientTreatmentFee = (id: string, payload: any) => {
  return axiosPrivate
    .put(
      `/api/${id}/moreInfo/deposit/treatmentFee/edit/${payload?.id_treatment}`,
      payload
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
