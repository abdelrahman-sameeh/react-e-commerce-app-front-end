import React from 'react'
import { notify } from '../useNotification'
import { useEffect } from 'react'
import { addProduct } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSubCategoryOnCategory } from '../../redux/actions/subCategoryAction'
import { getAllBrands } from '../../redux/actions/brandAction'
import { getAllCategory } from '../../redux/actions/categoryAction'
import { useState } from 'react'
import makeAnimated from 'react-select/animated';



const AddProductHook = () => {
   // special multi images 
   const [images, setImages] = useState([])
   const [productName, setProductName] = useState()
   const [productDescription, setProductDescription] = useState()
   const [productPriceBefore, setProductPriceBefore] = useState()
   const [productPriceAfter, setProductPriceAfter] = useState()
   const [qty, setQty] = useState()
   const [catId, setCatId] = useState()
   const [selectedSubCategories, setSelectedSubCategories] = useState([])
   const [brandId, setBrandId] = useState()
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)

   const [colors, setColors] = useState([])


   const onSelectSubCategories = (selected) => {
      setSelectedSubCategories(selected)
   }

   const dispatch = useDispatch()


   useEffect(() => {
      dispatch(getAllCategory())
      dispatch(getAllBrands())
   }, [])


   const handleChangeProductName = (e) => setProductName(e.target.value)
   const handleChangeProductDesc = (e) => setProductDescription(e.target.value)
   const handleChangeProductPriceBefore = (e) => setProductPriceBefore(e.target.value)
   const handleChangeProductPriceAfter = (e) => setProductPriceAfter(e.target.value)
   const handleChangeProductQty = (e) => setQty(e.target.value)
   const handleChangeBrandId = (e) => setBrandId(e.target.value)


   const allCategory = useSelector(state => state.category.category)
   const allBrands = useSelector(state => state.allBrand.brands)

   const animatedComponents = makeAnimated();



   const handleChangeCategory = async (catId) => {
      if (catId !== '0') {
         setCatId(catId)
         await dispatch(getAllSubCategoryOnCategory(catId))
      }
   }


   let subCategoryForCategory = useSelector(state => state.allSubCategory.subCategory)

   // for subCategory on specific category
   let options = (subCategoryForCategory && subCategoryForCategory.data) ? subCategoryForCategory.data.map(item => {
      return {
         value: item._id,
         label: item.name,
         ...item
      }
   }) : []


   const productRes = useSelector(state => state.allProduct.oneProduct)


   // add color to dom and state
   const handelAddColor = (e) => {

      const color = e.target.previousSibling.value
      if (!colors.includes(color)) {
         setColors([...colors, color])
      }

   }

   // remove color from DOM and state
   const removeColor = () => {
      document.addEventListener('click', (e) => {
         if (e.target.classList.contains('product-color')) {
            const myTargetColor = e.target.dataset.color
            let filterColors = colors.filter(color => color !== myTargetColor)
            setColors(filterColors)
         }
      })
   }

   // call when click on color to remove it 
   removeColor()


   //to convert base 64 to file
   function dataURLtoFile(dataurl, filename) {

      var arr = dataurl.split(','),
         mime = arr[0].match(/:(.*?);/)[1],
         bstr = atob(arr[1]),
         n = bstr.length,
         u8arr = new Uint8Array(n);

      while (n--) {
         u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, { type: mime });
   }


   // to save product
   const handleSubmit = async (e) => {
      setIsPress(true)
      e.preventDefault();

      const imageCover = dataURLtoFile(images[0], Math.random() + '.png')

      const formData = new FormData()
      formData.append('title', productName)
      formData.append('price', productPriceBefore)
      formData.append('priceAfter', productPriceAfter)
      formData.append('category', catId)
      formData.append('description', productDescription)
      formData.append('imageCover', imageCover)
      formData.append('quantity', qty)
      formData.append('brand', brandId)

      colors.map(color => {
         return formData.append('availableColors', color)
      })
      selectedSubCategories.map(subCategory => {
         return formData.append('subcategory', subCategory._id)
      })

      Object.entries(images).map(item => {
         return formData.append('images', dataURLtoFile(item[1], Math.random * 10088 + '.png'))
      })


      // validation
      if (!productName || !productDescription || Object.keys(images).length < 1 || !productPriceBefore) {
         setIsPress(false)
         notify(' من فضلك اكمل البيانات واملئ الحقول التى تحتوى على *', 'warn')
         return
      }

      if (productPriceBefore < productPriceAfter) {
         setIsPress(false)
         notify('يجب ان يكون السعر قبل اكبر من السعر بعد', 'warn')
         return
      }

      setLoading(true)
      await dispatch(addProduct(formData))
      setLoading(false)

   }

   useEffect(() => {
      if (!loading) {
         setBrandId('0')
         setCatId('0')
         setColors([])
         setImages([])
         setProductDescription('')
         setProductName('')
         setProductPriceAfter(0)
         setProductPriceBefore(0)
         setQty(0)
         setSelectedSubCategories([])

         setLoading(true)
         setIsPress(false)

         if (productRes) {
            if (productRes.status === 201) {
               notify('تم اضافة المنتج بنجاح', 'success')
            } else {
               notify('حدث خطأ اثناء عمليه الاضافة', 'error')
               return
            }
         }

      }
   }, [loading])

   return [
      loading,
      isPress,
      images,
      colors,
      allCategory,
      allBrands,
      options,
      animatedComponents,
      setImages,
      handleChangeProductName,
      handleChangeProductDesc,
      handleChangeProductPriceBefore,
      handleChangeProductPriceAfter,
      handleChangeProductQty,
      handleChangeBrandId,
      handleChangeCategory,
      onSelectSubCategories,
      setBrandId,
      handelAddColor,
      handleSubmit,
      productName, 
      productDescription,
      productPriceBefore,
      productPriceAfter,
      qty,
      catId,
      brandId
   ]

}

export default AddProductHook