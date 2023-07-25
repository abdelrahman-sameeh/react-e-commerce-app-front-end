import React from 'react'
import { Link } from 'react-router-dom'
import GetAllAddressHook from '../../custom hook/address/get-all-addresses-hook'

const ChoseAddressPage = () => {
   const [addresses] = GetAllAddressHook()

   const setAddressInLocalStorage = (e) => {
      const targetAddress = addresses.filter(address => address._id === e.target.value)[0]
      localStorage.targetAddress = JSON.stringify(targetAddress)
   }

   return (
      <div className="page">
         <div className="container mt-5">
            <select onChange={setAddressInLocalStorage} className='form-control' name="" id="">
               <option selected> اختر عنوان </option>
               {addresses && addresses.map(address => <option value={address._id}> {address.details} </option>)}
            </select>
            <div className="d-flex justify-content-end align-items-center">
               <Link to='/order/payMethod' className='btn btn-dark mt-2' > التالى </Link>
            </div>
         </div>
      </div>
   )
}

export default ChoseAddressPage