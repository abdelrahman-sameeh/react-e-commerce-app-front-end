/* eslint-disable react-hooks/exhaustive-deps */


import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'
import { useState } from 'react'
import { addSubCategory } from '../../redux/actions/subCategoryAction'
import { notify } from '../useNotification'
import { useRef } from 'react'

const AddSubCategoryHook = () => {

  const [option, setOption] = useState()
  const [subName, setSubName] = useState()
  const [loading, setLoading] = useState(true)
  const [isPress, setIsPress] = useState()

  const input = useRef()
  const select = useRef()


  // get all category
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllCategory())
  }, [])
  const category = useSelector(state => state.category.category)

  // handle change select
  const handleChangeSelect = (e) => {
    setOption(e.target.value)
  }

  const res = useSelector(state => state.allSubCategory)


  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsPress(true)

    // validation form
    if (!option || !subName) {
      notify('من فضلك اكمل البيانات', 'warn')
      return
    }



    setLoading(true)
    // call method add sub category
    await dispatch(addSubCategory({
      name: subName,
      category: option
    }))

    setLoading(false)

    // remove input and select value
    setSubName('')
    setOption(0)
    input.current.value = ''
    select.current.value = '0'

  }






  useEffect(() => {
    if (!loading) {

      // add notify with status
      if (res && res.subCategory.status === 201) {
        notify('تمت الاضافه بنجاح', 'success')
      }
      else if (res.subCategory.message === 'Request failed with status code 500') {
        notify('الاسم مكرر من فضلك اختر اسم اخر', 'warn')
      }
      else {
        notify('حدث خطأ اثناء الاضافه', 'error')
      }

      setLoading(true)

    }


  }, [loading])


  return [category, input, select, setSubName, handleChangeSelect, handleSubmit]

}

export default AddSubCategoryHook