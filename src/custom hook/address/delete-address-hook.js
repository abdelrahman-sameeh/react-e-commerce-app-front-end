import { useDispatch, useSelector } from "react-redux"
import { deleteAddress, getAllAddresses } from "../../redux/actions/addressAction"
import { useState } from "react"
import { useEffect } from "react"
import { notify } from "../useNotification"

const DeleteAddressHook = () => {

   const dispatch = useDispatch()
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)
   const handleDeleteAddress = async (addressId) => {
      setLoading(true)
      setIsPress(true)
      await dispatch(deleteAddress(addressId))
      await dispatch(getAllAddresses())
      setLoading(false)
      setIsPress(false)
   }

   const deleteAddressResponse = useSelector(state => state.addresses.deleteAddress)
   console.log(deleteAddressResponse);

   useEffect(() => {
      if (!loading) {
         if (deleteAddressResponse.status === 204) {
            notify('تم الحذف بنجاح', 'success')
         }
      }
   }, [loading])


   return [loading, isPress, handleDeleteAddress]
}

export default DeleteAddressHook