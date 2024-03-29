import { CREATE_BRAND, GET_ALL_BRAND, GET_SPECIFIC_BRAND } from "../type";

const initialState = {
   brands: [],
   createBrand: [],
   oneBrand: [],
   loading: true
}


const brandReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_ALL_BRAND:
         return {
            ...state,
            brands: action.payload,
            loading: false
         }
      case CREATE_BRAND:
         return {
            ...state,
            createBrand: action.payload,
            loading: false
         }
      case GET_SPECIFIC_BRAND:
         return {
            ...state,
            oneBrand: action.payload,
            loading: false
         }
      default:
         return state
   }
}


export default brandReducer