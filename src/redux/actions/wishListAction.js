import { useDeleteData } from "../../hooks/useDeleteData"
import { useGetAllData } from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData"
import { ADD_ONE_TO_WISH_LIST, DELETE_ONE_TO_WISH_LIST, GET_ALL_PRODUCTS_IN_WISH_LIST } from "../type"

export const addProductToWishList = (data) => {
   return async (dispatch) => {
      try {
         const response = await useInsertData('/api/v1/wishlist', data)
         dispatch({
            payload: response,
            type: ADD_ONE_TO_WISH_LIST,
            loading: false
         })
      } catch (err) {
         dispatch({
            payload: err.response,
            type: ADD_ONE_TO_WISH_LIST,
            loading: false
         })
      }
   }
}

export const removeProductFromWishList = (productId) => {
   return async (dispatch) => {
      try {
         const response = await useDeleteData(`/api/v1/wishlist/${productId}`)
         dispatch({
            payload: response,
            type: DELETE_ONE_TO_WISH_LIST,
            loading: false
         })
      } catch (err) {
         dispatch({
            payload: err.response,
            type: DELETE_ONE_TO_WISH_LIST,
            loading: false
         })
      }
   }
}




export const getAllProductInWishList = () => {
   return async (dispatch) => {
      try{
         const response = await useGetAllData('/api/v1/wishlist')
         dispatch({
            type: GET_ALL_PRODUCTS_IN_WISH_LIST,
            payload: response,
            loading: false
         })
      }catch(err){
         dispatch({
            type: GET_ALL_PRODUCTS_IN_WISH_LIST,
            payload: err.response,
            loading: false
         })
      }
   }
}