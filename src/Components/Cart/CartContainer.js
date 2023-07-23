import React from 'react'
import CartProduct from './CartProduct'
import { Link } from 'react-router-dom'
import AllCartItemsHook from '../../custom hook/cart/all-cart-items-hook'
import { Col, Spinner } from 'react-bootstrap'
import ApplyCouponHook from '../../custom hook/cart/apply-coupon-hook'
import { ToastContainer } from 'react-toastify'

const CartContainer = () => {

   const [cartItems, totalCartPrice, totalAfterDiscount] = AllCartItemsHook()
   const [loading, isPress, couponName, handleChangeCoupon, handleApplyCoupon] = ApplyCouponHook()

   return (
      <div className='row align-items-start'>
         <Col sm='12' md='3' lg='3' className="bg-light p-3 rounded mt-2">
            <div className="d-flex">
               <input onChange={handleChangeCoupon} value={couponName} className='form-control border-dark text-center' type="text" name="discount" id="" placeholder='كود الخصم' />
               <button onClick={handleApplyCoupon} className='form-control border-dark btn btn-dark py-2 px-3' style={{ width: 'fit-content' }} >
                  {loading && isPress && <Spinner variant='light' animation='border' />}
                  تطبيق
               </button>
            </div>
            {
               totalAfterDiscount ?
                  <div className='my-3'>
                     <div> السعر قبل الخصم : {totalCartPrice} جنية</div>
                     <div> السعر بعد الخصم : {totalAfterDiscount} جنية</div>
                  </div>
                  :
                  <span> السعر الاصلى: {totalCartPrice} جنية</span>
            }

            <Link className='btn btn-dark w-100 ' to='/order/payMethod' > اتمام الشراء </Link>
         </Col>
         <Col sm='12' md='9' lg='9' className="products mt-2">
            {
               cartItems && cartItems.length && cartItems.map(item => {
                  return <CartProduct item={item} />
               })
            }
         </Col>
         <ToastContainer />
      </div>
   )
}

export default CartContainer