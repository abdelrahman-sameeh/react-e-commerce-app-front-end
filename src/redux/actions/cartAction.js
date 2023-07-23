import { useDeleteData } from "../../hooks/useDeleteData"
import { useGetAllData } from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData"
import { useUpdateDataWithoutImage } from "../../hooks/useUpdateData"
import { ADD_PRODUCT_TO_CART, APPLY_COUPON_TO_CART, GET_ALL_CART_ITEMS, REMOVE_PRODUCT_FROM_CART, UPDATE_PRODUCT_QTY_IN_CART } from "../type"

export const addProductToCart = (data) => {
   return async (dispatch) => {
      try {
         const response = await useInsertData('/api/v1/cart', data)
         dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: err.response,
            loading: false
         })
      }
   }
}

export const getAllProductInCart = () => {
   return async (dispatch) => {
      try {
         const response = await useGetAllData('/api/v1/cart')
         dispatch({
            type: GET_ALL_CART_ITEMS,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: GET_ALL_CART_ITEMS,
            payload: err.response,
            loading: false
         })
      }
   }
}

export const removeProductFromCart = (itemId) => {
   return async (dispatch) => {
      try {
         const response = await useDeleteData(`/api/v1/cart/${itemId}`)
         dispatch({
            type: REMOVE_PRODUCT_FROM_CART,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: REMOVE_PRODUCT_FROM_CART,
            payload: err.response,
            loading: false
         })
      }
   }
}

export const updateQtyProductInCart = (itemId, data) => {
   return async (dispatch) => {
      try {
         const response = await useUpdateDataWithoutImage(`/api/v1/cart/${itemId}`, data)
         dispatch({
            type: UPDATE_PRODUCT_QTY_IN_CART,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: UPDATE_PRODUCT_QTY_IN_CART,
            payload: err.response,
            loading: false
         })
      }
   }
}

export const applyCouponToCArt = (couponName) => {
   return async (dispatch) => {
      try {
         const response = await useUpdateDataWithoutImage(`/api/v1/cart/applyCoupon`, {couponName})
         dispatch({
            type: APPLY_COUPON_TO_CART,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: APPLY_COUPON_TO_CART,
            payload: err.response,
            loading: false
         })
      }
   }
}