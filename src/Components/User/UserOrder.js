import React from 'react'

import mobile from '../../Images/mobile.png'

const UserOrder = () => {
   return (
      <div className='rounded border'>

         <div className="order-products bg-light rounded p-3">

            <div className="order-product d-flex gap-2">
               <div style={{ width: '100px', height: '150px', objectFit: 'cover' }} className="image">
                  <img className='w-100' src={mobile} alt="" />
               </div>
               <div className="flex1">
                  <div className="order-number fs-4 bold">
                     طلب رقم 12
                  </div>
                  <div className="order-description fs-5">
                     آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم (برودكت) أحمر
                     <div className="rate">
                        <span className='text-warning'>4.5</span> <span className='text-black-50'>(160 تقييم)</span>
                     </div>
                  </div>
                  <div className="d-flex align-items-center gap-2 my-2">
                     <label htmlFor="">الكميه</label>
                     <input style={{ width: 'fit-content' }} className='form-control' type="number" name="" id="" value='0' />
                  </div>
               </div>
            </div>

            



            <div className="d-flex justify-content-between align-items-center">
               <div className="status">
                  الحاله <span className='text-black-50'>{'قيد التنفيذ'}</span>
               </div>
               <div className="price"> 40000 </div>
            </div>
         </div>
      </div>
   )
}

export default UserOrder