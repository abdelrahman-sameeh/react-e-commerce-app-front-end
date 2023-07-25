import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllProductInBrand } from '../../redux/actions/productAction'

const ProductsInBrandHook = () => {
   const brandId = useParams().id
   const dispatch = useDispatch()

   const run = async () => {
      await dispatch(getAllProductInBrand(brandId, 3))
   }
   useEffect(() => {
      run()
   }, [])

   const getProductsInBrandResponse = useSelector(state => state.allProduct.productsInBrand)
   console.log(getProductsInBrandResponse);
   let products, pagination
   if (getProductsInBrandResponse && getProductsInBrandResponse.data) {
      products = getProductsInBrandResponse.data
      pagination = getProductsInBrandResponse.paginationResult
   }

   const getNum = async (num) => {
      await dispatch(getAllProductInBrand(brandId, 3, num))
   }

   return [products, pagination, getNum]
}

export default ProductsInBrandHook