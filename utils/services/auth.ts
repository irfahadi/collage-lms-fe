import { axiosPrivate } from '@utils/axios-private'
import axios from 'axios'

const instance = axios.create()

export const loginWithEmail = (payload: any) => {
  return instance
    .post('/api/token/', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getUserData = (id?: string) => {
  return axiosPrivate
    .get(`/api/v1/user/` + id)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
