import React from 'react'
import AdminAddCouponHook from '../../custom hook/coupon/add-coupon-hook'
import { ToastContainer } from 'react-toastify'
import { Spinner } from 'react-bootstrap'

const AddCouponContainer = () => {

  const [loading, isPress, coupon, expire, discount, handleChangeCoupon, handleAddCoupon, handleChangeExpire, handleChangeDiscount] = AdminAddCouponHook()

  return (  
    <div>
      <form action="">
        <input onChange={handleChangeCoupon} value={coupon} type="text" className="form-control fs-5 mt-1" placeholder='اسم الكوبون' />
        <input onChange={handleChangeDiscount} value={discount} type="number" className="form-control fs-5 mt-1" placeholder='  نسبه الخصم من 1% الى 100 % ' />
        <input onChange={handleChangeExpire} value={expire} type="date" className="form-control fs-5 mt-1" placeholder='تاريخ الانتهاء' />
        <div className="d-flex justify-content-end align-items-center mt-2">
          <button onClick={handleAddCoupon} className="btn btn-dark fs-5">اضافه
            {isPress && loading && <Spinner animation='border' variant='light' />}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default AddCouponContainer