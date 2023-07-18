
import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer';
import brandReducer from './brandReducer';
import subCategoryReducer from './subCategoryReducer';
import productReducer from './productReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';



const rootReducer = combineReducers({
   category: categoryReducer,
   allBrand: brandReducer,
   allSubCategory: subCategoryReducer,
   allProduct: productReducer,
   auth: authReducer,
   user: userReducer,
})


export default rootReducer;