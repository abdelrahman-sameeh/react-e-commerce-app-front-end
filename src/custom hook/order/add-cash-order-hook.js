import { useState } from 'react';
import { addCashOrder } from '../../redux/actions/orderAction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notify } from '../useNotification';

const AddCashOrderOrderHook = () => {

   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)
   const dispatch = useDispatch()


   let address, cartId, totalPrice;
   if (localStorage.targetAddress) {
      address = JSON.parse(localStorage.targetAddress)
   }
   if (localStorage.cartId) {
      cartId = localStorage.cartId
   }
   if (localStorage.totalPrice) {
      totalPrice = localStorage.totalPrice
   }

   console.log(address);
   const [paymentStatus, setPaymentStatus] = useState('')
   const handleChangePaymentStatus = (e) => {
      setPaymentStatus(e.target.value)
   }

   const handleAddOrder = async (e) => {
      e.preventDefault()
      if (paymentStatus === '') {
         notify('من فضلك حدد طريقه الدفع', 'warn')
         return
      }
      if (paymentStatus === 'cash') {
         setLoading(true)
         setIsPress(true)
         await dispatch(addCashOrder(cartId, { shippingAddress: address }))
         setLoading(false)
         setIsPress(false)
      }
   }

   const addCashOrderResponse = useSelector(state => state.order.addCashOrder)
   console.log(addCashOrderResponse);
   useEffect(() => {
      if (!loading) {
         if (addCashOrderResponse.status === 201) {
            notify('تم اضافه العنصر الى الطلبات', 'success')
            localStorage.removeItem('address')
            localStorage.removeItem('cartId')
            setTimeout(() => {
               window.location.href = '/user/allOrders'
            }, 1000)
         }
         if (addCashOrderResponse.status === 404) {
            notify('id لا يوجد سله لهذا ', 'error')
         }
      }
   }, [loading])

   return [loading, isPress, totalPrice, handleChangePaymentStatus, handleAddOrder]

}


export default AddCashOrderOrderHook