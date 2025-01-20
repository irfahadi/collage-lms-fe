import axios from 'axios'

const instance = axios.create()

export const sendMessageToTelegram = (message: string) => {
  return instance
  .get(
    (process.env.NEXT_PUBLIC_BASEPATH || '') +
    `/api/send-message?message=${encodeURIComponent(message)}`
    )
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
