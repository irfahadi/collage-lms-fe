// import Cookies from "js-cookie";
import { axiosPrivate } from '@utils/axios-private'
import axios from 'axios'

const instance = axios.create()

instance.interceptors.request.use(function (config: any) {
  config.headers = {
    ...config.headers,
    // 'Accept-Language': localStorage.getItem('lang') === 'en' ? 'en' : 'jp',
  }
  return config
})

export const fetcher = (url: string, query?: string, config?: any) => {
  return axiosPrivate.get(`${url}${query ? `?${query}` : ''}`, config)
}
