import React from 'react'

import mobile from '../../Images/mobile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CartProduct = () => {
   return (
      <div className='cart-product bg-light mb-2 rounded d-flex  align-items-start' style={{ height: '213px' }}>
         {/* image */}
         <div className="image" style={{ height: '213px', width: '180px' }}>
            <img src={mobile} className='h-100 w-100' style={{ objectFit: 'contain' }} alt="" />
         </div>

         {/* description */}
         <div className="cart-product-description flex1 h-100 px-4 py-2">
            <div className="d-flex justify-content-between align-items-center">
               <span> الالكترونيات </span>
               <button className='btn'> <FontAwesomeIcon icon={faTrash} /> ازاله </button>
            </div>
            <div className="cart-product-name mt-2">
               آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
               <span className="text-warning">
                  4.5
               </span>
            </div>
            <div className="product-category text-black-50 mt-3">
               الماركه
               : <span className='fw-bold fs-5 text-dark'> سامسونج </span>
            </div>
            <div className="color">
               <label className="phone-color bg-danger"></label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
               <div className="product-category text-black-50 mt-2 d-flex">
                  الكميه
                  <input type="number" className='form-control' />
               </div>
               <span className="price"> 300جنيه  </span>
            </div>
         </div>
      </div>
   )
}

export default CartProduct