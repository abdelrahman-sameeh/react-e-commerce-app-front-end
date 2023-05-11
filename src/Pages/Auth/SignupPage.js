import React from 'react'
import { Link } from 'react-router-dom'

function SignupPage() {
   return (
      <div className="page login-page container">

         <div className="center mt-5 flex-column gap-3">
            <form className='center flex-column gap-3 w-75' action="/signup" method="post">
               <span className="bold fs-3">  انشاء حساب جديد</span>
               <input className='form-control text-center' name='name' type="text" placeholder='الاسم ...' />
               <input className='form-control text-center' name='email' type="email" placeholder='الايميل ...' />
               <input className='form-control text-center' name='password' type="password" placeholder='كلمه السر ...' />
               <input className='form-control text-center' name='confirmPassword' type="password" placeholder='تأكيد كلمه السر ...' />
               <input className='form-control btn btn-dark' type="submit" value='انشاء حساب' />
            </form>
            <span>
               لديك حساب بالفعل
               <Link to='/login' className='text-danger text-decoration-none' > اضغط هنا </Link>
            </span>
         </div>

      </div>
   )
}

export default SignupPage