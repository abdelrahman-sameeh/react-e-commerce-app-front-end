import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notify } from '../useNotification'
import { getAllReviewsInOneProduct, removeOneReview, updateOneReview } from '../../redux/actions/reviewsAction'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const ReviewHook = () => {

   const user = JSON.parse(localStorage.user)
   const dispatch = useDispatch()
   // loading for delete review
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)

   // loading for update review
   const [loadingUpdate, setUpdateLoading] = useState(true)
   const [pressInUpdate, setPressOnUpdate] = useState(false)

   const [updatedReview, setUpdatedReview] = useState('')
   const [updatedRating, setUpdatedRating] = useState('')


   const updateReviewResponse = useSelector(state => state.reviews.updateOneReview)

   const handleChangeUpdateReview = (e) => {
      setUpdatedReview(e.target.value)
   }

   const handleChangeUpdateRating = (e) => {
      setUpdatedRating(e.target.value)
   }

   const productId = useParams().id
   const updatedForm = useRef()


   const handleUpdateChange = () => {
      updatedForm.current.classList.add('show-review')
   }

   const handleCloseForm = () => {
      updatedForm.current.classList.remove('show-review')
   }

   const handleUpdateChangeSave = async (reviewId) => {
      // validation
      if (!updatedRating) {
         notify('من فضلك اختر تقيمك', 'warn')
         return
      }

      const data = {
         rating: updatedRating,
         review: updatedReview
      }
      setUpdateLoading(true)
      setPressOnUpdate(true)
      await dispatch(updateOneReview(reviewId, data))
      setUpdateLoading(false)
      setPressOnUpdate(false)
   }


   useEffect(() => {
      if (!loadingUpdate) {
         if (updateReviewResponse.status === 200) {
            notify('تم التعديل بنجاح', 'success')
            dispatch(getAllReviewsInOneProduct(productId, 5))
            setUpdatedRating('')
            setUpdatedReview('')
            updatedForm.current.classList.remove('show')
         }
      }
   }, [loadingUpdate])



   // handle remove method
   const removeReviewResponse = useSelector(state => state.reviews.removeOneReview)
   const handleDeleteReview = async (reviewId) => {

      Swal.fire({
         title: 'هل انت متأكد?',
         text: "هل انت متأكد من حذف المراجعه",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'احذف!',
         cancelButtonText: 'تراجع'

      }).then( async(result) => {
         if (result.isConfirmed) {
            setLoading(true)
            setIsPress(true)
            await dispatch(removeOneReview(reviewId))
            setLoading(false)
            setIsPress(false)
         }
      })


   }

   useEffect(() => {
      if (!loading) {
         if (removeReviewResponse.status === 204) {
            notify('تم حذف المراجعه بنجاح', 'success')
            dispatch(getAllReviewsInOneProduct(productId, 5))
         }
      }
   }, [loading])


   return [
      user,
      loading,
      isPress,
      loadingUpdate,
      pressInUpdate,
      updatedReview,
      updatedRating,
      updatedForm,
      handleCloseForm,
      handleChangeUpdateReview,
      handleChangeUpdateRating,
      handleUpdateChangeSave,
      handleUpdateChange,
      handleDeleteReview
   ]
}

export default ReviewHook