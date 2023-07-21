import { ADD_ONE_TO_WISH_LIST, DELETE_ONE_TO_WISH_LIST, GET_ALL_PRODUCTS_IN_WISH_LIST } from "../type"



const initialState = {
   addOneProduct: [],
   removeOneProduct: [],
   allProductInWishList:[],
   loading: true
}


export const wishListReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_ONE_TO_WISH_LIST:
         return {
            ...state,
            addOneProduct: action.payload,
            loading: false
         }
      case DELETE_ONE_TO_WISH_LIST:
         return {
            ...state,
            removeOneProduct: action.payload,
            loading: false
         }
      case GET_ALL_PRODUCTS_IN_WISH_LIST:
         return {
            ...state,
            allProductInWishList: action.payload,
            loading: false
         }

      default:
         return state
   }
}