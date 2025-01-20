import React, { createContext, useContext, useReducer } from 'react'

const PatientContext = createContext({})

const SET_PATIENT = 'SET_PATIENT'

const INITIAL_STATE = {
  patient: null,
}

type Types = {
  patient: any
}

const reducer = (state: Types, action: any) => {
  const { type, payload } = action

  switch (type) {
    case SET_PATIENT:
      return { ...state, patient: payload.patient }

    default:
      return state
  }
}

const actions = (initialState: any = INITIAL_STATE) => {
  const [state, dispatch]: any = useReducer(reducer, initialState)

  const handleSetPatient = (user: any) => {
    localStorage.setItem('ma-patient', JSON.stringify(user))
    dispatch({
      type: SET_PATIENT,
      payload: {
        patient: user,
      },
    })
  }

  return { state, handleSetPatient }
}

export const PatientProvider = ({ children }: any) => {
  const { state, handleSetPatient } = actions()

  return (
    <PatientContext.Provider value={{ state, handleSetPatient }}>
      {children}
    </PatientContext.Provider>
  )
}

export const usePatient = () => useContext(PatientContext)
