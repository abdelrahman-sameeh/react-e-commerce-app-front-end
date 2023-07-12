import { useGetData } from "../../hooks/useGetData"
import { useInsertDataWithImage } from "../../hooks/useInsertData"
import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR, GET_SPECIFIC_BRAND } from "../type"

export const getAllBrands = (limit, pageNum) => {
   return async (dispatch) => {
      try {
         const res = await useGetData(`/api/v1/brands?limit=${limit}&page=${pageNum}`)
         dispatch({
            type: GET_ALL_BRAND,
            payload: res
         })
      } catch (err) {
         console.log(err);
         dispatch({
            type: GET_ERROR,
            payload: err
         })
      }
   }
}


export const createBrand = (formData) => {
   return async (dispatch) => {
      try {
         const res = await useInsertDataWithImage('/api/v1/brands', formData)
         dispatch({
            type: CREATE_BRAND,
            payload: res
         })
      } catch (err) {
         dispatch({
            type: GET_ERROR,
            payload: err
         })
      }
   }
}


export const getSpecificBrand = (brandId) => {
   return async (dispatch) => {
      try {
         const res = await useGetData(`/api/v1/brands/${brandId}`)
         dispatch({
            type: GET_SPECIFIC_BRAND,
            payload: res
         })
      } catch (err) {
         dispatch({
            type: GET_ERROR,
            payload: err
         })
      }
   }
}


