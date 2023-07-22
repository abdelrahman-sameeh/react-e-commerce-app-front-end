import { useDispatch, useSelector } from "react-redux"
import { deleteCoupon, getAllCoupons } from "../../redux/actions/couponAction"
import { useEffect, useState } from "react"
import { notify } from "../useNotification"

const AdminAllCouponsHook = () => {

   const dispatch = useDispatch()
   const allCouponsResponse = useSelector(state => state.coupons.allCoupons)
   let allCoupons;
   if (allCouponsResponse && allCouponsResponse.data) {
      allCoupons = allCouponsResponse.data.data
   }

   // get all coupons
   const run = async () => {
      await dispatch(getAllCoupons())
   }
   useEffect(() => {
      run()
   }, [])


   // delete coupon
   const deleteCouponResponse = useSelector(state=>state.coupons.deleteCoupon)
   console.log(deleteCouponResponse);
   const [deleteLoading, setDeleteLoading] = useState(true)
   const [deletePress, setDeletePress] = useState(false)
   const handleDeleteCoupon = async (couponId) => {
      setDeleteLoading(true)
      setDeletePress(true)
      await dispatch(deleteCoupon(couponId))
      await dispatch(getAllCoupons())
      setDeleteLoading(false)
      setDeletePress(false)
   }

   useEffect(() => {
      if(!deleteLoading){
         if(deleteCouponResponse && deleteCouponResponse.status === 204){
            notify('تم حذف الكوبون بنجاح', 'success')
         }
      }
   }, [deleteLoading])


   return [deleteLoading, deletePress,allCoupons, handleDeleteCoupon]
}

export default AdminAllCouponsHook