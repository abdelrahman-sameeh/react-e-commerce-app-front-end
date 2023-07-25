import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { addProductToCart } from "../../redux/actions/cartAction";
import { notify } from "../useNotification";
import { useEffect } from "react";

const AddProductToCartHook = () => {

   const productId = useParams().id
   const dispatch = useDispatch()

   const [loading, setLoading] = useState(true)
   const [isPress, setIsPress] = useState(false)
   const [color, setColor] = useState('')

   const handleChangeColor = (e) => {
      setColor(e.target.value)
   }

   const handleAddProduct = async (e) => {
      e.preventDefault();

      const data = {
         color,
         productId
      }
      // validation
      // check if authorized
      if (!localStorage.user) {
         notify('قم بتسجيل الدخول من فضلك', 'warn')
         setTimeout(() => {
            window.location.href = '/login'
         }, 1000);
         return
      }
      
      if (!color) {
         notify('من فضلك حدد لون', 'warn')
         return
      }

      setLoading(true)
      setIsPress(true)
      await dispatch(addProductToCart(data))
      setLoading(false)
      setIsPress(false)
   }

   const addProductToCartResponse = useSelector(state => state.cart.addProductToCart)
   console.log(addProductToCartResponse);

   useEffect(() => {
      if (!loading) {
         if (addProductToCartResponse.status === 200) {
            notify('تم الاضافه الى السله بنجاح', 'success')
         }
         if (addProductToCartResponse.status === 401) {
            notify('قم بتسجيل الدخول من فضلك', 'error')
         }
      }
   }, [loading])

   return [loading, isPress, handleChangeColor, handleAddProduct]

}

export default AddProductToCartHook