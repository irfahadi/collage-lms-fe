import { axiosPublic } from './axiosPublic'
import Cookies from 'js-cookie'
import cookie from 'cookie'
import mem from 'mem'

const refreshTokenFn = async () => {
  try {
    const response = await axiosPublic.post('/api/auth/refreshToken', {
      token: {
        token: Cookies.get('refresh_token'),
      },
    })

    const { accessToken, refreshToken } = response.data

    if (!accessToken) {
      throw response
    }
    document.cookie = cookie.serialize('access_token', accessToken, {
      sameSite: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 30, //1 month
    })
    document.cookie = cookie.serialize('refresh_token', refreshToken, {
      sameSite: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 30, //1 month
    })

    return { accessToken, refreshToken }
  } catch (error) {
    return error
  }
}

const maxAge = 5000

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
})
