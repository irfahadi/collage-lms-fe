import { axiosPrivate } from '@utils/axios-private'

export const getCaseroomList = () => {
  return axiosPrivate
    .get(`/api/caserooms/templates`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const createCaseroom = (
  idpatient: number | string,
  idtreatment: number | string,
  payload: any
) => {
  return axiosPrivate
    .post(
      `/api/${idpatient}/treatmentRecord/${idtreatment}/caseroom`,
      payload,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteCaseroom = (
  idpatient: number | string,
  idtreatment: number | string,
  idcase: number | string
) => {
  return axiosPrivate
    .delete(
      `/api/${idpatient}/treatmentRecord/${idtreatment}/caseroom/${idcase}`
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const dowloadCaseroom = (payload: any) => {
  return axiosPrivate
    .post(`/api/caserooms/download`, payload, {
      responseType: 'blob',
    })
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err.response))
}
