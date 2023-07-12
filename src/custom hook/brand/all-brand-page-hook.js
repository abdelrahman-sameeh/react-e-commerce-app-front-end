import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBrands } from '../../redux/actions/brandAction'

const AllBrandPageHook = () => {


   const dispatch = useDispatch()
   const brands = useSelector(state=>state.allBrand.brands)
   


   useEffect(()=>{
      dispatch(getAllBrands(20))
   }, [])

   const getPageNum = (pageNum) => {
      dispatch(getAllBrands(20, pageNum))
   }
   
   


   return [brands, getPageNum]
}

export default AllBrandPageHook