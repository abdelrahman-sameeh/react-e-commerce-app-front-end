import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSpecificProduct, updateOneProduct } from '../../redux/actions/productAction'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { getAllSubCategoryOnCategory } from '../../redux/actions/subCategoryAction'
import makeAnimated from 'react-select/animated';
import { getAllBrands } from '../../redux/actions/brandAction'
import { getAllCategory } from '../../redux/actions/categoryAction'
import { notify } from '../useNotification'
import Swal from 'sweetalert2'

const AdminEditProductHook = () => {


   const [images, setImages] = useState([])
   const [productName, setProductName] = useState()
   const [productDescription, setProductDescription] = useState()
   const [productPriceBefore, setProductPriceBefore] = useState(0)
   const [productPriceAfter, setProductPriceAfter] = useState(0)
   const [qty, setQty] = useState()
   const [catId, setCatId] = useState()
   const [selectedSubCategories, setSelectedSubCategories] = useState([])
   const [brandId, setBrandId] = useState()
   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)
   const [colors, setColors] = useState([])

   const productId = useParams().id

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getSpecificProduct(productId))
      dispatch(getAllBrands())
      dispatch(getAllCategory())
   }, [])

   useEffect(() => {
      dispatch(getAllSubCategoryOnCategory(catId))
   }, [catId])




   const product = useSelector(state => state.allProduct.product)




   useEffect(() => {
      if (product && product.data) {

         setProductName(product.data.title)
         setProductDescription(product.data.description)
         setProductPriceBefore(product.data.price)
         setQty(product.data.quantity)
         setCatId(product.data.category)
         setSelectedSubCategories(product.data.subcategory)
         setBrandId(product.data.brand)
         setColors(product.data.availableColors)
         setImages(product.data.images)
      }
   }, [product])

   // handle change sub category
   const onSelectSubCategories = (selected) => {
      setSelectedSubCategories([...selectedSubCategories, selected[selected.length - 1].value])
   }

   const allCategory = useSelector(state => state.category.category)
   const allBrands = useSelector(state => state.allBrand.brands)
   let subCategoryForCategory = useSelector(state => state.allSubCategory.subCategory)



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


   // add color to dom and state
   const handelAddColor = (e) => {
      // add color to DOM
      const color = e.target.previousSibling.value
      if (!colors.includes(color)) {
         setColors([...colors, color])
      }
   }


   const animatedComponents = makeAnimated();
   // for subCategory on specific category
   let options = (subCategoryForCategory && subCategoryForCategory.data) ? subCategoryForCategory.data.map(item => {
      return {
         value: item._id,
         label: item.name,
         ...item
      }
   }) : []



   const handleChangeCategory = async (catId) => {
      if (catId !== '0') {
         setCatId(catId)
         await dispatch(getAllSubCategoryOnCategory(catId))
      } else {
         options = []
      }
   }


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




   const handleSubmit = async (e) => {
      e.preventDefault();

      setIsPress(true)

      const formData = new FormData()
      let imageCover;


      async function createFile(url) {
         let response = await fetch(url);
         let data = await response.blob();
         let metadata = {
            type: 'image/png'
         };
         let file = new File([data], `${Math.random() * 10205}.png`, metadata);
         return file
      }

      if (images[0].length <= 1000) {
         // convert url to file base64 
         imageCover = await createFile(images[0])
      } else {
         // change only image > base64
         imageCover = dataURLtoFile(images[0], Math.random() + '.png')
      }


      console.log(imageCover);

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
         return formData.append('subcategory', subCategory)
      })

      // change only image starts with "data" => data/base64
      Object.entries(images).map(async (item) => {
         if (item[1].length <= 1000) {
            // convert url to file base64 
            return formData.append('images', await createFile(item[1]))
         } else {
            // convert base 64 to url
            return formData.append('images', await createFile(item[1]))
         }
      })

      // validation
      if (!productName || !productDescription || images.length < 1 || productPriceBefore < productPriceAfter) {
         notify('من فضلك اكمل البيانات', 'warn')
         return
      } else {
         setTimeout( async() => {
            setLoading(true)
            await dispatch(updateOneProduct(productId, formData))
            setLoading(false)
         }, 1000);
      }

   }




   const oneUpdated = useSelector(state => state.allProduct.oneUpdated)
   useEffect(() => {
      if (loading === false) {
         setIsPress(false)
         if(oneUpdated.status ===200){
            Swal.fire({
               // position: 'top-end',
               icon: 'success',
               title: 'تم التعديل بنجاح',
               showConfirmButton: false,
               timer: 1500
             })
         }
      }
   }, [loading])





   return [
      product,
      productName,
      productDescription,
      productPriceBefore,
      productPriceAfter,
      qty,
      catId,
      selectedSubCategories,
      brandId,
      images,
      colors,
      loading,
      isPress,
      allCategory,
      allBrands,
      options,
      setImages,
      setProductName,
      setProductDescription,
      setProductPriceBefore,
      setProductPriceAfter,
      setQty,
      setCatId,
      setSelectedSubCategories,
      setBrandId,
      handleChangeCategory,
      onSelectSubCategories,
      handelAddColor,
      handleSubmit,
      animatedComponents,
   ]
}

export default AdminEditProductHook