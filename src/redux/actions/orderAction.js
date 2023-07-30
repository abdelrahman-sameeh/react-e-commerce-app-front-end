import { useDeleteData } from "../../hooks/useDeleteData"
import { useGetAllData } from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData"
import { useUpdateDataWithoutImage } from "../../hooks/useUpdateData"
import { ADD_CASH_ORDER, UPDATE_DELIVER_STATUS, USER_GET_ALL_ORDERS, UPDATE_PAY_STATUS, DELETE_ONE_ORDER } from "../type"

export const addCashOrder = (cartId, address) => {
   return async (dispatch) => {
      try {
         const response = await useInsertData(`/api/v1/orders/${cartId}`, address)
         dispatch({
            type: ADD_CASH_ORDER,
            payload: response
         })
      } catch (err) {
         dispatch({
            type: ADD_CASH_ORDER,
            payload: err.response
         })
      }
   }
}

export const getAllUserOrder = () => {
   return async (dispatch) => {
      try {
         const response = await useGetAllData('/api/v1/orders')
         dispatch({
            type: USER_GET_ALL_ORDERS,
            payload: response
         })
      } catch (err) {
         dispatch({
            type: USER_GET_ALL_ORDERS,
            payload: err.response
         })
      }
   }
}

export const updateOrderDeliveredStatus = (orderId, data) => {
   return async (dispatch) => {
      try {
         const response = await useUpdateDataWithoutImage(`/api/v1/orders/${orderId}/deliver`, data)
         dispatch({
            type: UPDATE_DELIVER_STATUS,
            payload: response
         })
      } catch (err) {
         dispatch({
            type: UPDATE_DELIVER_STATUS,
            payload: err.response
         })
      }
   }
}

export const updateOrderPaidStatus = (orderId, data) => {
   return async (dispatch) => {
      try {
         const response = await useUpdateDataWithoutImage(`/api/v1/orders/${orderId}/pay`, data)
         dispatch({
            type: UPDATE_PAY_STATUS,
            payload: response
         })
      } catch (err) {
         dispatch({
            type: UPDATE_PAY_STATUS,
            payload: err.response
         })
      }
   }
}

export const deleteOrder = (orderId) => {
   return async (dispatch) => {
      try {
         const response = await useDeleteData(`/api/v1/orders/${orderId}`)
         dispatch({
            type: DELETE_ONE_ORDER,
            payload: response
         })
      } catch (err) {
         dispatch({
            type: DELETE_ONE_ORDER,
            payload: err.response
         })
      }
   }
}
