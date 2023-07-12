import { useGetData } from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData"
import { ADD_SUB_CATEGORY, GET_ALL_SUB_CATEGORY_ON_CATEGORY, GET_ERROR } from "../type"



export const addSubCategory = (data) => {

   return async (dispatch) => {
      try {
         const res = await useInsertData('/api/v1/subcategories', data)
         dispatch({ type: ADD_SUB_CATEGORY, payload: res, loading: false })

      } catch (err) {
         dispatch({ type: GET_ERROR, payload: err, loading: false })
      }

   }
}

export const getAllSubCategoryOnCategory = (catId) => {
   return async (dispatch) => {
      try {
         const res = await useGetData(`/api/v1/categories/${catId}/subcategories`)
         console.log(res);
         dispatch({ type: GET_ALL_SUB_CATEGORY_ON_CATEGORY, payload: res, loading: false })

      } catch (err) {
         dispatch({ type: GET_ERROR, payload: err, loading: false })
      }
   }
}