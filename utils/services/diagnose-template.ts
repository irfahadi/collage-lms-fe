import { axiosPrivate } from '@utils/axios-private'

export const getDiagnosesTemplateList = () => {
  return axiosPrivate
    .get(
      `/api/treatment-plan/templates/diagnose-problem/list?page=0&per_page=1000&search&sort=asc`
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getDetailDiagnoseTemplate = (id: string | number) => {
  return axiosPrivate
    .get(`/api/treatment-plan/templates/diagnose-problem/one/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const storeDiagnoseTemplate = (payload: any) => {
  return axiosPrivate
    .post(`/api/treatment-plan/templates/diagnose-problem/create`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateDiagnoseTemplate = (id: string | number, payload: any) => {
  return axiosPrivate
    .put(`/api/treatment-plan/templates/diagnose-problem/update/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteDiagnoseTemplate = (id: string | number) => {
  return axiosPrivate
    .delete(`/api/treatment-plan/templates/diagnose-problem/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrderDiagnoseTemplate = (payload: any) => {
  return axiosPrivate
    .put('/api/treatment-plan/templates/diagnose-problem/ordering', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
