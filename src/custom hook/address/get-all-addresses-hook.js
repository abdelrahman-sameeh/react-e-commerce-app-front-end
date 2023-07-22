import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAddresses } from '../../redux/actions/addressAction';
import { useEffect } from 'react';

const GetAllAddressHook = () => {

   const allAddressesResponse = useSelector(state => state.addresses.allAddresses)
   let allAddresses;
   if (allAddressesResponse && allAddressesResponse.status === 200) {
      allAddresses = allAddressesResponse.data.data
   }
   console.log(allAddresses);
   const dispatch = useDispatch()

   const run = async () => {
      await dispatch(getAllAddresses())
   }
   useEffect(() => {
      run()
   }, [])

   return [allAddresses]
}

export default GetAllAddressHook