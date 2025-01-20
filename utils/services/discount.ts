import { axiosPrivate } from '@utils/axios-private'

export const getDiscountList = () => {
  return axiosPrivate
    .get(
      `/api/treatment-plan/settings/discount/list?page=0&per_page=1000&search&sort=asc`
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const storeDiscount = (payload: any) => {
  return axiosPrivate
    .post(`/api/treatment-plan/settings/discount/create`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateDiscount = (id: string | number, payload: any) => {
  return axiosPrivate
    .put(`/api/treatment-plan/settings/discount/update/${id}`, payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteDiscount = (id: string | number) => {
  return axiosPrivate
    .delete(`/api/treatment-plan/settings/discount/delete/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const reOrderDiscountList = (payload: any) => {
  return axiosPrivate
    .put('/api/treatment-plan/settings/discount/ordering', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
