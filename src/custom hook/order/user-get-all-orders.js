import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserOrder } from '../../redux/actions/orderAction'

const UserAllOrdersHook = () => {
   let user;
   if (localStorage.user) user = JSON.parse(localStorage.user)

   const dispatch = useDispatch()

   const run = async () => {
      await dispatch(getAllUserOrder())
   }

   useEffect(()=>{
      run()
   }, [])

   const getAllOrdersResponse = useSelector(state=>state.order.userAllOrders)


   let orders;
   if(getAllOrdersResponse && getAllOrdersResponse.data && getAllOrdersResponse.data.data){
      orders= getAllOrdersResponse.data.data
   }

   return [orders, user]

}

export default UserAllOrdersHook