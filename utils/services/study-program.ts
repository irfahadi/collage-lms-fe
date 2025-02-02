import { axiosPrivate } from '@utils/axios-private'

export const createStudyProgram = (data: any) => {
  return axiosPrivate
    .post(`/api/v1/study_program`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const updateStudyProgram = (id: string | number, data: any) => {
  return axiosPrivate
    .put(`/api/v1/study_program/${id}`, data)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}

export const deleteStudyProgram = (id: string | number) => {
  return axiosPrivate
    .delete(`/api/v1/study_program/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response))
}
