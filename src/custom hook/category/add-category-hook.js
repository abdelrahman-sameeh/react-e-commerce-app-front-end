import React, { useEffect, useRef, useState } from 'react'

import upload from '../../Images/upload.png'
import { addCategory } from '../../redux/actions/categoryAction'
import { useDispatch, useSelector } from 'react-redux'
import { notify } from '../useNotification'

const AddCategoryHook = () => {

   const [categoryName, setCategoryName] = useState('')
   const [image, setImage] = useState(upload)
   const [selectedFile, setSelectedFile] = useState(null)
   const input = useRef()
   const [loading, setLoading] = useState()
   // if press submit to add new category
   const [isPress, setIsPress] = useState(false)

   const res = useSelector(state => state.category.data)
   const dispatch = useDispatch()


   // change name state 
   const handleNameChange = (e) => {
      setCategoryName(e.target.value)
   }



   // when chose image from pc
   const handleChangeImage = (e) => {
      if (e.target.files && e.target.files[0]) {
         setImage(URL.createObjectURL(e.target.files[0]))
         setSelectedFile(e.target.files[0])
      }
   }

   // handle add category
   const handleSubmit = async (e) => {

      e.preventDefault();
      // handle error if data is not complete
      if (!categoryName || image === upload) {
         notify('من فضلك اكمل البيانات', 'warn')
         return
      }

      const formData = new FormData()

      formData.append('name', categoryName)
      formData.append('image', selectedFile)


      setIsPress(true)

      setLoading(true)
      await dispatch(addCategory(formData))
      setLoading(false)


   }



   useEffect(() => {
      if (!loading) {
         // clear input and image after add category
         input.current.value = ''
         setImage(upload)
         setSelectedFile(null)

         setIsPress(false)

         // add notify with status
         if (res && res.status === 201) {
            notify('تمت الاضافه بنجاح', 'success')
         } else if (res && res.status !== 201) {
            notify('حدث خطأ اثناء الاضافه', 'error')
         }

      }

   }, [loading])

   
   return [image, loading, isPress, input, handleChangeImage, handleSubmit, handleNameChange]
}

export default AddCategoryHook 