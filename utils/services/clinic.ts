import { axiosPrivate } from '@utils/axios-private'

export const getClinicById = (id: string) => {
  return axiosPrivate
    .get(`/api/clinicBasicInfo/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateClinic = (id: string, payload: any) => {
  return axiosPrivate
    .post(`/api/clinicBasicInfo/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
