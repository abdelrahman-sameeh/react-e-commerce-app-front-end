import React from 'react'
import AddAddressHook from '../../custom hook/address/add-address-hook'
import { Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

const UserAddAddressesContainer = () => {
   const [
      loading,
      isPress,
      address,
      addressDetails,
      phone,
      city,
      postalCode,
      handleChangeAddress,
      handleChangeAddressDetails,
      handleChangePhone,
      handleChangeCity,
      handleChangePostalCode,
      handleAddAddress
   ] = AddAddressHook()

   return (
      <div>
         <form >
            <input onChange={handleChangeAddress} value={address} type="text" className='form-control  fs-5 mt-1' placeholder='العنوان' />
            <input onChange={handleChangeAddressDetails} value={addressDetails} type="text" className='form-control  fs-5 mt-1' placeholder='تفاصيل العنوان' />
            <input onChange={handleChangePhone} value={phone} type="phone" className='form-control fs-5  mt-1' placeholder='موبايل' />
            <input onChange={handleChangeCity} value={city} type="text" className='form-control  fs-5 mt-1' placeholder='المدينه' />
            <input onChange={handleChangePostalCode} value={postalCode} type="number" className='form-control  fs-5 mt-1' placeholder='الرمز البريدى' />
            <div className="d-flex justify-content-end align-items-center mt-2">
               <button onClick={handleAddAddress} className="btn btn-dark fs-5 d-flex gap-2">
                  اضافه عنوان جديد
                  {loading&& isPress && <Spinner animation='border' variant='light' />}
               </button>
            </div>
         </form>
         <ToastContainer />
      </div>
   )
}

export default UserAddAddressesContainer