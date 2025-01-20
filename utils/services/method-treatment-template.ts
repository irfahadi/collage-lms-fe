import { axiosPrivate } from '@utils/axios-private'

export const getMethodTreatmentTemplateList = () => {
  return axiosPrivate
    .get(
      `/api/treatment-plan/templates/method-of-treatment/list?page=0&per_page=10&search&sort=asc`
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getDetailmethodTreatmentTemplate = (id: string | number) => {
  return axiosPrivate
    .get(`/api/treatment-plan/templates/method-of-treatment/one/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const storemethodTreatmentTemplate = (payload: any) => {
  return axiosPrivate
    .post(`/api/treatment-plan/templates/method-of-treatment/create`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updatemethodTreatmentTemplate = (
  id: string | number,
  payload: any
) => {
  return axiosPrivate
    .put(
      `/api/treatment-plan/templates/method-of-treatment/update/${id}`,
      payload
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deletemethodTreatmentTemplate = (id: string | number) => {
  return axiosPrivate
    .delete(`/api/treatment-plan/templates/method-of-treatment/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrdermethodTreatmentTemplate = (payload: any) => {
  return axiosPrivate
    .put('/api/treatment-plan/templates/method-of-treatment/ordering', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
