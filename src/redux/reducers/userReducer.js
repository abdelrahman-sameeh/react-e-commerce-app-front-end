import { USER_CHANGE_PASSWORD, USER_UPDATE_DATA } from "../type";


const initialState = {
   changePassword: [],
   updateUserData:[],
   loading: true,
}

const userReducer = (state = initialState, action) => {

   switch (action.type) {
      case USER_CHANGE_PASSWORD:
         return {
            ...state,
            changePassword: action.payload,
            loading: false
         }
      case USER_UPDATE_DATA:
         return {
            ...state,
            updateUserData: action.payload,
            loading: false
         }

      default:
         return state
   }

}

export default userReducer