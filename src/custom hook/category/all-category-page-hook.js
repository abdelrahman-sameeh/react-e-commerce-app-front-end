import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'

const AllCategoryPageHook = () => {

   const dispatch = useDispatch()
   // get category from redux
   const category = useSelector(state => state.category.category)

   // when first load 
   useEffect(() => {
      dispatch(getAllCategory(15))
   }, [])

   // when press in pagination
   // get number page from child (pagination)
   const getPageNum = (pageNum) => {
      dispatch(getAllCategory(15, pageNum))
   }

   return [category, getPageNum]

}

export default AllCategoryPageHook