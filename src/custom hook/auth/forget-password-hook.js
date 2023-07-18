import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { forgetPassword } from '../../redux/actions/authAction'
import { useEffect } from 'react'
import { notify } from '../useNotification'

const ForgetPasswordHook = () => {

   const [email, setEmail] = useState('')
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)

   const dispatch = useDispatch()

   const forgetPasswordResponse = useSelector(state => state.auth.forgetPassword)
   console.log(forgetPasswordResponse)

   const handleEmailChange = (e) => {
      setEmail(e.target.value)
   }
   const handleSubmit = async (e) => {
      e.preventDefault();

      localStorage.email = email

      setIsPress(true)
      setLoading(true)
      await dispatch(forgetPassword(email))
      setLoading(false)
      setIsPress(false)

   }


   useEffect(() => {
      if (!loading) {
         // if code sent successfully
         //       navigate to /verify reset code page
         // else
         //       notify error

         if (forgetPasswordResponse.status === 200) {
            notify('تم ارسال الكود بنجاح', 'success')

            setTimeout(() => {
               window.location = '/verifyResetCode'
            }, 1000);

         } else {
            notify('حدث خطأ اثناء ارسال الكود')
         }



      }
   }, [loading])

   return [email, isPress, loading, handleEmailChange, handleSubmit]
}

export default ForgetPasswordHook