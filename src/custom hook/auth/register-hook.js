import React from 'react'
import { useState } from 'react';
import { notify } from '../useNotification';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/actions/authAction';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterHook = () => {

   const [username, setUserName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)


   const dispatch = useDispatch()
   const navigate = useNavigate()

   const response = useSelector(state => state.auth.createUser)
   console.log(response);


   const handleUserName = (e) => {
      setUserName(e.target.value)
   }
   const handleEmail = (e) => {
      setEmail(e.target.value)
   }
   const handlePhone = (e) => {
      setPhone(e.target.value)
   }
   const handlePassword = (e) => {
      setPassword(e.target.value)
   }
   const handleConfirmPassword = (e) => {
      setConfirmPassword(e.target.value)
   }
   const ValidateEmail = (mail) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
         return (true)
      }
      return (false)
   }
   const ValidatePhone = (phone) => {
      if (/^01[0-2]\d{1,8}$/.test(phone)) {
         return (true)
      }
      return (false)
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      // set isPress to true 
      setIsPress(true)

      // validation 
      if (!username || !password || !confirmPassword || !phone || !email) {
         notify('من فضلك اكمل البيانات', 'warn')
         return
      }
      if (confirmPassword !== password) {
         notify('يجب ان تكون كلمه السر وتأكيد كلمه السر متطابقين', 'warn')
         return
      }
      if (username.length < 3) {
         notify('يجب ان يكون الاسم اكبر من 3 حروف', 'warn')
         return
      }
      if (password.length < 6) {
         notify('يجب ان تكون كلمة السر اكبر من 6 حروف', 'warn')
         return
      }
      if (!ValidateEmail(email)) {
         notify(`
         من فضلك ادخل ايميل صحيح
         example: a@a.aa 
         `, 'warn')
         return
      }
      if (!ValidatePhone(phone) || phone.length <= 10) {
         notify(`من فضلك ادخل رقم صحيح`, 'warn')
         return
      }


      const data = {
         name: username.trim(),
         email: email.trim(),
         password: password.trim(),
         passwordConfirm: confirmPassword.trim(),
         phone: phone.trim()
      }

      setLoading(true)
      await dispatch(signup(data))
      setLoading(false)

   }

   useEffect(() => {
      // if signup successfully
      if (!loading) {
         setIsPress(false)
         if (response && response.status === 201 && response.data.token) {
            localStorage.setItem('token', response.data.token)
            setTimeout(() => {
               navigate('/login')
            }, 2000);
            notify('تم انشاء الحساب بنجاح', 'success')
            setUserName('')
            setEmail('')
            setPhone('')
            setPassword('')
            setConfirmPassword('')
         } else if (loading && isPress) {
            notify('حدث خطأ حاول فى وقت لاحق', 'error')
         }

         // display error
         if (response && response.status === 400) {
            response.data.errors.map(err => {
               if (err.msg === 'E-mail already in use') {
                  notify('هذا الايميل مستخدم بالفعل', 'warn')
               }
               if (err.msg === 'accept only egypt phone numbers') {
                  notify(`من فضلك ادخل رقم صحيح`, 'warn')
               }
            })
         }

      }
   }, [loading])




   return [
      username,
      email,
      phone,
      password,
      confirmPassword,
      loading,
      isPress,
      handleUserName,
      handleEmail,
      handlePhone,
      handlePassword,
      handleConfirmPassword,
      handleSubmit
   ]
}

export default RegisterHook