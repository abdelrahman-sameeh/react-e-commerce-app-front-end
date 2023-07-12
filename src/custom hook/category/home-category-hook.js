import React from 'react'
import { useEffect } from 'react'
import { getAllCategory } from '../../redux/actions/categoryAction'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const HomeCategoryHook  = () => {
   const colors = [
      'rgba(139, 168, 206, 0.5)',
      'rgba(68, 160, 206, 0.5)',
      'rgba(206, 68, 204, 0.5)',
      'rgba(223, 155, 60, 0.5)',
      'rgba(139, 68, 206, 0.5)',
   ]
   const dispatch = useDispatch()
   const category = useSelector(state => state.category.category)
   const loading = useSelector(state => state.category.loading)
   const categoryError = useSelector(state => state.category.error)
   const [isLoading, setIsLoading] = useState()
   let i = 0;


   


   useEffect(() => {
      setIsLoading(loading)
   }, [loading])



   useEffect(() => {
      dispatch(getAllCategory())
   }, [])


   return [isLoading, category, i, colors]

}

export default HomeCategoryHook 