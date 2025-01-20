import axios from 'axios'

const instance = axios.create()

export const uploadToAws = (payload: any) => {
  return instance
    .post(
      (process.env.NEXT_PUBLIC_BASEPATH || '') + '/api/upload-aws',
      payload,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
