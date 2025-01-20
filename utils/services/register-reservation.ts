import { axiosPrivate } from '@utils/axios-private'

export const getRegisterReservation = (id: string) => {
  return axiosPrivate
    .get(`/api/${id}/moreInfo/registerReservation`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
