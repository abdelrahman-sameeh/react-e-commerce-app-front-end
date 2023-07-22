import React from 'react'
import { useState } from 'react'
import { notify } from '../useNotification'
import { useDispatch, useSelector } from 'react-redux'
import { userUpdateData } from '../../redux/actions/userAction'
import { useEffect } from 'react'

const UpdateUserDataHook = () => {

   const [name, setName] = useState('')
   const [phone, setPhone] = useState('')
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)

   const dispatch = useDispatch()
   const updateDataResponse = useSelector(state => state.user.updateUserData)
   console.log(updateDataResponse);

   useEffect(() => {
      if (localStorage.getItem('user')) {
         const user = JSON.parse(localStorage.getItem('user'))
         setName(user.name)
         setPhone(user.phone)
      }
   }, [])


   const handleChangeName = (e) => {
      setName(e.target.value)
   }
   const handleChangePhone = (e) => {
      setPhone(e.target.value)
   }


   const handleChangeData = async (e) => {
      e.preventDefault();

      const data = {
         name,
         phone
      }

      if (name.length < 3) {
         notify('يجب ان يكون الاسم اكبر من 3 حروف', 'warn')
         return
      }
      if (phone && phone.length < 10) {
         notify('من فضلك ادخل رقم صحيح', 'warn')
         return
      }


      setIsPress(true)
      setLoading(true)
      await dispatch(userUpdateData(data))
      setLoading(false)
      setIsPress(false)

   }


   useEffect(() => {
      if (!loading) {
         setLoading(true)
         if (updateDataResponse.status === 200) {
            notify('تم تعديل البيانات بنجاح', 'success')
            // change user in localStorage
            localStorage.user = JSON.stringify(updateDataResponse.data.data.user)
         }
         if (updateDataResponse.data) {
            if (updateDataResponse.data.message === 'User recently changed password! Please login again..') {
               notify('تم تغير كلمه السر مأخرا من فضلك سجل الدخول مجددا', 'warn')
            }
         }
         if (updateDataResponse.data && updateDataResponse.data.errors) {
            if (updateDataResponse.data.errors[0].msg === 'accept only egypt phone numbers') {
               notify('ادخل رقم موبايل صحيح', 'error')
            }
         }

      }
   }, [loading])




   return [name, phone, loading, isPress, handleChangeName, handleChangePhone, handleChangeData]

}

export default UpdateUserDataHook