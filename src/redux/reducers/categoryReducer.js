/* eslint-disable no-unreachable */
import { ADD_CATEGORY, GET_ALL_CATEGORY, GET_ERROR, GET_SPECIFIC_CATEGORY } from "../type";

const initialState = {
   category: [],
   oneCategory: [],
   loading: true
}


const categoryReducer = (state = initialState, action) => {

   switch (action.type) {
      case GET_ALL_CATEGORY:
         return {
            ...state,
            category: action.payload,
            loading: false
         }
      case ADD_CATEGORY:
         return {
            ...state,
            data: action.payload,
            loading: false
         }
      case GET_SPECIFIC_CATEGORY:
         return {
            ...state,
            oneCategory: action.payload,
            loading: false
         }

      case GET_ERROR:
         return {
            ...state,
            error: action.payload,
            loading: false
         }


      default:
         return state
   }

}



export default categoryReducer