import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { verifyResetCode } from '../../redux/actions/authAction'
import { notify } from '../useNotification'

const VerifyResetCodeHook = () => {
   const [resetCode, setResetCode] = useState('')
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)

   const dispatch = useDispatch()

   const verifyResetCodeResponse = useSelector(state => state.auth.verifyResetCode)

   console.log(verifyResetCodeResponse);

   const handleResetCodeChanged = (e) => {
      setResetCode(e.target.value)
   }
   const handleSubmit = async (e) => {
      e.preventDefault();

      setIsPress(true)
      setLoading(true)
      await dispatch(verifyResetCode(resetCode))
      setLoading(false)
      setIsPress(false)

   }

   useEffect(() => {
      if (!loading) {

         if(verifyResetCodeResponse.status === 200){
            notify('تم تأكيد الكود بنجاح', 'success')
            setTimeout(() => {
               window.location = '/setNewPassword'
            }, 1000);

         }else{   
            notify('حدث خطأ اثناء تأكيد الكود')
         }

      }
   }, [loading])

   return [resetCode, isPress, loading, handleResetCodeChanged, handleSubmit]
}

export default VerifyResetCodeHook