import { ADD_PRODUCT, GET_ALL_PRODUCTS, GET_ERROR, GET_SPECIFIC_PRODUCTS, GET_SAME_PRODUCTS, DELETE_ONE_PRODUCT, UPDATE_ONE_PRODUCT } from "../type";

const initialState = {
   products: [],
   loading: true
}

const productReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_PRODUCT:
         return {
            ...state,
            oneProduct: action.payload,
            loading: false
         }
      case GET_ALL_PRODUCTS:
         return {
            ...state,
            products: action.payload,
            loading: false
         }
      case GET_SPECIFIC_PRODUCTS:
         return {
            ...state,
            product: action.payload,
            loading: false
         }
      case GET_SAME_PRODUCTS:
         return {
            ...state,
            sameProduct: action.payload,
            loading: false
         }
      case DELETE_ONE_PRODUCT:
         return {
            ...state,
            oneDeleted: action.payload,
            loading: false
         }
      case UPDATE_ONE_PRODUCT:
         return {
            ...state,
            oneUpdated: action.payload,
            loading: false
         }
      case GET_ERROR:
         return {
            ...state,
            products: action.payload,
            loading: false
         }
      default:
         return state
   }
}

export default productReducer