import { axiosPrivate } from '@utils/axios-private'

export const getJournalMerchandise = (query?: string) => {
  return axiosPrivate
    .get(`/api/daily-journal/merchandise/list${query}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

//create journal merchandise
export const createJournalMerchandise = (data: any) => {
  return axiosPrivate
    .post(`/api/daily-journal/merchandise/add`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

//edit journal merchandise
export const editJournalMerchandise = (id: string | number, data: any) => {
  return axiosPrivate
    .put(`/api/daily-journal/merchandise/edit/${id}`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const editGeneralJournalMerchandise = (
  id: string | number,
  data: any
) => {
  return axiosPrivate
    .put(`/api/daily-journal/general/merchandise/edit/${id}`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

//delete journal merchandise
export const deleteJournalMerchandise = (id: string | number) => {
  return axiosPrivate
    .delete(`/api/daily-journal/merchandise/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteGeneralJournalMerchandise = (id: string | number) => {
  return axiosPrivate
    .delete(`/api/daily-journal/general/merchandise/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
