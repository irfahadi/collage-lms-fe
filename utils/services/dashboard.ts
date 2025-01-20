import { axiosPrivate } from '@utils/axios-private'

export const updateReservationStatus = (id: string, payload: any) => {
  return axiosPrivate
    .put(`/api/${id}/update-reservation/${payload.id_treatment}`, {
      title: payload.title,
    })
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getSummaryReservation = (query: string = '') => {
  return axiosPrivate
    .get('/api/dashboard/summaryByStatusReservation' + query)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
