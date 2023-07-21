import { useDeleteData } from "../../hooks/useDeleteData"
import { useGetAllData, useGetData } from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData"
import {  useUpdateDataWithoutImage } from "../../hooks/useUpdateData"
import { CREATE_REVIEW, GET_ALL_REVIEWS, REMOVE_REVIEW, GET_ONE_REVIEW, UPDATE_ONE_REVIEW } from "../type"


// @desc   create review by logged user
export const createReview = (data) => {
   return async (dispatch) => {
      try {
         const response = await useInsertData(`/api/v1/products/${data.productId}/reviews`, data)
         dispatch({
            type: CREATE_REVIEW,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: CREATE_REVIEW,
            payload: err.response,
            loading: false
         })
      }
   }
}



// @desc   get all reviews on one product
export const getAllReviewsInOneProduct = (productId, limit, pageNum) => {
   return async (dispatch) => {
      try {
         const response = await useGetAllData(`/api/v1/products/${productId}/reviews?limit=${limit}&page=${pageNum}`)
         dispatch({
            type: GET_ALL_REVIEWS,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: GET_ALL_REVIEWS,
            payload: err.response,
            loading: false
         })
      }
   }
}


export const removeOneReview = (reviewId) => {
   return async (dispatch) => {
      try {
         const response = await useDeleteData(`/api/v1/reviews/${reviewId}`)
         dispatch({
            type: REMOVE_REVIEW,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: REMOVE_REVIEW,
            payload: err.response,
            loading: false
         })
      }
   }
}


export const getOneReview = (reviewId) => {
   return async (dispatch) => {
      try {
         const response = await useGetData(`/api/v1/reviews/${reviewId}`)
         dispatch({
            type: GET_ONE_REVIEW,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: GET_ONE_REVIEW,
            payload: err.response,
            loading: false
         })
      }
   }
}


export const updateOneReview = (reviewId, data) => {
   return async (dispatch) => {
      try {
         const response = await useUpdateDataWithoutImage(`/api/v1/reviews/${reviewId}`, data)
         dispatch({
            type: UPDATE_ONE_REVIEW,
            payload: response,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: UPDATE_ONE_REVIEW,
            payload: err.response,
            loading: false
         })
      }
   }
}