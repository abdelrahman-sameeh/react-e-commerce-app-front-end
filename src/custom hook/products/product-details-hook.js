import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import mobile2 from '../../Images/mobile2.png'
import { useEffect } from 'react'
import { getSameProducts, getSpecificProduct } from '../../redux/actions/productAction'
import { useParams } from 'react-router-dom'
import { getSpecificCategory } from '../../redux/actions/categoryAction'
import { getSpecificBrand } from '../../redux/actions/brandAction'


const ProductDetailsHook = () => {

   const product = useSelector(state => state.allProduct.product)
   const productId = useParams().id
   const category = useSelector(state => state.category.oneCategory)
   const oneBrand = useSelector(state => state.allBrand.oneBrand)
   const sameProducts = useSelector(state=>state.allProduct.sameProduct)



   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getSpecificProduct(productId))
      

   }, [])

   useEffect(() => {
      if (product && product.data) {
         dispatch(getSpecificCategory(product.data.category))
         dispatch(getSpecificBrand(product.data.brand))
         dispatch(getSameProducts(product.data.category))
      }

   }, [product])

   // for gallery slider *******************
   let images = [];

   if (product && product.data && product.data.images.length > 0) {
      images = product.data.images.map(image => {
         return {
            original: image
         }
      })
   } else {
      images = [
         { 
            original: mobile2,
         }
      ]
   }
   // *******************





   return [product, images, category, oneBrand, sameProducts]
}

export default ProductDetailsHook