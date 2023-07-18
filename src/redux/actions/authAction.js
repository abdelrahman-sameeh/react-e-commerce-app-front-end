import { useInsertData } from "../../hooks/useInsertData"
import { useUpdateDataWithoutImage } from "../../hooks/useUpdateData"
import { FORGET_PASSWORD, LOGIN, SIGN_UP, USER_RESET_PASSWORD, VERIFY_RESET_CODE } from "../type"



export const signup = (data) => {
   return async (dispatch) => {
      try {
         const res = await useInsertData('/api/v1/auth/signup', data)

         dispatch({
            type: SIGN_UP,
            payload: res,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: SIGN_UP,
            payload: err.response,
            loading: false
         })
      }
   }
}


export const login = (userData) => {
   return async (dispatch) => {
      try {
         const response = await useInsertData('/api/v1/auth/login', userData)
         console.log(response)
         dispatch({
            type: LOGIN,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: LOGIN,
            payload: err.response,
            loading: false
         })
      }
   }
}



export const forgetPassword = (email) => {
   return async (dispatch) => {
      try {
         const response = await useInsertData('/api/v1/auth/forgotPasswords', { email })
         dispatch({
            type: FORGET_PASSWORD,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: FORGET_PASSWORD,
            payload: err.response,
            loading: false
         })
      }
   }
}



export const verifyResetCode = (resetCode) => {
   return async (dispatch) => {
      try {
         const response = await useInsertData('/api/v1/auth/verifyResetCode', { resetCode })
         dispatch({
            type: VERIFY_RESET_CODE,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: VERIFY_RESET_CODE,
            payload: err.response,
            loading: false
         })
      }
   }
}

export const updatePassword = (data) => {
   return async (dispatch) => {
      try {
         const response = await useUpdateDataWithoutImage('/api/v1/auth/resetPassword' , data)
         dispatch({
            type: USER_RESET_PASSWORD,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: USER_RESET_PASSWORD,
            payload: err.response,
            loading: false
         })
      }
   }
}