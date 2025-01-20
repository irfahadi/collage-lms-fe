import { axiosPrivate } from '@utils/axios-private'

export const getLabelById = (labelId: string) => {
  return axiosPrivate
    .get(`/api/rubbername/edit/${labelId}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getRubberMaster = (query = '') => {
  return axiosPrivate
    .get(`/api/rubber-management/settings/rubber/list${query}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const storeRubberName = (payload: any) => {
  return axiosPrivate
    .post('/api/rubber-management/settings/rubber/create', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrderRubbername = (payload: any) => {
  return axiosPrivate
    .put('/api/rubber-management/settings/rubber/ordering', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateRubberName = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/rubber-management/settings/rubber/update/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteRubberName = (id: string) => {
  return axiosPrivate
    .delete(`/api/rubber-management/settings/rubber/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
