import React from 'react'
import SubTitle from '../Utilty/SubTitle'
import UpdateUserDataHook from '../../custom hook/user/update-data-hook'
import { Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

const UserModifyProfileContainer = () => {

   const [name, phone, loading, isPress, handleChangeName, handleChangePhone, handleChangeData] = UpdateUserDataHook()

   return (
      <div>
         <SubTitle title='تعديل المعلومات الشخصيه' />
         <form className='p-3 bg-light rounded border' action="">
            <input value={name} onChange={handleChangeName} className='form-control' type="text" name='username' placeholder='ادخل اسم اكبر من 3 حروف' />
            <input value={phone} onChange={handleChangePhone} className='form-control my-2' type="text" name='userPhone' placeholder='ادخل رقم هاتف مصرى او سعودى' />
            <input className='form-control mb-2' type="text" disabled value='a@gmail.com' />
            <div className="d-flex justify-content-end">
               <button onClick={handleChangeData} className='btn btn-dark d-flex justify-content-center align-items-center gap-2'> تغير كلمه السر
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

export default UserModifyProfileContainer