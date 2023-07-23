import { useState } from "react"
import { getAllProductInCart, updateQtyProductInCart } from "../../redux/actions/cartAction"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { notify } from "../useNotification"

const UpdateCartQtyHook = (item) => {
   const [itemCount, setItemCount] = useState(item.count)
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)

   const dispatch = useDispatch()

   const handleChangeCount = (e) => {
      setItemCount(e.target.value)
   }

   const handleUpdateCount = async (e) => {
      e.preventDefault();
      // validation
      if (itemCount <= 0) {
         notify('يجب ان تكون الكميه اكبر من 0', 'warn')
         return
      }

      setLoading(true)
      setIsPress(true)
      await dispatch(updateQtyProductInCart(item._id, { count: itemCount }))
      await dispatch(getAllProductInCart())
      setLoading(false)
      setIsPress(false)
   }

   const updateProductQtyResponse = useSelector(state => state.cart.updateProductInCart)
   console.log();

   useEffect(() => {
      if (!loading) {
         if (updateProductQtyResponse.status === 200) {
            notify('تم التعديل بنجاح', 'success')
         }
      }
   }, [loading])

   return [isPress, loading, itemCount, handleChangeCount, handleUpdateCount]
}

export default UpdateCartQtyHook