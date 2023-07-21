import { CREATE_REVIEW, GET_ALL_REVIEWS, GET_ONE_REVIEW, REMOVE_REVIEW, UPDATE_ONE_REVIEW } from "../type"

const initialState = {
   createReview: [],
   allReviews: [],
   removeOneReview: [],
   getOneReview: [],
   updateOneReview: [],
   loading: true
}



export const reviewsReducer = (state = initialState, action) => {
   switch (action.type) {
      case CREATE_REVIEW:
         return {
            ...state,
            createReview: action.payload,
            loading: false
         }
      case GET_ALL_REVIEWS:
         return {
            ...state,
            allReviews: action.payload,
            loading: false
         }
      case REMOVE_REVIEW:
         return {
            ...state,
            removeOneReview: action.payload,
            loading: false
         }
      case GET_ONE_REVIEW:
         return {
            ...state,
            getOneReview: action.payload,
            loading: false
         }
      case UPDATE_ONE_REVIEW:
         return {
            ...state,
            updateOneReview: action.payload,
            loading: false
         }
      default:
         return state
   }
}