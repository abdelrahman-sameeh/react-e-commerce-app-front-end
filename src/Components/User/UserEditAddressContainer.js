import React from 'react'
import SubTitle from '../Utilty/SubTitle'

const UserEditAddressContainer = () => {
   return (
      <div>
         <SubTitle title='تعديل العنوان' />
         <form action="" className='p-3 rounded bg-light mt-3'>
            <input className='form-control mb-2 bg-light' type="text" name="editAddressName" id=""  value='العنوان' placeholder='العنوان ...'  />
            <textarea className='form-control mb-2 bg-light' name="editAddressDescription" id="" value='هذا وصف ' placeholder='وصف العنوان ...'  ></textarea>
            <input className='form-control mb-2 bg-light' type="text" name="phoneNumber" id=""  value='01003982268'  placeholder='رقم الهاتف' />
            <div className="d-flex justify-content-end">
               <button className='btn btn-dark'>حفظ التعديلات</button>
            </div>
         </form>
      </div>
   )
}

export default UserEditAddressContainer