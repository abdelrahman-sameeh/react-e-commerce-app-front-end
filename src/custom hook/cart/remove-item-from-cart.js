import { useState } from "react";
import { getAllProductInCart, removeProductFromCart } from "../../redux/actions/cartAction";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { notify } from "../useNotification";

const RemoveItemFromCart = () => {

   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)
   const dispatch = useDispatch()





   // delete

   const deleteItemFromCart = async (cartItemId) => {
      const swalWithBootstrapButtons = Swal.mixin({
         customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
         },
         buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
         title: 'هل انت متأكد?',
         text: "هل انت متأكد من حذف المنتج",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'احذف!',
         cancelButtonText: 'تراجع',
         reverseButtons: true
      }).then(async (result) => {
         if (result.isConfirmed) {
            setLoading(true)
            setIsPress(true)
            await dispatch(removeProductFromCart(cartItemId))
            await dispatch(getAllProductInCart())
            setLoading(false)
            setIsPress(false)
         } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
         ) {
            swalWithBootstrapButtons.fire(
               'تم التراجع',
               'لم يتم حذف المنتج من السلة :)',
               'error'
            )
         }
      })
   }

   const removeItemResponse = useSelector(state => state.cart.deleteProductFromCart)

   useEffect(() => {
      if (!loading) {
         if (removeItemResponse.status === 200) {
            notify('تم حذف المنتج بنجاح', 'success')
         }
      }
   }, [loading])

   return [loading, isPress, deleteItemFromCart]
}

export default RemoveItemFromCart