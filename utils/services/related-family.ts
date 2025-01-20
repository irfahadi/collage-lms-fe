import { axiosPrivate } from '@utils/axios-private'

export const createPatientRelatedFamily = (id: string, payload: any) => {
  return axiosPrivate
    .post(`/api/${id}/relatedFamily/add`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getPatientRelatedFamilyList = (id: string) => {
  return axiosPrivate
    .get(`/api/${id}/relatedFamily/list`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updatePatientRelatedFamily = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/${id}/relatedFamily/edit`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getPatientRelatedFamilyDetail = (id: string, idfamily: string) => {
  return axiosPrivate
    .get(`/api/${id}/relatedFamily/edit/${idfamily}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteRelatedFamily = (
  patient_id: string,
  related_family_id: string
) => {
  return axiosPrivate
    .delete(`/api/${patient_id}/relatedFamily/delete/${related_family_id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getPatientRelatedFamilyLog = (id: string) => {
  return axiosPrivate
    .get(`/api/log/${id}/Family`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}