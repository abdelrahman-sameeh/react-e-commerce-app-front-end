import React from 'react'
import { Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import VerifyResetCodeHook from '../../custom hook/auth/verify-reset-code-hook'

const VerifyResetCodePage = () => {

   const [resetCode, isPress, loading, handleResetCodeChanged, handleSubmit] = VerifyResetCodeHook()

   return (
      <div className="page login-page bg-light">
         <div className="container">

            <div className="center mt-5 flex-column gap-3">
               <form className='d-flex  flex-column gap-2 w-75' action="/login" method="post">
                  <span className="bold fs-3"> تأكيد الكود </span>
                  <input onChange={handleResetCodeChanged} value={resetCode} className='form-control text-center' type="phone" maxLength={6} placeholder='ادخل الكود' />
                  <button onClick={handleSubmit} className='form-control btn btn-dark d-flex justify-content-center align-items-center gap-2'> تأكيد
                     {isPress && loading && <Spinner animation='border' variant='light' />}
                  </button>
               </form>
            </div>
         </div>
         <ToastContainer />
      </div>)
}

export default VerifyResetCodePage