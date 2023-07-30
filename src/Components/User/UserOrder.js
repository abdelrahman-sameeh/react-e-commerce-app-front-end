import React from 'react'
import UpdateOrderStatus from '../../custom hook/order/update-order-status'
import { Spinner } from 'react-bootstrap'
import DeleteOrderHook from '../../custom hook/order/delete-order-hook'
import { ToastContainer } from 'react-toastify'

const UserOrder = ({ order, numberOfOrder, user }) => {
   let products = order.cartItems || []

   const [
      payLoading,
      payPress,
      deliverLoading,
      deliverPress,
      isDelivered,
      isPaid,
      handleChangeDelivered,
      changeDeliveredStatus,
      handleChangePaid,
      changePaidStatus
   ] = UpdateOrderStatus(order)


   const [loading, isPress, handleDeleteOrder] = DeleteOrderHook()

   return (
      <div className='rounded border mt-2'>

         <div className="order-products bg-light rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
               <div className="order-number fs-4 bold">
                  طلب رقم {numberOfOrder + 1}
               </div>
               <div onClick={() => handleDeleteOrder(order._id)} className="btn btn-dark">
                  {loading && isPress && <Spinner variant='light' animation='border'/>}
                  ازاله الطلب
               </div>
            </div>

            {
               products && products.map(item => {
                  return <div className="order-product d-flex gap-2 mt-2 border rounded p-2 mb-3">
                     <div style={{ width: '100px', height: '150px', objectFit: 'cover' }} className="image">
                        <img className='w-100' src={item.product.imageCover} alt="" />
                     </div>
                     <div className="flex1">
                        <h5 className='fw-bold'> {item.product.title} </h5>
                        <div className="rate">
                           <span className='text-warning'> {item.product.ratingsAverage} </span> <span className='text-black-50'>({item.product.ratingsQuantity} تقييم)</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-start gap-2 my-2">
                           <span >لون المنتج</span>
                           <span style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: item.color }} ></span>
                        </div>
                        <div className="d-flex align-items-center justify-content-start gap-2 my-2">
                           <span htmlFor="">الكميه</span>
                           <input style={{ width: 'fit-content' }} className='form-control' type="number" disabled value={item.count} />
                        </div>
                        <div className="d-flex align-items-center justify-content-start gap-2 my-2">
                           <span htmlFor="">السعر</span>
                           <input style={{ width: 'fit-content' }} className='form-control' type="number" disabled value={item.price} />
                        </div>
                     </div>
                  </div>
               })
            }



            <div className="d-flex justify-content-between align-items-center">

               {
                  (user && user.role === 'admin')
                     ?
                     (
                        <form onSubmit={(e) => e.preventDefault()} className='d-flex gap-2 w-75 align-items-center' action="">
                           <span style={{ width: '150px' }}>اختر حاله التوصيل</span>
                           <select onChange={handleChangeDelivered} value={isDelivered} className='form-control' >
                              <option value={false}>قيد الانتظار</option>
                              <option value={true}>تم التوصيل</option>
                           </select>
                           <button onClick={() => changeDeliveredStatus(order._id)} className="btn btn-dark d-flex justify-content-center align-items-center gap-2">
                              {deliverLoading && deliverPress && <Spinner animation='border' variant='light' />}
                              تعديل
                           </button>
                        </form>
                     )

                     : (<div className="status">
                        الحاله
                        <span className='text-black-50'> {order.isDelivered ? 'تم التوصيل' : 'قيد الانتظار'} </span>
                     </div>)
               }

               <div className="price fs-4 fw-bold"> {order.totalOrderPrice} </div>


            </div>

            {
               (user && user.role === 'admin') ? (
                  <>
                     <form onSubmit={(e) => e.preventDefault()} className='d-flex gap-2 w-75 align-items-center my-2' action="">
                        <span style={{ width: '150px' }}>اختر حاله الدفع</span>
                        <select onChange={handleChangePaid} value={isPaid} className='form-control' >
                           <option value={false}>لم يتم الدفع</option>
                           <option value={true}>تم الدفع</option>
                        </select>
                        <button onClick={() => changePaidStatus(order._id)} className="btn btn-dark d-flex justify-content-center align-items-center gap-2">
                           {payPress && payLoading && <Spinner animation='border' variant='light' />}
                           تعديل
                        </button>
                     </form>
                     <div className="user-details">
                        <div className='fs-5'>اسم العميل : {order.user.name}</div>
                        <div className='fs-5'>رقم الهاتف : {order.user.phone}</div>
                        <div className='fs-5'>الايميل : {order.user.email}</div>
                        <div className='fs-5'>طريقه الدفع : {(order.paymentMethodType === 'cash') ? 'دفع عند الاستلام' : 'دفع اون لاين'}</div>
                     </div>
                  </>
               ) : (
                  <div>
                     حاله الدفع
                     <span className='text-black-50'> {order.isPaid ? 'تم الدفع' : 'لم يتم الدفع'} </span>
                  </div>
               )
            }

            {
               order.shippingAddress &&
               <div className="shipping-address fs-5">
                  <div> مدينه : {order.shippingAddress.city} </div>
                  <div> تفاصيل العنوان :  {order.shippingAddress.details} </div>
                  <div> الهاتف :  {order.shippingAddress.phone} </div>
                  <div> الرمز البريدى :  {order.shippingAddress.postalCode} </div>
               </div>
            }

         </div>
         <ToastContainer />
      </div>
   )
}

export default UserOrder