import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrderDeliveredStatus, updateOrderPaidStatus } from '../../redux/actions/orderAction'
import { notify } from '../useNotification'

const UpdateOrderStatus = (order) => {
   const dispatch = useDispatch()
   const [deliverLoading, setDeliverLoading] = useState(true)
   const [deliverPress, setDeliverPress] = useState(false)

   const [payLoading, setPayLoading] = useState(true)
   const [payPress, setPayPress] = useState(false)


   const [isDelivered, setIsDelivered] = useState(order.isDelivered)
   const [isPaid, setIsPaid] = useState(order.isPaid)


   // update deliver status
   const handleChangeDelivered = (e) => {
      setIsDelivered(e.target.value)
   }


   const changeDeliveredStatus = async (orderId) => {
      const data = { isDelivered: isDelivered == 'true' ? true : false }
      setDeliverLoading(true)
      setDeliverPress(true)
      await dispatch(updateOrderDeliveredStatus(orderId, data))
      setDeliverLoading(false)
      setDeliverPress(false)
   }
   const changeDeliveredResponse = useSelector(state => state.order.deliverStatus)


   useEffect(() => {
      if (!deliverLoading) {
         if (changeDeliveredResponse.status === 200) {
            notify('تم تعديل الحاله بنجاح')
         }
      }
   }, [deliverLoading])


   // update paid status
   const handleChangePaid = (e) => {
      setIsPaid(e.target.value)
   }


   const changePaidStatus = async (orderId) => {
      const data = { isPaid: isPaid == 'true' ? true : false }
      setPayLoading(true)
      setPayPress(true)
      await dispatch(updateOrderPaidStatus(orderId, data))
      setPayLoading(false)
      setPayPress(false)
   }

   const changePaidResponse = useSelector(state => state.order.payStatus)
   console.log(changePaidResponse);


   useEffect(() => {
      if (!payLoading) {
         if (changePaidResponse.status === 200) {
            notify('تم تعديل الحاله بنجاح')
         }
      }
   }, [payLoading])


   return [
      payLoading,
      payPress,
      deliverLoading,
      deliverPress,
      isDelivered,
      isPaid,
      handleChangeDelivered,
      changeDeliveredStatus,
      handleChangePaid,
      changePaidStatus
   ]
}

export default UpdateOrderStatus