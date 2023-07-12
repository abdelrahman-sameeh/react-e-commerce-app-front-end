import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/actions/productAction'

const LatestOutfitProducts = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllProducts())
   }, [])

   const products = useSelector(state => state.allProduct.products)

   return [products]
}

export default LatestOutfitProducts