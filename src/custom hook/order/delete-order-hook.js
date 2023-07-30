import React, { useEffect, useState } from 'react'
import { deleteOrder, getAllUserOrder } from '../../redux/actions/orderAction'
import { useDispatch, useSelector } from 'react-redux'
import { notify } from '../useNotification'

const DeleteOrderHook = () => {

   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)
   const dispatch = useDispatch()

   const handleDeleteOrder = async (orderId) => {
      setLoading(true)
      setIsPress(true)
      await dispatch(deleteOrder(orderId))
      await dispatch(getAllUserOrder())
      setLoading(false)
      setIsPress(false)
   }
   const deleteOrderResponse = useSelector(state => state.order.deleteOne)
   console.log(deleteOrderResponse);
   useEffect(() => {
      if (!loading) {
         if (deleteOrderResponse.status === 200) {
            notify('تم حذف الطلب بنجاح', 'success')
         }
         if (deleteOrderResponse.data.message === `You can't cancel this order, order has been shipped`) {
            notify(' لا يمكنك حذف الطلب لقد تم شحنه بالفعل', 'error')
         }
      }
   }, [loading])

   return [loading, isPress, handleDeleteOrder]
}

export default DeleteOrderHook