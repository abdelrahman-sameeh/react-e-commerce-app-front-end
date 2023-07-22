import { useState } from "react"

import { notify } from '../useNotification'
import { addAddress } from "../../redux/actions/addressAction"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const AddAddressHook = () => {

   const [address, setAddress] = useState('')
   const [addressDetails, setAddressDetails] = useState('')
   const [phone, setPhone] = useState('')
   const [city, setCity] = useState('')
   const [postalCode, setPostalCode] = useState('')
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)
   const dispatch = useDispatch()


   // handle change 
   const handleChangeAddress = (e) => setAddress(e.target.value)
   const handleChangeAddressDetails = (e) => setAddressDetails(e.target.value)
   const handleChangePhone = (e) => setPhone(e.target.value)
   const handleChangeCity = (e) => setCity(e.target.value)
   const handleChangePostalCode = (e) => setPostalCode(e.target.value)


   const handleAddAddress = async (e) => {
      e.preventDefault();


      // validation
      if (!address || !addressDetails || !phone || !city || !postalCode) {
         notify('من فضلك اكمل البيانات', 'warn')
         return
      }
      if (address.length <= 1) {
         notify('ادخل اسم عنوان اكبر من حرفين', 'warn')
         return
      }
      if (phone.length < 10) {
         notify('ادخل رقم هاتف صحيح', 'warn')
         return
      }



      const data = {
         alias: address,
         details: addressDetails,
         phone,
         city,
         postalCode,
      }

      setLoading(true)
      setIsPress(true)
      await dispatch(addAddress(data))
      setLoading(false)
      setIsPress(false)

   }

   const addAddressResponse = useSelector(state => state.addresses.addAddress)

   useEffect(() => {
      if (!loading) {
         if (addAddressResponse.status === 200) {
            notify('تم اضافه العنوان بنجاح', 'success')
            // reset inputs
            setAddress('')
            setAddressDetails('')
            setPhone('')
            setCity('')
            setPostalCode('')
         }
         if (addAddressResponse.status === 400 && addAddressResponse.data.message === `Duplicate field value: "${address}". Please use another value!`) {
            notify('العنوان موجود بالفعل', 'error')
         }
      }
   }, [loading])

   return [
      loading,
      isPress,
      address,
      addressDetails,
      phone,
      city,
      postalCode,
      handleChangeAddress,
      handleChangeAddressDetails,
      handleChangePhone,
      handleChangeCity,
      handleChangePostalCode,
      handleAddAddress
   ]

}

export default AddAddressHook