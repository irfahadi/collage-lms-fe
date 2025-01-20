import { axiosPrivate } from '@utils/axios-private'

export const masterAsanaProject = (query?: string) => {
  return axiosPrivate
    .get(`/api/asanaProjectEnums` + query)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const linkToAsana = (id: string | number, data: any) => {
  return axiosPrivate
    .post(`/api/treatmentRecord/${id}/linkAsana`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
