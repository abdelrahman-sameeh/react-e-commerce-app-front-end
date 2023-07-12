import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductById, getAllProducts } from '../../redux/actions/productAction'
import { notify } from '../useNotification'
import Swal from 'sweetalert2'

const AdminAllProductHook = () => {

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllProducts(4))
   }, [])

   const products = useSelector(state => state.allProduct.products)
   const oneDeleted = useSelector(state => state.allProduct.oneDeleted)



   const deleteProduct = (id) => {

      Swal.fire({
         title: 'هل انت متأكد?',
         text: "هل انت متأكد من حذف المنتج",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'احذف!'
      
      }).then((result) => {
         if (result.isConfirmed) {
            // delete product
            dispatch(deleteProductById(id))
            // update state
            dispatch(getAllProducts(4))
         }
      })

   }


   // check state of delete product
   useEffect(() => {
      if (oneDeleted) {
         if (oneDeleted.status === 204) {
            Swal.fire(
               'Deleted!',
               'تم حذف المنتج بنجاح',
               'success'
            )
         } else {
            notify('حدث خطأ اثناء الحذف', 'warn')
         }
      }
   }, [oneDeleted])


   const getPaginationNum = (num) => {
      dispatch(getAllProducts(4, num))
   }




   return [products, deleteProduct, getPaginationNum]

}

export default AdminAllProductHook