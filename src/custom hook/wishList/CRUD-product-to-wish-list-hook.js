import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToWishList, getAllProductInWishList, removeProductFromWishList } from '../../redux/actions/wishListAction';
import { useEffect } from 'react';
import { notify } from '../useNotification';
import { getUser } from '../../redux/actions/userAction';

const CRUDProductToWishListHook = () => {

   const [addLoading, setAddLoading] = useState(true)
   const [removeLoading, setRemoveLoading] = useState(true)

   const dispatch = useDispatch()



   const user = useSelector(state => state.user.getUser)
   // get user 
   const run = async () => {
      await dispatch(getUser())
   }

   const wishListProducts = useSelector(state => state.wishList.allProductInWishList)
   // get all product in wishList
   const getAllProductInWish = async () => {
      await dispatch(getAllProductInWishList())
   }

   useEffect(() => {
      run()
      getAllProductInWish()
   }, [])




   // add product to wish list
   const handleAddProductToWishList = async (productId) => {
      const data = {
         productId
      }
      setAddLoading(true)
      await dispatch(addProductToWishList(data))
      await dispatch(getUser())
      await dispatch(getAllProductInWishList())
      setAddLoading(false)
   }

   const addProductToWishListResponse = useSelector(state => state.wishList.addOneProduct)



   useEffect(() => {
      if (!addLoading) {
         setAddLoading(true)
         if (addProductToWishListResponse.status === 200) {
            notify('تمت الاضافه الى المفضله بنجاح', 'success')
         }


         if (
            addProductToWishListResponse && addProductToWishListResponse.data &&
            addProductToWishListResponse.data.message === 'Invalid Token. please login again'
         ) {
            notify('من فضلك قم بتسجيل الدخول اولا', 'warn')
         }

      }
   }, [addLoading])


   const removeProductToWishListResponse = useSelector(state => state.wishList.removeOneProduct)


   // remove product form wishlist
   const handleRemoveProductFromWishList = async (productId) => {
      setRemoveLoading(true)
      await dispatch(removeProductFromWishList(productId))
      await dispatch(getUser())
      await dispatch(getAllProductInWishList())
      setRemoveLoading(false)
   }


   useEffect(() => {
      if (!removeLoading) {
         setRemoveLoading(true)
         if (removeProductToWishListResponse.status === 200) {
            notify('تمت الازالة من المفضله بنجاح', 'success')
         }
      }
   }, [removeLoading])



   return [wishListProducts, user, handleAddProductToWishList, handleRemoveProductFromWishList]
}

export default CRUDProductToWishListHook