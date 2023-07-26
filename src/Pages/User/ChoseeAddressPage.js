import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GetAllAddressHook from '../../custom hook/address/get-all-addresses-hook'

const ChoseAddressPage = () => {
   const [addresses] = GetAllAddressHook()
   const [address, setAddress] = useState(undefined)

   const setAddressInLocalStorage = (e) => {
      const targetAddress = addresses.filter(address => address._id === e.target.value)[0]
      setAddress(targetAddress)
   }
   
   useEffect(() => {
      localStorage.targetAddress = JSON.stringify(address)
   }, [address])

   const handleNavigateToNextPage = e => {
      if (address === undefined) {
         e.preventDefault();
      }
   }

   return (
      <div className="page">
         <div className="container mt-5">
            <select onChange={setAddressInLocalStorage} className='form-control' name="" id="">
               <option selected> اختر عنوان </option>
               {addresses && addresses.map(address => <option value={address._id}> {address.details} </option>)}
            </select>
            <div className="d-flex justify-content-end align-items-center">
               <Link onClick={handleNavigateToNextPage} to='/order/payMethod' className='btn btn-dark mt-2' > التالى </Link>
            </div>
         </div>
      </div>
   )
}

export default ChoseAddressPage