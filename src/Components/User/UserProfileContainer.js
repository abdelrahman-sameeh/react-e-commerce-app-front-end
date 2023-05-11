import React from 'react'
import SubTitle from '../Utilty/SubTitle'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

const UserProfileContainer = () => {
   return (
      <div>
         <SubTitle title='الصفحه الشخصيه' />
         <div className="p-3 rounded border bg-light">
            <div className="d-flex justify-content-between">
               <div className="userName">
                  <span>الاسم:</span> <span className='fs-5 text-black-50'> عبدالرحمن </span>
               </div>
               <div className="modify">
                  <Link to='/modify-profile' className='text-decoration-none text-dark'  >
                     تعديل <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
               </div>
            </div>
            <div className="phone my-3">
                  <span>رقم الهاتف:</span> <span className='fs-5 text-black-50'> 01003982268 </span>
            </div>
            <div className="email ">
                  <span>الايميل:</span> <span className='fs-5 text-black-50'> a@gmail.com </span>
            </div>
         </div>


         <SubTitle title='تغير كلمه المرور' />

         <form className='p-3 bg-light rounded' action="">
            <input className='form-control mb-2' type="password" placeholder='ادخل كلمه المرور القديمه' />
            <input className='form-control mb-2' type="password" placeholder='ادخل كلمه المرور الجديده' />
            <div className="d-flex justify-content-end">
               <button className='btn btn-dark'> تغير كلمه السر </button>
            </div>
         </form>


      </div>
   )
}

export default UserProfileContainer