import React from 'react'
import { Link } from 'react-router-dom'
import RegisterHook from '../../custom hook/auth/register-hook'
import { ToastContainer } from 'react-toastify'
import { Spinner } from 'react-bootstrap'


function SignupPage() {


   const [
      username,
      email,
      phone,
      password,
      confirmPassword,
      loading,
      isPress,
      handleUserName,
      handleEmail,
      handlePhone,
      handlePassword,
      handleConfirmPassword,
      handleSubmit
   ] = RegisterHook()       

   return (
      <div className="page login-page bg-light">
         <div className="container">
            <div className="center py-5 rounded mt-5 flex-column gap-3">
               <form className='center flex-column gap-3 w-75' >
                  <span className="bold fs-3">  انشاء حساب جديد</span>
                  <input onChange={handleUserName} value={username} className='form-control text-center' type="text" placeholder='الاسم ...' />
                  <input onChange={handleEmail} value={email} className='form-control text-center' type="email" placeholder='الايميل ...' />
                  <input onChange={handlePhone} value={phone} className='form-control text-center' type="phone" placeholder='الهاتف ...' />
                  <input onChange={handlePassword} value={password} className='form-control text-center' type="password" placeholder='كلمه السر ...' />
                  <input onChange={handleConfirmPassword} value={confirmPassword} className='form-control text-center' type="password" placeholder='تأكيد كلمه السر ...' />
                     <button onClick={handleSubmit} className='btn btn-dark d-flex align-items-center gap-2 justify-content-center w-100'>
                        انشاء حساب
                     {
                        isPress && loading && <Spinner animation='border' variant='light' />
                     }
                     </button>
               </form>
               <span> 
                  لديك حساب بالفعل
                  <Link to='/login' className='text-danger text-decoration-none' > اضغط هنا </Link>
               </span>
            </div>

         </div>
         <ToastContainer />
      </div>
   )
}

export default SignupPage