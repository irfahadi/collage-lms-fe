import { axiosPrivate } from '@utils/axios-private'

export const getConsultationDetail = (id: string) => {
  return axiosPrivate
    .get(`/api/consultation/request/one/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
