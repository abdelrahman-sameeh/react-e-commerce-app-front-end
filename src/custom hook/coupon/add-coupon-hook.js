import { useEffect, useState } from 'react'
import { notify } from '../useNotification'
import { useDispatch, useSelector } from 'react-redux'
import { addCoupon } from '../../redux/actions/couponAction'

const AdminAddCouponHook = () => {

   const dispatch = useDispatch()
   const [coupon, setCoupon] = useState('')
   const [expire, setExpire] = useState('')
   const [discount, setDiscount] = useState('')
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)
   const handleChangeCoupon = (e) => setCoupon(e.target.value)
   const handleChangeExpire = (e) => setExpire(e.target.value)
   const handleChangeDiscount = (e) => setDiscount(e.target.value)

   const addCouponResponse = useSelector(state => state.coupons.addCoupon)
   console.log(addCouponResponse);

   const handleAddCoupon = async (e) => {
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

      setLoading(true)
      setIsPress(true)
      await dispatch(addCoupon(data))
      setLoading(false)
      setIsPress(false)


   }


   useEffect(() => {
      if (!loading) {
         if (addCouponResponse.status === 201) {
            notify('تم اضافه الكوبون بنجاح', 'success')
         }
         if (addCouponResponse.status === 400 && addCouponResponse.data.message === `Duplicate field value: "${coupon}". Please use another value!`) {
            notify('هذا الكوبون موجود بالفعل من فضلك ادخل اسم اخر', 'error')
         }
      }
   }, [loading])

   return [loading, isPress, coupon, expire, discount, handleChangeCoupon, handleAddCoupon, handleChangeExpire, handleChangeDiscount]
}

export default AdminAddCouponHook