import { useInsertData } from "../../hooks/useInsertData"
import { ADD_CASH_ORDER } from "../type"

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