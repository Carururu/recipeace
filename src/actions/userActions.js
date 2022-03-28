import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../firebase'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    await signInWithEmailAndPassword(auth, email, password)

    const user = auth.currentUser

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    }

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  auth.signOut()
  dispatch({ type: USER_LOGOUT })
}

export const signup = (email, password, username) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    })

    await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(auth.currentUser, {
      displayName: username,
    })

    const user = auth.currentUser

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    }

    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
