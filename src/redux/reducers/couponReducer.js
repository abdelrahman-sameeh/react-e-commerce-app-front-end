import { ADD_COUPON, DELETE_COUPON, GEL_ALL_COUPONS, GET_SPECIFIC_COUPON, UPDATE_COUPON } from "../type"

const initialState = {
   addCoupon: [],
   allCoupons: [],
   oneCoupon: [],
   updateCoupon: [],
   deleteCoupon: [],
   loading: true
}

const couponReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_COUPON:
         return{
            ...state,
            addCoupon: action.payload,
            loading: false
         }
      case GEL_ALL_COUPONS:
         return{
            ...state,
            allCoupons: action.payload,
            loading: false
         }
      case GET_SPECIFIC_COUPON:
         return{
            ...state,
            oneCoupon: action.payload,
            loading: false
         }
      case UPDATE_COUPON:
         return{
            ...state,
            updateCoupon: action.payload,
            loading: false
         }
      case DELETE_COUPON:
         return{
            ...state,
            deleteCoupon: action.payload,
            loading: false
         }
      default:
         return state
   }
}

export default couponReducer