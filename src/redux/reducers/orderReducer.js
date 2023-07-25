import { ADD_CASH_ORDER } from "../type"

const initialState = {
   addCashOrder: [],
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
      default:
         return state
   }
}