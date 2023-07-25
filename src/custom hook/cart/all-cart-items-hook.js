import { useDispatch, useSelector } from "react-redux"
import { getAllProductInCart } from "../../redux/actions/cartAction"
import { useEffect } from "react"

const AllCartItemsHook = () => {
   const dispatch = useDispatch()

   const run = async () => {
      await dispatch(getAllProductInCart())
   }

   useEffect(() => {
      run()
   }, [])

   const getAllProductResponse = useSelector(state => state.cart.allCartItems)



   let cartItems, totalCartPrice=0, totalAfterDiscount;
   if (getAllProductResponse && getAllProductResponse.data&&getAllProductResponse.data.data) {
      cartItems = getAllProductResponse.data.data.products
      totalCartPrice = getAllProductResponse.data.data.totalCartPrice
      totalAfterDiscount =  getAllProductResponse.data.data.totalAfterDiscount

      // set cartId in localStorage
      localStorage.cartId = getAllProductResponse.data.data._id

      // set total price in localStorage
      localStorage.totalPrice = getAllProductResponse.data.data.totalAfterDiscount ? 
      getAllProductResponse.data.data.totalAfterDiscount :
      getAllProductResponse.data.data.totalCartPrice
   }


   return [cartItems, totalCartPrice, totalAfterDiscount]

}

export default AllCartItemsHook