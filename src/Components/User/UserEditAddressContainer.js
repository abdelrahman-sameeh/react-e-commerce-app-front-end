import React from 'react'
import SubTitle from '../Utilty/SubTitle'
import EditAddressHook from '../../custom hook/address/edit-address-hook'
import { Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

const UserEditAddressContainer = () => {

   const [
      alias,
      details,
      phone,
      city,
      postalCode,
      updateLoading,
      isPress,
      handleChangeAlias,
      handleChangeAddressDetails,
      handleChangePhone,
      handleChangeCity,
      handleChangePostalCode,
      handleUpdateAddress
   ]= EditAddressHook()

   return (
      <div>
         <SubTitle title='تعديل العنوان' />
         <form action="" className='p-3 rounded bg-light mt-3'>
            <input onChange={handleChangeAlias} className='form-control mb-2 bg-light' type="text" id="" value={alias} placeholder='العنوان ...' />
            <textarea onChange={handleChangeAddressDetails} className='form-control mb-2 bg-light' id="" value={details} placeholder='وصف العنوان ...'  ></textarea>
            <input onChange={handleChangePhone} className='form-control mb-2 bg-light' type="number" value={phone} placeholder='رقم الهاتف' />
            <input onChange={handleChangeCity} className='form-control mb-2 bg-light' type="text" value={city} placeholder='المدينه' />
            <input onChange={handleChangePostalCode} className='form-control mb-2 bg-light' type="text" value={postalCode} placeholder='الرقم البريدى' />
            <div className="d-flex justify-content-end">
               <button onClick={handleUpdateAddress} className='btn btn-dark'>حفظ التعديلات
                  {updateLoading && isPress && <Spinner animation='border' variant='light' />}
               </button>
            </div>
         </form>
         <ToastContainer />
      </div>
   )
}

export default UserEditAddressContainer