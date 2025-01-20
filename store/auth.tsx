import React, { createContext, useContext, useReducer } from 'react'

const AuthContext = createContext({})

const SET_LOGIN_STATE = 'SET_LOGIN_STATE'

const INITIAL_STATE = {
  isLoggedIn: false,
  user: null,
}

type Types = {
  isLoggedIn: boolean
  user: any
}

const reducer = (state: Types, action: any) => {
  const { type, payload } = action

  switch (type) {
    case SET_LOGIN_STATE:
      return { ...state, isLoggedIn: payload.isLoggedIn, user: payload.user }

    default:
      return state
  }
}

const actions = (initialState: any = INITIAL_STATE) => {
  const [state, dispatch]: any = useReducer(reducer, initialState)

  const handleLogin = (user: any) => {
    localStorage.setItem('ma-user-chat', JSON.stringify(user))
    dispatch({
      type: SET_LOGIN_STATE,
      payload: {
        user,
        isLoggedIn: true,
      },
    })
  }

  const handleLogout = () => {
    localStorage.removeItem('ma-user-chat')
    dispatch({
      type: SET_LOGIN_STATE,
      payload: {
        user: null,
        isLoggedIn: false,
      },
    })
  }

  return { state, handleLogin, handleLogout }
}

export const AuthProvider = ({ children }: any) => {
  const { state, handleLogin, handleLogout } = actions()

  return (
    <AuthContext.Provider value={{ state, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
