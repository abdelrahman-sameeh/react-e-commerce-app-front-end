import React from 'react'
import AdminAllCouponsHook from '../../custom hook/coupon/all-coupons-hook'
import { Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

const AllCouponsContainer = () => {
   const [deleteLoading, deletePress, allCoupons, handleDeleteCoupon] = AdminAllCouponsHook()
   return (
      <>
         <div className='all-coupons'>
            {
               allCoupons && allCoupons.map(coupon => {
                  return <div key={coupon._id} className="coupon bg-light mt-2 p-3 rounded">
                     <div className="fs-5 mt-1">اسم الكوبون: <span className='fw-bold'>{coupon.name}</span> </div>
                     <div className="fs-5 mt-1"> نسبه الخصم:  <span className='fw-bold'>%{coupon.discount}</span> </div>
                     <div className="fs-5 mt-1"> تاريخ الانتهاء: <span className='fw-bold'>{coupon.expire.split('T')[0]}</span> </div>
                     <div className="control d-flex justify-content-end align-items-center gap-1">
                        <Link to={`/admin/updateCoupon/${coupon._id}`} className="btn btn-dark">تعديل</Link>
                        <button onClick={() => handleDeleteCoupon(coupon._id)} className="btn btn-dark">حذف
                        {deleteLoading && deletePress && <Spinner animation='border' variant='light' />}
                        </button>
                     </div>
                  </div>
               })
            }
            <ToastContainer />
         </div>
      </>
   )
}

export default AllCouponsContainer