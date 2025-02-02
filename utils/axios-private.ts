import { memoizedRefreshToken } from './refreshToken'
import Cookies from 'js-cookie'
import axios from 'axios'

axios.interceptors.request.use(
  async (config: any) => {
    const session = Cookies.get('access_token')
    console.log('session', session)
    if (session) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${session.trim()}`,
        // 'Accept-Language': localStorage.getItem('lang') === 'en' ? 'en' : 'jp',
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
    // if (error?.response?.status === 401 && !config?.sent) {
    //   config.sent = true

    //   const result: any = await memoizedRefreshToken()

    //   if (result?.access_token) {
    //     config.headers = {
    //       ...config.headers,
    //       Authorization: `${result.access}`,
    //       // 'Accept-Language':
    //       //   localStorage.getItem('lang') === 'en' ? 'en' : 'jp',
    //     }
    //     return axios(config)
    //   } else {
    //     return window.location.replace('/login')
    //   }
    // }
    console.log(config)

    return Promise.reject(error)
  }
)

export const axiosPrivate = axios
