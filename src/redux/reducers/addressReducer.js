import { ADD_ADDRESS, DELETE_ADDRESS, GET_ALL_ADDRESSES, GET_SPECIFIC_ADDRESS, UPDATE_ADDRESS } from "../type"

const initialState = {
   addAddress: [],
   allAddresses: [],
   oneAddress: [],
   updateAddress: [],
   deleteAddress: [],
   loading: true,
}
const addressReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_ALL_ADDRESSES:
         return {
            ...state,
            allAddresses: action.payload,
            loading: false
         }
      case GET_SPECIFIC_ADDRESS:
         return {
            ...state,
            oneAddress: action.payload,
            loading: false
         }
      case ADD_ADDRESS:
         return {
            ...state,
            addAddress: action.payload,
            loading: false
         }
      case UPDATE_ADDRESS:
         return {
            ...state,
            updateAddress: action.payload,
            loading: false
         }
      case DELETE_ADDRESS:
         return {
            ...state,
            deleteAddress: action.payload,
            loading: false
         }

      default:
         return state
   }
}

export default addressReducer