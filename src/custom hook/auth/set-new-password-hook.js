import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword } from '../../redux/actions/authAction'
import { notify } from '../useNotification'

const SetNewPasswordHook = () => {
   const [newPassword, setNewPassword] = useState('')
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)

   const dispatch = useDispatch()

   const resetPasswordResponse = useSelector(state => state.auth.userResetPassword)
   console.log(resetPasswordResponse);

   const handleNewPasswordChanged = (e) => {
      setNewPassword(e.target.value)
   }
   const handleSubmit = async (e) => {
      e.preventDefault();

      console.log(localStorage.email);

      setIsPress(true)
      setLoading(true)
      await dispatch(updatePassword({
         email: localStorage.email,
         newPassword
      }))
      setLoading(false)
      setIsPress(false)

   }

   useEffect(() => {
      if (!loading) {

         if (resetPasswordResponse.status === 200) {
            notify('تم تغير كلمه السر بنجاح', 'success')
            setTimeout(() => {
               window.location = '/login'
            }, 1000);
         } else {

            notify('حدث خطأ اثناء تأكيد الكود')

         }


      }
   }, [loading])

   return [newPassword, isPress, loading, handleNewPasswordChanged, handleSubmit]

}

export default SetNewPasswordHook