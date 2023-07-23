import { useEffect, useState } from "react"
import { applyCouponToCArt, getAllProductInCart } from "../../redux/actions/cartAction"
import { useDispatch, useSelector } from "react-redux"
import { notify } from "../useNotification"

const ApplyCouponHook = () => {

   const [couponName, setCouponName] = useState('')
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)

   const dispatch = useDispatch()

   const handleChangeCoupon = (e) => {
      setCouponName(e.target.value)
   }

   const handleApplyCoupon = async (e) => {
      e.preventDefault();
      
      setLoading(true)
      setIsPress(true)
      await dispatch(applyCouponToCArt(couponName))
      await dispatch(getAllProductInCart())
      setLoading(false)
      setIsPress(false)
   }

   const applyCouponResponse = useSelector(state=>state.cart.applyCoupon)
   console.log(applyCouponResponse);

   useEffect(()=>{
      if(!loading){
         if(applyCouponResponse.status === 200){
            notify('تم تطبيق كود الخصم', 'success');
         }
         
         if(applyCouponResponse.status === 400 && applyCouponResponse.data.message === 'Coupon is invalid or has expired'){
            notify('هذا الكود غير صالح', 'error');
            
         }
      }
   }, [loading])

   return [loading, isPress, couponName, handleChangeCoupon, handleApplyCoupon]
}

export default ApplyCouponHook