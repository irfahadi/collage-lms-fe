import axios from 'axios'

const instance = axios.create()

export const uploadToGdrive = (payload: any) => {
  return instance
    .post('/api/upload', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const getListFiles = () => {
  return instance
    .get('/api/listfiles')
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteFile = (fileId: string) => {
  return instance
    .delete('/api/delete?fileId=' + fileId)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
