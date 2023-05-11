import React from 'react'
import SubTitle from '../Utilty/SubTitle'

const UserModifyProfileContainer = () => {
   return (
      <div>
         <SubTitle title='تعديل المعلومات الشخصيه' />
         <form className='p-3 bg-light rounded border' action="">
            <input className='form-control' type="text" name='username' value='عبدالرحمن' />
            <input className='form-control my-2' type="text" name='userPhone' value='01003982268'   />
            <input className='form-control mb-2' type="text" disabled value='a@gmail.com' />
            <div className="d-flex justify-content-end">
               <button className='btn btn-dark'> حفظ التعديلات </button>
            </div>
         </form>
      </div>
   )
}

export default UserModifyProfileContainer