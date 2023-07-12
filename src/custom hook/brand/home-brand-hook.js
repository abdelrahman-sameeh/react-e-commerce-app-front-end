import React from 'react'
import { useEffect } from 'react'
import { getAllBrands } from '../../redux/actions/brandAction'
import { useDispatch, useSelector } from 'react-redux'

const HomeBrandHook = () => {

   let brands = useSelector(state => state.allBrand.brands)
   

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllBrands())
   }, [])

   
   return [brands]
}

export default HomeBrandHook