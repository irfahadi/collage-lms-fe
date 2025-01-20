import { axiosPrivate } from '@utils/axios-private'
import axios from 'axios'

const instance = axios.create()

export const loginWithEmail = (payload: any) => {
  return instance
    .post('/api/login', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const changePassword = (payload: any) => {
  return axiosPrivate
    .post('/api/resetPassword', payload)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
