import { ADD_PRODUCT_TO_CART, APPLY_COUPON_TO_CART, GET_ALL_CART_ITEMS, REMOVE_ALL_CART_ITEMS, REMOVE_PRODUCT_FROM_CART, UPDATE_PRODUCT_QTY_IN_CART } from "../type"

const initialState = {
   addProductToCart: [],
   allCartItems: [],
   deleteAllCartItems: [],
   deleteProductFromCart: [],
   updateProductInCart: [],
   applyCoupon: [],
   loading: true
}

export const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_PRODUCT_TO_CART:
         return {
            ...state,
            addProductToCart: action.payload,
            loading: false
         }
      case GET_ALL_CART_ITEMS:
         return {
            ...state,
            allCartItems: action.payload,
            loading: false
         }
      case REMOVE_ALL_CART_ITEMS:
         return {
            ...state,
            deleteAllCartItems: action.payload,
            loading: false
         }
      case REMOVE_PRODUCT_FROM_CART:
         return {
            ...state,
            deleteProductFromCart: action.payload,
            loading: false
         }
      case UPDATE_PRODUCT_QTY_IN_CART:
         return {
            ...state,
            updateProductInCart: action.payload,
            loading: false
         }
      case  APPLY_COUPON_TO_CART:
         return {
            ...state,
            applyCoupon: action.payload,
            loading: false
         }
      default:
         return state
   }
}