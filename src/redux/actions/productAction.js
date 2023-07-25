import { useDeleteData } from "../../hooks/useDeleteData";
import { useGetData } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData"
import { useUpdateData } from "../../hooks/useUpdateData";

import {
   ADD_PRODUCT,
   GET_ALL_PRODUCTS,
   GET_ERROR,
   GET_SPECIFIC_PRODUCTS,
   GET_SAME_PRODUCTS,
   DELETE_ONE_PRODUCT,
   UPDATE_ONE_PRODUCT,
   GET_LIST_OF_PRODUCTS_IN_SPECIFIC_CATEGORY,
   GET_LIST_OF_PRODUCTS_IN_SPECIFIC_BRAND,
} from "../type";


// create product
export const addProduct = (formatData) => {
   return async (dispatch) => {
      try {
         const res = await useInsertDataWithImage('/api/v1/products', formatData)

         dispatch({
            type: ADD_PRODUCT,
            payload: res,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: ADD_PRODUCT,
            payload: err.response,
            loading: false
         })
      }
   }
}


export const getAllProducts = (limit, page) => {
   return async (dispatch) => {
      try {
         const res = await useGetData(`/api/v1/products?limit=${limit}&page=${page}`)
         dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res,
            loading: false
         })
      } catch (err) {
         dispatch({
            type: GET_ALL_PRODUCTS,
            payload: err.response,
            loading: false
         })
      }

   }
}


export const getSpecificProduct = (productId) => {
   return async (dispatch) => {
      try {

         const response = await useGetData(`/api/v1/products/${productId}`)
         console.log(response);
         dispatch({
            type: GET_SPECIFIC_PRODUCTS,
            payload: response,
            loading: false
         })

      } catch (err) {
         dispatch({
            type: GET_SPECIFIC_PRODUCTS,
            payload: err.response,
            loading: false
         })
      }
   }
}

export const getSameProducts = (catId) => {
   return async (dispatch) => {
      try {

         const response = await useGetData(`api/v1/products?category=${catId}`)

         dispatch({
            type: GET_SAME_PRODUCTS,
            payload: response,
            loading: false
         })

      } catch (err) {
         dispatch({
            type: GET_SAME_PRODUCTS,
            payload: err.response,
            loading: false
         })
      }
   }
}

export const deleteProductById = (productId) => {
   return async (dispatch) => {
      try {
         const res = await useDeleteData(`api/v1/products/${productId}`)

         dispatch({
            type: DELETE_ONE_PRODUCT,
            payload: res,
            loading: false
         })

      } catch (err) {
         dispatch({
            type: DELETE_ONE_PRODUCT,
            payload: err.response,
            loading: false
         })
      }
   }
}

// @decs    update specific product
// @method  PUT
// @access  Private
export const updateOneProduct = (productId, data) => {
   return async (dispatch) => {
      try {
         const res = await useUpdateData(`api/v1/products/${productId}`, data)
         console.log(res);
         dispatch({
            type: UPDATE_ONE_PRODUCT,
            payload: res,
            loading: false
         })

      } catch (err) {
         dispatch({
            type: UPDATE_ONE_PRODUCT,
            payload: err.response,
            loading: false
         })
      }
   }
}

// @decs    get all product searched with query string
// method   GET
// @access  Private
export const getAllProductSearch = (queryString) => {
   return async (dispatch) => {
      try {
         const res = await useGetData(`api/v1/products?${queryString}`)
         dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res,
            loading: false
         })

      } catch (err) {
         dispatch({
            type: GET_ALL_PRODUCTS,
            payload: err.response,
            loading: false
         })
      }
   }
}

// @decs    get all product that include to specific category
// method   GET
// @access  public
export const getAllProductInCategory = (categoryId, limit, page=1) => {
   return async (dispatch) => {
      try {
         const res = await useGetData(`api/v1/products?category=${categoryId}&limit=${limit}&page=${page}`)
         dispatch({
            type: GET_LIST_OF_PRODUCTS_IN_SPECIFIC_CATEGORY,
            payload: res,
            loading: false
         })

      } catch (err) {
         dispatch({
            type: GET_LIST_OF_PRODUCTS_IN_SPECIFIC_CATEGORY,
            payload: err.response,
            loading: false
         })
      }
   }
}

// @decs    get all product that include to specific brand
// method   GET
// @access  public
export const getAllProductInBrand = (brandId, limit, page=1) => {
   return async (dispatch) => {
      try {
         const res = await useGetData(`api/v1/products?brand=${brandId}&limit=${limit}&page=${page}`)
         dispatch({
            type: GET_LIST_OF_PRODUCTS_IN_SPECIFIC_BRAND,
            payload: res,
            loading: false
         })

      } catch (err) {
         dispatch({
            type: GET_LIST_OF_PRODUCTS_IN_SPECIFIC_BRAND,
            payload: err.response,
            loading: false
         })
      }
   }
}