import { useDeleteData } from "../../hooks/useDeleteData"
import { useGetAllData } from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData"
import { useUpdateDataWithoutImage } from "../../hooks/useUpdateData"
import { ADD_COUPON, DELETE_COUPON, GEL_ALL_COUPONS, GET_SPECIFIC_COUPON, UPDATE_COUPON } from "../type"

export const addCoupon = (data) => {
   return async (dispatch) => {
      try {
         const response = await useInsertData('/api/v1/coupons', data)
         dispatch({
            type: ADD_COUPON,
            payload: response,
            loading: false,
         })
      } catch (err) {
         dispatch({
            type: ADD_COUPON,
            payload: err.response,
            loading: false,
         })
      }
   }
}
export const getAllCoupons = () => {
   return async (dispatch) => {
      try {
         const response = await useGetAllData('/api/v1/coupons')
         dispatch({
            type: GEL_ALL_COUPONS,
            payload: response,
            loading: false,
         })
      } catch (err) {
         dispatch({
            type: GEL_ALL_COUPONS,
            payload: err.response,
            loading: false,
         })
      }
   }
}
export const getSpecificCoupon = (couponId) => {
   return async (dispatch) => {
      try {
         const response = await useGetAllData(`/api/v1/coupons/${couponId}`)
         dispatch({
            type: GET_SPECIFIC_COUPON,
            payload: response,
            loading: false,
         })
      } catch (err) {
         dispatch({
            type: GET_SPECIFIC_COUPON,
            payload: err.response,
            loading: false,
         })
      }
   }
}
export const updateCoupon = (couponId, data) => {
   return async (dispatch) => {
      try {
         const response = await useUpdateDataWithoutImage(`/api/v1/coupons/${couponId}`, data)
         dispatch({
            type: UPDATE_COUPON,
            payload: response,
            loading: false,
         })
      } catch (err) {
         dispatch({
            type: UPDATE_COUPON,
            payload: err.response,
            loading: false,
         })
      }
   }
}
export const deleteCoupon = (couponId) => {
   return async (dispatch) => {
      try {
         const response = await useDeleteData(`/api/v1/coupons/${couponId}`)
         dispatch({
            type: DELETE_COUPON,
            payload: response,
            loading: false,
         })
      } catch (err) {
         dispatch({
            type: DELETE_COUPON,
            payload: err.response,
            loading: false,
         })
      }
   }
}