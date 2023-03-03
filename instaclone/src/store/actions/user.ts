import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED } from './actionTypes';
import { setMessage } from './message';
import axios from 'axios'
import { AUTH_BASE_URL, API_KEY } from '@env'

export const userLogged = user => {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export const logout = () => {
  return {
    type: USER_LOGGED_OUT,
  }
}

export const createUser = user => {
  return dispatch => {
    dispatch(loadingUser())
    axios.post(`${AUTH_BASE_URL}/signupNewUser?key=${API_KEY}`, {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    })
      .catch(() => {
        dispatch(setMessage({
          title: 'Erro',
          text: 'A conta já existe. Tente utilizar outro e-mail ou faça login!'
        }))
      })
      .then(res => {
        if (res.data.localId) {
          axios.put(`/users/${res.data.localId}.json`, {
            name: user.name
          })
            .catch(() => {
              dispatch(setMessage({
                title: 'Erro',
                text: 'Não foi possível carregar seus dados. Por favor tente novamente!'
              }))
            })
            .then(() => {
              dispatch(login(user))
            })
        }
      })
  }
}

export const loadingUser = () => {
  return {
    type: LOADING_USER
  }
}

export const userLoaded = () => {
  return {
    type: USER_LOADED
  }
}

export const login = user => {
  return dispatch => {
    dispatch(loadingUser())
    axios.post(`${AUTH_BASE_URL}/verifyPassword?key=${API_KEY}`, {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    })
      .catch(() => {
        dispatch(setMessage({
          title: 'Erro',
          text: 'Dados Incorretos'
        }))
      })
      .then(res => {
        if (res.data.localId) {
          user.token = res.data.idToken
          axios.get(`/users/${res.data.localId}.json`)
            .catch(() => {
              dispatch(setMessage({
                title: 'Erro',
                text: 'Não foi possível carregar seus dados. Por favor tente novamente!'
              }))
            })
            .then(res => {
              delete user.password
              user.name = res.data.name
              dispatch(userLogged(user))
              dispatch(userLoaded())
            })
        }
      })
  }
}