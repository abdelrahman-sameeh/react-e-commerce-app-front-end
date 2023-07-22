import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSpecificCoupon, updateCoupon } from '../../redux/actions/couponAction'
import { notify } from '../useNotification'

const AdminUpdateCouponHook = () => {
   
   const dispatch = useDispatch()
   const [coupon, setCoupon] = useState('')
   const [expire, setExpire] = useState('')
   const [discount, setDiscount] = useState('')
   const [getOneLoading, setGetOneLoading] = useState(true)
   const [updateLoading, setUpdateLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)
   const handleChangeCoupon = (e) => setCoupon(e.target.value)
   const handleChangeExpire = (e) => setExpire(e.target.value)
   const handleChangeDiscount = (e) => setDiscount(e.target.value)
   const couponId = useParams().id


   // to get data of specific coupon
   const run = async () => {
      setGetOneLoading(true)
      await dispatch(getSpecificCoupon(couponId))
      setGetOneLoading(false)
   }

   useEffect(() => {
      run()
   }, [])

   const getSpecificCouponResponse = useSelector(state => state.coupons.oneCoupon)

   // set data in inputs
   useEffect(() => {
      if (!getOneLoading) {
         if (getSpecificCouponResponse.status === 200) {
            const coupon = getSpecificCouponResponse.data.data
            console.log(coupon);
            setCoupon(coupon.name)
            setDiscount(coupon.discount)
            setExpire(coupon.expire.split("T")[0])
         }
      }

   }, [getOneLoading])



   // handle update 
   const handleUpdateCoupon = async (e) => {
      e.preventDefault();
      // validation
      if (!coupon || !expire || !discount) {
         notify('من فضلك اكمل البيانات', 'warn')
         return
      }
      if (+discount > 100 || +discount < 1) {
         notify('  نسبه الخصم من 1% الى 100 %', 'warn')
         return
      }
      const dataNow = new Date().toISOString().split('T')[0]
      if (dataNow > expire) {
         notify(`ادخل تاريخ بعد تاريخ اليوم`, 'warn')
         return
      }

      const data = {
         name: coupon,
         expire,
         discount
      }



      setUpdateLoading(true)
      setIsPress(true)
      await dispatch(updateCoupon(couponId, data))
      setUpdateLoading(false)
      setIsPress(false)
   }

   const updateCouponResponse = useSelector(state=>state.coupons.updateCoupon)

   // set result in notify 
   useEffect(() => {
      if (!updateLoading) {
         if (updateCouponResponse.status === 200) {
            notify('تم تعديل الكوبون بنجاح', 'success')
         }
         if (updateCouponResponse.status === 400 && updateCouponResponse.data.message === `Duplicate field value: "${coupon}". Please use another value!`) {
            notify('هذا الكوبون موجود بالفعل من فضلك ادخل اسم اخر', 'error')
         }
      } 
   }, [updateLoading])


   return [updateLoading, isPress, coupon, expire, discount, handleChangeCoupon, handleUpdateCoupon, handleChangeExpire, handleChangeDiscount]
}

export default AdminUpdateCouponHook