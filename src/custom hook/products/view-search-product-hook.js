import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductSearch } from '../../redux/actions/productAction'
import SideFilterHook from '../search/side-filter-hook'



const ViewSearchProductHook = () => {

   const  [categories, brands, handleChangeCategory, handleChangeBrand, priceFrom, priceTo, getQueryFromLocalStorage] = SideFilterHook()


   const dispatch = useDispatch()
   const products = useSelector(state => state.allProduct.products)

   const getProducts = async () => {
      const limit = 4;
      let word = ''
      if (localStorage.getItem('searchWord'))
         word = localStorage.getItem('searchWord')

      await dispatch(getAllProductSearch(`limit=${limit}&keyword=${word}`))
   }


   useEffect(() => {
      getProducts()
   }, [])





   // for pagination config
   const getNum = async (page) => {

      let query = `page=${page}`

      query += getQueryFromLocalStorage()

      console.log(query);

      await dispatch(getAllProductSearch(query))
   }

   const numberOfPages = (products && products.paginationResult) ? products.paginationResult.numberOfPages : 1


   const handleSortDropDown = (e) => {
      const sort = e.target.dataset.sort;
      // store sort 
      localStorage.setItem('sort', sort)

      const query = getQueryFromLocalStorage()

      

      dispatch(getAllProductSearch(query))

   }




   return [products, numberOfPages, getNum, handleSortDropDown]

}

export default ViewSearchProductHook