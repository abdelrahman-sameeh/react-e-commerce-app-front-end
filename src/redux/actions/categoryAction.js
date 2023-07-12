
import { useGetData } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { ADD_CATEGORY, GET_ALL_CATEGORY, GET_ERROR, GET_SPECIFIC_CATEGORY } from "../type"


export const getAllCategory = (limit, pageNum) => {
   return async (dispatch) => {
      try {
         const res = await useGetData(`/api/v1/categories?limit=${limit}&page=${pageNum}`)
         dispatch({ type: GET_ALL_CATEGORY, payload: res })
      } catch (err) {
         dispatch({
            type: GET_ERROR,
            payload: err
         })
      }
   }
}


export const addCategory = (formData) => {
   return async (dispatch) => {
      try {

         const res = await useInsertDataWithImage(`/api/v1/categories`, formData)
         
         dispatch({ type: ADD_CATEGORY, payload: res })


      } catch (err) {
         console.log(err);
         dispatch({
            type: GET_ERROR,
            payload: err
         })
      }
   }
}

export const getSpecificCategory = (catId) => {
   return async (dispatch) => {
      try {
         const res = await useGetData(`api/v1/categories/${catId}`)
         dispatch({ type: GET_SPECIFIC_CATEGORY, payload: res })
      } catch (err) {
         dispatch({
            type: GET_ERROR,
            payload: err
         })
      }
   }
}