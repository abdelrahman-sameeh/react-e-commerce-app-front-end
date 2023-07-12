import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getSpecificProduct } from '../../redux/actions/productAction'

const BestSaleProductHook = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllProducts())
   }, [])

   const products = useSelector(state => state.allProduct.products)

   

   return [products]
}

export default BestSaleProductHook