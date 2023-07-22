import React from 'react'
import UserAddress from './UserAddress'
import GetAllAddressHook from '../../custom hook/address/get-all-addresses-hook'

const UserAddressesContainer = () => {

   const [allAddresses] = GetAllAddressHook()

   return (
      <div className='user-addresses '>
         {(allAddresses && allAddresses.length) ? allAddresses.map(address => {
            return <UserAddress address={address}/>
         }) : (null)}
      </div>
   )
}

export default UserAddressesContainer