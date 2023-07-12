
import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer';
import brandReducer from './brandReducer';
import subCategoryReducer from './subCategoryReducer';
import productReducer from './productReducer';



const rootReducer = combineReducers({
   category: categoryReducer,
   allBrand: brandReducer,
   allSubCategory: subCategoryReducer,
   allProduct: productReducer
})


export default rootReducer;