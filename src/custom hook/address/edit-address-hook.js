import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSpecificAddress, updateAddress } from '../../redux/actions/addressAction'
import { useEffect } from 'react'
import { useState } from 'react'
import { notify } from '../useNotification'

const EditAddressHook = () => {

   const [alias, setAlias] = useState('')
   const [details, setDetails] = useState('')
   const [phone, setPhone] = useState('')
   const [city, setCity] = useState('')
   const [postalCode, setPostalCode] = useState('')
   const [getAddressLoading, setGetAddressLoading] = useState(true)
   const [updateLoading, setUpdateAddressLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)


   // handle change 
   const handleChangeAlias = (e) => setAlias(e.target.value)
   const handleChangeAddressDetails = (e) => setDetails(e.target.value)
   const handleChangePhone = (e) => setPhone(e.target.value)
   const handleChangeCity = (e) => setCity(e.target.value)
   const handleChangePostalCode = (e) => setPostalCode(e.target.value)

   // 1- get specific address in put value in inputs
   const addressId = useParams().id
   const dispatch = useDispatch()
   const run = async () => {
      setGetAddressLoading(true)
      await dispatch(getSpecificAddress(addressId))
      setGetAddressLoading(false)
   }

   useEffect(() => {
      run()
   }, [])

   // after fetch data => then put data in inputs
   const getSpecificAddressResponse = useSelector(state => state.addresses.oneAddress)
   console.log(getSpecificAddressResponse);
   useEffect(() => {
      if (!getAddressLoading) {
         let address;
         if (getSpecificAddressResponse && getSpecificAddressResponse.data) {
            address = getSpecificAddressResponse.data.data
            setAlias(address.alias)
            setCity(address.city)
            setDetails(address.details)
            setPhone(address.phone)
            setPostalCode(address.postalCode)
         }
      }
   }, [getAddressLoading])


   // 2- update address
   const handleUpdateAddress = async (e) => {
      e.preventDefault();
      const data = {
         alias,
         details,
         phone,
         city,
         postalCode
      }
      // validation
      if (!alias || !details || !phone || !city || !postalCode) {
         notify('من فضلك اكمل البيانات', 'warn')
         return
      }
      if (alias.length <= 1) {
         notify('ادخل اسم عنوان اكبر من حرفين', 'warn')
         return
      }
      if (phone.length < 10) {
         notify('ادخل رقم هاتف صحيح', 'warn')
         return
      }

      setUpdateAddressLoading(true)
      setIsPress(true)
      await dispatch(updateAddress(addressId, data))
      await dispatch(getSpecificAddress(addressId))
      setIsPress(false)
      setUpdateAddressLoading(false)
   }


   // get response from update address
   const updateAddressResponse = useSelector(state => state.addresses.updateAddress)
   useEffect(() => {
      if (!updateLoading) {
         if(updateAddressResponse.status === 200){
            notify('تم التعديل بنجاح', 'success')
         }
      }
   }, [updateLoading])

   return [
      alias,
      details,
      phone,
      city,
      postalCode,
      updateLoading,
      isPress,
      handleChangeAlias,
      handleChangeAddressDetails,
      handleChangePhone,
      handleChangeCity,
      handleChangePostalCode,
      handleUpdateAddress
   ]
}

export default EditAddressHook