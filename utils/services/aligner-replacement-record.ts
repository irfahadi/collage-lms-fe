import { axiosPrivate } from '@utils/axios-private'

export const getAlignerReplacment = (id: string) => {
  return axiosPrivate
    .get(`/api/${id}/moreInfo/alignerReplacement`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const sendAlignerToEmail = (id: string) => {
  return axiosPrivate
    .post(`/api/${id}/sendAligner`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
