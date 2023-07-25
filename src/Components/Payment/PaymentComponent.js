import React from 'react'
import SubTitle from '../Utilty/SubTitle'
import AddCashOrderOrderHook from '../../custom hook/order/add-cash-order-hook'
import { Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'


const PaymentComponent = () => {

   const [loading, isPress, totalPrice, handleChangePaymentStatus, handleAddOrder]= AddCashOrderOrderHook()

   return (
      <>
         <SubTitle title='اختر طريقه الدفع' />
         <form >
            <div className="box bg-light border rounded p-3">
               <div className="d-flex align-items-center gap-2">
                  <input onChange={handleChangePaymentStatus} className='' value='card' type="radio" name="payMethod" id="1" />
                  <label className='' htmlFor="1"> الدفع عن طريق البطاقه الائتمانيه </label>
               </div>
               <br />
               <div className="d-flex align-items-center gap-2">
                  <input onChange={handleChangePaymentStatus} className='' value='cash' type="radio" name="payMethod" id="2" />
                  <label className='' htmlFor="2"> الدفع عند الاستلام </label>
               </div>   
            </div>
            <div className="d-flex justify-content-end mt-3 align-items-center gap-2">
               <input type="hidden" value='13000' name='price' />
               <div style={{ width: 'fit-content' }} className="fs-5"> {totalPrice} جنيه</div>
               <button onClick={handleAddOrder} style={{ width: 'fit-content' }} className='btn btn-dark'>
                  {loading && isPress && <Spinner variant='light' animation='border' />}
                  اتمام الشراء</button>
            </div>
            <ToastContainer />  
         </form>
      </>
   )
}

export default PaymentComponent