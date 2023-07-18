import React from 'react'
import SubTitle from '../Utilty/SubTitle'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import UserProfileHook from '../../custom hook/user/user-profile-hook'
import { ToastContainer } from 'react-toastify'
import { Spinner } from 'react-bootstrap'

const UserProfileContainer = () => {

   const [user, loading, isPress, oldPassword, newPassword, passwordConfirm, handleOldPassword, handleNewPassword, handlePasswordConfirm, handleChangePassword] = UserProfileHook()

   return (
      <div>
         <SubTitle title='الصفحه الشخصيه' />
         <div className="p-3 rounded border bg-light">
            <div className="d-flex justify-content-between">
               <div className="userName">
                  <span>الاسم:</span> <span className='fs-5 text-black-50'> {user.name} </span>
               </div>
               <div className="modify">
                  <Link to='/modify-profile' className='text-decoration-none text-dark'  >
                     تعديل <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
               </div>
            </div>
            <div className="phone my-3">
               <span>رقم الهاتف:</span> <span className='fs-5 text-black-50'> {user.phone} </span>
            </div>
            <div className="email ">
               <span>الايميل:</span> <span className='fs-5 text-black-50'> {user.email} </span>
            </div>
         </div>


         <SubTitle title='تغير كلمه المرور' />

         <form className='p-3 bg-light rounded' action="">
            <input className='form-control mb-2' onChange={handleOldPassword} type="password" value={oldPassword} placeholder='ادخل كلمه المرور القديمه' />
            <input className='form-control mb-2' onChange={handleNewPassword} type="password" value={newPassword} placeholder='ادخل كلمه المرور الجديده' />
            <input className='form-control mb-2' onChange={handlePasswordConfirm} type="password" value={passwordConfirm} placeholder='تأكيد كلمه المرور الجديده' />
            <div className="d-flex justify-content-end">
               <button onClick={handleChangePassword} className='btn btn-dark d-flex justify-content-center align-items-center gap-2'> تغير كلمه السر 
                  {
                     loading && isPress && <Spinner animation='border' variant='light' />
                  }
               </button>
            </div>
         </form>
         <ToastContainer />
 
      </div>
   )
}

export default UserProfileContainer