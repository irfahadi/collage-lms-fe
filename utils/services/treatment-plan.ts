import { axiosPrivate } from '@utils/axios-private'

export const getPatientTreatmentPlanDetail = (
  id: string,
  id_treatment: number
) => {
  return axiosPrivate
    .get(`/api/treatment-plan/${id}/one/${id_treatment}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getPatientTreatmentPlanList = (id: string) => {
  return axiosPrivate
    .get(`/api/treatment-plan/${id}/list`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createPatientTreatmentPlan = (id: string, payload: any) => {
  return axiosPrivate
    .post(`/api/treatment-plan/${id}/create`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createPatientTreatmentPlanDraft = (id: string, payload: any) => {
  return axiosPrivate
    .post(`/api/treatment-plan/${id}/create-to-draft`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deletePatientTreatmentPlan = (
  id: string,
  idTreatmentPlan: number
) => {
  return axiosPrivate
    .delete(`/api/treatment-plan/${id}/delete/${idTreatmentPlan}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deletePatientTreatmentPlanDraft = (
  id: string,
  idTreatmentPlan: number
) => {
  return axiosPrivate
    .delete(`/api/treatment-plan/${id}/delete/${idTreatmentPlan}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updatePatientTreatmentPlan = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/treatment-plan/${id}/update/${payload?.id_treatment}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updatePatientTreatmentPlanDraft = (id: string, payload: any) => {
  return axiosPrivate
    .put(
      `/api/treatment-plan/${id}/update-draft/${payload?.id_treatment}`,
      payload
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updatePatientTreatmentPlanUndraft = (id: string, payload: any) => {
  return axiosPrivate
    .put(
      `/api/treatment-plan/${id}/update-draft/${payload?.id_treatment}/un-draft`,
      payload
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getPatientTreatmentPlanLog = (id: string) => {
  return axiosPrivate
    .get(`/api/treatment-plan/log/${id}/TreatmentPlan`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
