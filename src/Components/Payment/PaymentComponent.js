import React from 'react'
import SubTitle from '../Utilty/SubTitle'


const PaymentComponent = () => {
   return (
      <>
         <SubTitle title='اختر طريقه الدفع' />
         <form action="/order/payMethod" method='post'>
            <div className="box bg-light border rounded p-3">
               <div className="d-flex align-items-center gap-2">
                  <input className='' type="radio" name="payMethod" id="1" />
                  <label className='' htmlFor="1"> الدفع عن طريق البطاقه الائتمانيه </label>
               </div>
               <br />
               <div className="d-flex align-items-center gap-2">
                  <input className='' type="radio" name="payMethod" id="2" />
                  <label className='' htmlFor="2"> الدفع عند الاستلام </label>
               </div>
            </div>
            <div className="d-flex justify-content-end mt-3 align-items-center gap-2">
               <input type="hidden" value='13000' name='price' />
               <div style={{ width: 'fit-content' }} className="fs-5"> 13000 جنيه </div>
               <button style={{ width: 'fit-content' }} className='btn btn-dark'>اتمام الشراء</button>
            </div>
         </form>
      </>
   )
}

export default PaymentComponent