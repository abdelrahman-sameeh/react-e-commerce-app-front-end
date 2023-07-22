import React from 'react'
import AdminUpdateCouponHook from '../../custom hook/coupon/update-coupon-hook'
import { Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

const AdminUpdateCouponContainer = () => {
   const [updateLoading, isPress, coupon, expire, discount, handleChangeCoupon, handleUpdateCoupon, handleChangeExpire, handleChangeDiscount] = AdminUpdateCouponHook()
   return (
      <div>
         <form action="">
            <input onChange={handleChangeCoupon} value={coupon} type="text" className="form-control fs-5 mt-1" placeholder='اسم الكوبون' />
            <input onChange={handleChangeDiscount} value={discount} type="number" className="form-control fs-5 mt-1" placeholder='  نسبه الخصم من 1% الى 100 % ' />
            <input onChange={handleChangeExpire} value={expire} type="date" className="form-control fs-5 mt-1" placeholder='تاريخ الانتهاء' />
            <div className="d-flex justify-content-end align-items-center mt-2">
               <button onClick={handleUpdateCoupon} className="btn btn-dark fs-5">تعديل
                  {isPress && updateLoading && <Spinner animation='border' variant='light' />}
               </button>
            </div>
         </form>
         <ToastContainer />
      </div>
   )
}

export default AdminUpdateCouponContainer