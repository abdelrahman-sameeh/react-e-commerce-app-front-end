import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/authAction'
import { useEffect } from 'react'
import { notify } from '../useNotification'


const LoginHook = () => {

   const dispatch = useDispatch()

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)

   const res = useSelector(state => state.auth.loginUser)

   if(res && res.data){
      localStorage.setItem('user', JSON.stringify(res.data.data))
   }

   const handleEmailChange = (e) => {
      setEmail(e.target.value)
   }
   const handlePasswordChange = (e) => {
      setPassword(e.target.value)
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsPress(true)
      setLoading(true)
      await dispatch(login({
         email,
         password
      }))
      setLoading(false)
      setIsPress(false)
   }

   useEffect(() => {
      if (!loading) {
         if (res && res.status === 200 && res.data && res.data.token) {

            notify(`مرحبا ${res.data.data.name} , تم تسجيل الدخول بنجاح`, 'success');
            localStorage.setItem('token', res.data.token)
            setTimeout(() => {
               window.location = '/'
            }, 1000);

         } else {
            notify(`حدث خطأ اثناء تسجيل الدخول`);
            localStorage.removeItem('token')
         }

         if (res && res.data && res.data.message === 'Incorrect email or password') {
            notify(`الايميل او كلمه السر خطأ`);
            localStorage.setItem('token', res.data.token)
         }

      }
   }, [loading])



   return [email, password, loading, isPress, handleEmailChange, handlePasswordChange, handleSubmit]
}

export default LoginHook