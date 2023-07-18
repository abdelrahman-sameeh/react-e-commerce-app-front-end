import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userChangePassword } from "../../redux/actions/userAction"
import { notify } from "../useNotification"
import { useEffect } from "react"

const UserProfileHook = () => {

   const dispatch = useDispatch()

   const [oldPassword, setOldPassword] = useState()
   const [newPassword, setNewPassword] = useState()
   const [passwordConfirm, setPasswordConfirm] = useState()
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)

   let user = ''
   if (localStorage.getItem('user')) {
      user = JSON.parse(localStorage.getItem('user'))
   }

   const changePasswordResponse = useSelector(state => state.user.changePassword)

   console.log(changePasswordResponse);

   const handleOldPassword = (e) => {
      setOldPassword(e.target.value)
   }
   const handleNewPassword = (e) => {
      setNewPassword(e.target.value)
   }
   const handlePasswordConfirm = (e) => {
      setPasswordConfirm(e.target.value)
   }


   const handleChangePassword = async (e) => {
      e.preventDefault();
      const data = {
         currentPassword: oldPassword,
         password: newPassword,
         passwordConfirm,
      }

      if (newPassword !== passwordConfirm) {
         notify('يجب ان تكون كلمه المرور وتأكيد كلمه المرور متشابهان', 'warn')
         return
      }

      if (newPassword.length < 6) {
         notify('يجب ان تكون كلمه المرور اكبر من 6 حروف ', 'warn')
         return
      }
      setIsPress(true)
      setLoading(true)
      await dispatch(userChangePassword(data))
      setLoading(false)
      setIsPress(false)

   }


   useEffect(() => {
      if (!loading) {
         setLoading(true)
         if (changePasswordResponse.status === 200) {
            notify('تم تغير كلمة السر بنجاح', 'success')
         } else {
            if (changePasswordResponse.data && changePasswordResponse.data.status === 'fail') {
               if (changePasswordResponse.data.message === 'User recently changed password! Please login again..') {
                  notify('تم تغير كلمه السر مأخرا من فضلك سجل الدخول مجددا', 'warn')
               }
            }
         }
      }
   }, [loading])




   return [user, loading, isPress, oldPassword, newPassword, passwordConfirm, handleOldPassword, handleNewPassword, handlePasswordConfirm, handleChangePassword]
}

export default UserProfileHook