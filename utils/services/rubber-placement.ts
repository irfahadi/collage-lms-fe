import { axiosPrivate } from '@utils/axios-private'

export const getRubberPlacementList = (
  idtreat: number | string,
  query = ''
) => {
  return axiosPrivate
    .get(`/api/rubber-management/placement/list/${idtreat}/${query}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const storeRubberPlacement = (
  idtreat: number | string,
  payload: any
) => {
  return axiosPrivate
    .post(`/api/rubber-management/placement/create/${idtreat}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateRubberPlacement = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/rubber-management/placement/update/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteRubberPlacement = (id: string) => {
  return axiosPrivate
    .delete(`/api/rubber-management/placement/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteRubberPlacementSingle = (
  id: string | number,
  payload: any
) => {
  return axiosPrivate
    .delete(`/api/rubber-management/placement/one/${id}`, { data: payload })
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateRubberPlacementSingle = (
  id: string | number,
  payload: any
) => {
  return axiosPrivate
    .put(`/api/rubber-management/placement/one/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
