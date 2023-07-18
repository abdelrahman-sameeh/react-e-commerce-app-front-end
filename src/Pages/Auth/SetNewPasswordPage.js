import React from 'react'
import { Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import SetNewPasswordHook from '../../custom hook/auth/set-new-password-hook'

const SetNewPasswordPage = () => {

   const [newPassword, isPress, loading, handleNewPasswordChanged, handleSubmit] = SetNewPasswordHook()

   return (
      <div className="page login-page bg-light">
         <div className="container">

            <div className="center mt-5 flex-column gap-3">
               <form className='center  flex-column gap-3 w-75' action="/login" method="post">
                  <span className="bold fs-3"> تغير كلمه السر </span>
                  <input onChange={handleNewPasswordChanged} value={newPassword} className='form-control text-center' type="password" placeholder='ادخل كلمه السر الجديده' />
                  <button onClick={handleSubmit} className='form-control btn btn-dark d-flex justify-content-center align-items-center gap-2'> تأكيد
                     {isPress && loading && <Spinner animation='border' variant='light' />}
                  </button>
               </form>
            </div>


         </div>
         <ToastContainer />
      </div>)
}

export default SetNewPasswordPage