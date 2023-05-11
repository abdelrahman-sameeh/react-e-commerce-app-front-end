import React from 'react'
import CartProduct from './CartProduct'
import { Link } from 'react-router-dom'

const CartContainer = () => {
   return (
      <div className='row align-items-start'>
         <div className=" products col col-9">
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
         </div>
         <div className="col col-3 bg-light p-3 rounded">
            <div className="d-flex">
               <input className='form-control border-dark text-center' type="text" name="discount" id="" placeholder='كود الخصم'/>
               <input className='form-control border-dark btn btn-dark py-2 px-3' style={{width: 'fit-content'}} type="submit" value='تطبيق' id="" />
            </div>
            <input className='form-control my-3 text-center' disabled value='200' type="text" />
            <Link  className='btn btn-dark w-100 ' to='/order/paymentMethod' > اتمام الشراء </Link>
         </div>
      </div>
   )
}

export default CartContainer