import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="page login-page bg-light">
      <div className="container">

        <div className="center mt-5 flex-column gap-3">
          <form className='center  flex-column gap-3 w-75' action="/login" method="post">
            <span className="bold fs-3"> تسجيل الدخول </span>
            <input className='form-control text-center' name='email' type="email" placeholder='الايميل ...' />
            <input className='form-control text-center' name='password' type="password" placeholder='كلمه السر ...' />
            <input className='form-control btn btn-dark' type="submit" value='تسجيل الدخول' />
          </form>
          <span>
            ليس لديك حساب
            <Link to='/signup' className='text-danger text-decoration-none'  > اضغط هنا </Link>
          </span>
          <span>
            هل نسيت كلمه السر
            <Link to='/' className='text-danger text-decoration-none' > اضغط هنا </Link>
          </span>
        </div>


        <Link className='me-2' to='/admin/allProducts'> admin  </Link>

        <Link to='/user/allOrders'> user </Link>

      </div>
    </div>
  )
}

export default LoginPage