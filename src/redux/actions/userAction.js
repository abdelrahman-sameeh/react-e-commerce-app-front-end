import {  useUpdateDataWithoutImage } from "../../hooks/useUpdateData"
import { USER_CHANGE_PASSWORD, USER_UPDATE_DATA } from "../type"

export const userChangePassword = data => {
   return async (dispatch) => {
      try{
         const response = await useUpdateDataWithoutImage('/api/v1/users/changeMyPassword', data)
         dispatch({
            type: USER_CHANGE_PASSWORD,
            payload: response,
            loading: false
         })
      }catch(err){
         dispatch({
            type: USER_CHANGE_PASSWORD,
            payload: err.response,
            loading: false
         })
      }
   }
}

export const userUpdateData = data => {
   return async (dispatch) => {
      try{
         const response = await useUpdateDataWithoutImage('/api/v1/users/updateMe', data)
         dispatch({
            type: USER_UPDATE_DATA,
            payload: response,
            loading: false
         })
      }catch(err){
         dispatch({
            type: USER_UPDATE_DATA,
            payload: err.response,
            loading: false
         })
      }
   }
}