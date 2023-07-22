import { useInsertData } from "../../hooks/useInsertData"
import { useUpdateDataWithoutImage } from "../../hooks/useUpdateData"
import { useDeleteData } from "../../hooks/useDeleteData"
import { useGetAllData } from "../../hooks/useGetData"
import { ADD_ADDRESS, DELETE_ADDRESS, GET_ALL_ADDRESSES, GET_SPECIFIC_ADDRESS, UPDATE_ADDRESS } from "../type"



export const addAddress = (data) => {
   return async (dispatch) => {
      try {
         const response = await useInsertData('/api/v1/addresses', data)
         dispatch({
            type: ADD_ADDRESS,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: ADD_ADDRESS,
            payload: err.response,
            loading: false
         })
      }
   }
}



export const updateAddress = (addressId, data) => {
   return async (dispatch) => {
      try {
         const response = await useUpdateDataWithoutImage(`/api/v1/addresses/${addressId}`, data)
         dispatch({
            type: UPDATE_ADDRESS,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: UPDATE_ADDRESS,
            payload: err.response,
            loading: false
         })
      }
   }
}

export const deleteAddress = (addressId) => {
   return async (dispatch) => {
      try {
         const response = await useDeleteData(`/api/v1/addresses/${addressId}`)
         dispatch({
            type: DELETE_ADDRESS,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: DELETE_ADDRESS,
            payload: err.response,
            loading: false
         })
      }
   }
}

export const getAllAddresses = () => {
   return async (dispatch) => {
      try {
         const response = await useGetAllData('/api/v1/addresses')
         dispatch({
            type: GET_ALL_ADDRESSES,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: GET_ALL_ADDRESSES,
            payload: err.response,
            loading: false
         })
      }
   }
}

export const getSpecificAddress = (addressId) => {
   return async (dispatch) => {
      try {
         const response = await useGetAllData(`/api/v1/addresses/${addressId}`)
         dispatch({
            type: GET_SPECIFIC_ADDRESS,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: GET_SPECIFIC_ADDRESS,
            payload: err.response,
            loading: false
         })
      }
   }
}