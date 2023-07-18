import React from 'react'
import ForgetPasswordHook from '../../custom hook/auth/forget-password-hook'
import { ToastContainer } from 'react-toastify'
import { Spinner } from 'react-bootstrap'

const ForgetPassword = () => {
   const [email, isPress, loading, handleEmailChange, handleSubmit] = ForgetPasswordHook()
   return (
      <div className="page login-page bg-light">
         <div className="container">

            <div className="center mt-5 flex-column gap-3">
               <form className='d-flex flex-column gap-2 w-75' action="/login" method="post">
                  <span className="bold fs-3"> ارسال كود للتأكيد </span>
                  <input onChange={handleEmailChange} value={email} className='form-control text-center' name='email' type="email" placeholder='الايميل ...' />
                  <button onClick={handleSubmit} className='form-control btn btn-dark d-flex justify-content-center align-items-center gap-2'> ارسل الكود
                     {isPress && loading && <Spinner animation='border' variant='light' />}
                  </button>
               </form>
            </div>


         </div>
         <ToastContainer />
      </div>
   )
}

export default ForgetPassword