import { axiosPrivate } from '@utils/axios-private'

export const getImportantPointTemplateList = () => {
  return axiosPrivate
    .get(
      `/api/treatment-plan/templates/important-point/list?page=0&per_page=10&search&sort=asc`
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getDetailimportantPointTemplate = (id: string | number) => {
  return axiosPrivate
    .get(`/api/treatment-plan/templates/important-point/one/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const storeimportantPointTemplate = (payload: any) => {
  return axiosPrivate
    .post(`/api/treatment-plan/templates/important-point/create`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateimportantPointTemplate = (
  id: string | number,
  payload: any
) => {
  return axiosPrivate
    .put(`/api/treatment-plan/templates/important-point/update/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteimportantPointTemplate = (id: string | number) => {
  return axiosPrivate
    .delete(`/api/treatment-plan/templates/important-point/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrderimportantPointTemplate = (payload: any) => {
  return axiosPrivate
    .put('/api/treatment-plan/templates/important-point/ordering', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
