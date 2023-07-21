import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createReview, getAllReviewsInOneProduct } from '../../redux/actions/reviewsAction'
import { useParams } from 'react-router-dom'
import { notify } from '../useNotification'

const PeopleReviewHook = () => {
   const [rating, setRating] = useState(0)
   const [review, setReview] = useState('')
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)
   const productId = useParams().id 




   const user = JSON.parse(localStorage.getItem('user'))
   const dispatch = useDispatch()
   const createReviewResponse = useSelector(state => state.reviews.createReview)
   const allReviews = useSelector(state => state.reviews.allReviews)



   const getAllReviews = async () => {
      await dispatch(getAllReviewsInOneProduct(productId, 5, 1))
   }
   useEffect(() => {
      getAllReviews()
   }, [])




   const handleChangeRating = (e) => {
      setRating(e.target.value)
   }
   const handleChangeReview = (e) => {
      setReview(e.target.value)
   }

   // @desc   handle change pagination
   const handleChangePaginationNum = async (pageNum) => {
      await dispatch(getAllReviewsInOneProduct(productId, 5, pageNum))
   }


   // to create a review
   const handleCreateReview = async (e) => {
      e.preventDefault();

      // validation
      if (rating < 1) {
         notify('يجب ان يكون التقيم بين 1 و 5 ', 'warn');
         return
      }
      if (!review) {
         notify('وصف المراجعه مطلوب', 'warn');
         return
      }


      const data = {
         review,
         rating,
         productId
      }

      setLoading(true)
      setIsPress(true)
      await dispatch(createReview(data))
      setLoading(false)
      setIsPress(false)

   }


   // after create a review
   useEffect(() => {

      if (!loading) {
         if (createReviewResponse.status === 201) {
            notify('تم حفظ المراجعه', 'success');
            dispatch(getAllReviewsInOneProduct(productId))
         }

         if (createReviewResponse.status === 400 && createReviewResponse.data && createReviewResponse.data.errors) {
            createReviewResponse.data.errors.map(err => {
               if (err.msg === 'You already added review on this product') {
                  notify('لا يمكن ترك اكثر من مراجعه', 'error');
               }
            })
         }
      }

   }, [loading])



   return [allReviews, isPress, loading, user, rating, handleChangeRating, handleChangeReview, handleCreateReview, handleChangePaginationNum]
}

export default PeopleReviewHook