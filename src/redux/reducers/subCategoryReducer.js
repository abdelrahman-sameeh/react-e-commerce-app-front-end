import { ADD_SUB_CATEGORY, GET_ALL_SUB_CATEGORY_ON_CATEGORY, GET_ERROR, GET_SPECIFIC_SUB_CATEGORY } from "../type";

const initialState = {
   subCategory: null,
   loading: true
}

const subCategoryReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_SUB_CATEGORY:
         return {
            ...state,
            subCategory: action.payload,
            loading: false
         }
      case GET_ALL_SUB_CATEGORY_ON_CATEGORY:
         return {
            ...state,
            subCategory: action.payload,
            loading: false
         }
      case GET_ERROR:
         return {
            ...state,
            subCategory: action.payload,
            loading: false
         }
         

      default:
         return state
   }

}


export default subCategoryReducer