import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllProductInCategory } from '../../redux/actions/productAction'

const ProductsInCategoryHook = () => {
   const categoryId = useParams().id
   const dispatch = useDispatch()

   const run = async () => {
      await dispatch(getAllProductInCategory(categoryId, 3))
   }
   useEffect(() => {
      run()
   }, [])

   const getProductsInCategoryResponse = useSelector(state => state.allProduct.productsInCategory)
   console.log(getProductsInCategoryResponse);
   let products, pagination
   if (getProductsInCategoryResponse && getProductsInCategoryResponse.data) {
      products = getProductsInCategoryResponse.data
      pagination = getProductsInCategoryResponse.paginationResult
   }

   const getNum = async (num) => {
      await dispatch(getAllProductInCategory(categoryId, 3, num))
   }

   return [products, pagination, getNum]
}

export default ProductsInCategoryHook