import { axiosPrivate } from '@utils/axios-private'
import axios from 'axios'
const instance = axios.create()

export const checkUser = (token: string) => {
  return instance
    .get(`/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getMe = () => {
  return axiosPrivate
    .get(`/api/user`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
