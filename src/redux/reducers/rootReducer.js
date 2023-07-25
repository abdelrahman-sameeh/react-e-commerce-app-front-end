
import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer';
import brandReducer from './brandReducer';
import subCategoryReducer from './subCategoryReducer';
import productReducer from './productReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import { reviewsReducer } from './reviewsReducer';
import { wishListReducer } from './wishListReducer';
import couponReducer from './couponReducer';
import addressReducer from './addressReducer';
import { cartReducer } from './cartReducer';
import { orderReducer } from './orderReducer';



const rootReducer = combineReducers({
   category: categoryReducer,
   allBrand: brandReducer,
   allSubCategory: subCategoryReducer,
   allProduct: productReducer,
   auth: authReducer,
   user: userReducer,
   reviews: reviewsReducer,
   wishList: wishListReducer,
   coupons: couponReducer, 
   addresses: addressReducer,
   cart: cartReducer,
   order: orderReducer
})


export default rootReducer;