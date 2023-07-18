import React from 'react'
import { Link } from 'react-router-dom'
import LoginHook from '../../custom hook/auth/login-hook'
import { Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

function LoginPage() {

  const [email, password, loading, isPress, handleEmailChange, handlePasswordChange, handleSubmit] = LoginHook()

  return (
    <div className="page login-page bg-light">
      <div className="container">

        <div className="center mt-5 flex-column gap-3">
          <form className='center  flex-column gap-3 w-75' action="/login" method="post">
            <span className="bold fs-3"> تسجيل الدخول </span>
            <input onChange={handleEmailChange} value={email} className='form-control text-center' name='email' type="email" placeholder='الايميل ...' />
            <input onChange={handlePasswordChange} value={password} className='form-control text-center' name='password' type="password" placeholder='كلمه السر ...' />
            <button onClick={handleSubmit} className='form-control btn btn-dark d-flex justify-content-center align-items-center gap-2'> تسجيل الدخول
              {isPress && loading && <Spinner animation='border' variant='light' />}
            </button>
          </form>
          <span>
            ليس لديك حساب
            <Link to='/signup' className='text-danger text-decoration-none'  > اضغط هنا </Link>
          </span>
          <span>
            هل نسيت كلمه السر
            <Link to='/forgetPassword' className='text-danger text-decoration-none' > اضغط هنا </Link>
          </span>
        </div>


        <Link className='me-2' to='/admin/allProducts'> admin  </Link>

        <Link to='/user/allOrders'> user </Link>

      </div>
      <ToastContainer />
    </div>
  )
}

export default LoginPage