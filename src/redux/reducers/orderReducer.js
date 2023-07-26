import { ADD_CASH_ORDER, UPDATE_DELIVER_STATUS, UPDATE_PAY_STATUS, USER_GET_ALL_ORDERS } from "../type"

const initialState = {
   addCashOrder: [],
   deliverStatus: [],
   payStatus: [],
   loading: true
}

export const orderReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_CASH_ORDER:
         return {
            ...state,
            addCashOrder: action.payload,
            loading: false,
         }
      case USER_GET_ALL_ORDERS:
         return {
            ...state,
            userAllOrders: action.payload,
            loading: false,
         }
      case UPDATE_DELIVER_STATUS:
         return {
            ...state,
            deliverStatus: action.payload,
            loading: false,
         }
      case UPDATE_PAY_STATUS:
         return {
            ...state,
            payStatus: action.payload,
            loading: false,
         }
      default:
         return state
   }
}