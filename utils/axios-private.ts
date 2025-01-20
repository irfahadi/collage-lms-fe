import { memoizedRefreshToken } from './refreshToken'
import Cookies from 'js-cookie'
import axios from 'axios'

axios.interceptors.request.use(
  async (config: any) => {
    const session = Cookies.get('access_token_chat')
    // console.log("session", session)
    if (session) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${session}`,
        'Accept-Language': localStorage.getItem('lang') === 'en' ? 'en' : 'jp',
      }
    }

    return config
  },
  (error) => Promise.reject(error)
)

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config
    if (error?.response?.status === 403) {
      config.sent = true
      return window.location.replace(
        (process.env.NEXT_PUBLIC_BASEPATH || '') + '/forbidden'
      )
    }
    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true
      const redirect = window.location.pathname
      return window.location.replace('/forbidden')
      const result: any = await memoizedRefreshToken()

      if (result?.access_token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${result.access_token}`,
          'Accept-Language':
            localStorage.getItem('lang') === 'en' ? 'en' : 'jp',
        }
      }

      return axios(config)
    }

    if (error?.response?.data?.error === 'no_access_token') {
      window.location.replace('/forbidden')
    }
    return Promise.reject(error)
  }
)

export const axiosPrivate = axios
