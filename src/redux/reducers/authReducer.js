import { SIGN_UP, LOGIN, FORGET_PASSWORD, VERIFY_RESET_CODE, UPDATE_NEW_PASSWORD, USER_RESET_PASSWORD } from "../type"

const initialState = {
   createUser: [],
   loginUser: [],
   forgetPassword: [],
   verifyResetCode:[],
   userResetPassword: [],
   loading: true
}


const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SIGN_UP:
         return {
            ...state,
            createUser: action.payload,
            loading: false,
         }
      case LOGIN:
         return {
            ...state,
            loginUser: action.payload,
            loading: false,
         }
      case FORGET_PASSWORD:
         return {
            ...state,
            forgetPassword: action.payload,
            loading: false,
         }
      case VERIFY_RESET_CODE:
         return {
            ...state,
            verifyResetCode: action.payload,
            loading: false,
         }
      case USER_RESET_PASSWORD:
         return {
            ...state,
            userResetPassword: action.payload,
            loading: false,
         }
      default:
         return state
   }
}


export default authReducer