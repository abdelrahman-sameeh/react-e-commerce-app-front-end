import React from 'react'
import { Link } from 'react-router-dom'

import favOff from '../../Images/fav-off.png'
import favOn from '../../Images/fav-on.png'
import rate from '../../Images/rate.png'
import CRUDProductToWishListHook from '../../custom hook/wishList/CRUD-product-to-wish-list-hook'
import { ToastContainer } from 'react-toastify'
import AdminAllProductHook from '../../custom hook/admin/admin-all-product-hook'

const ProductComp = ({ product }) => {


   const [wishListProducts, user, handleAddProductToWishList, handleRemoveProductFromWishList] = CRUDProductToWishListHook()

   const [products, deleteProduct] = AdminAllProductHook()

   return (
      <div style={{ height: '350px', padding: '15px', }} className="rounded bg-light">

         {/* controls */}
         {
            user && user.data && user.data.data && user.data.data.role === 'admin' &&
            <div className='d-flex justify-content-between align-items-center'>
               <form onSubmit={(e) => {
                  e.preventDefault()
                  deleteProduct(product._id)
               }}>
                  <button className='btn btn-dark'> ازاله </button>
               </form>
               <Link to={`/admin/edit/${product._id}`} >
                  <button className='btn btn-dark'> تعديل </button>
               </Link>
            </div>

         }

         <div style={{ height: '200px' }} className="image">
            <Link to={`/product/${product._id}`}>
               <img style={{ height: '200px', objectFit: 'contain' }} className='w-100 link' src={product.imageCover} alt="" />
            </Link>
         </div>
         {
            user && user.data && user.data.data && user.data.data.role === 'user' &&
            <div className="d-flex justify-content-end">

               {
                  // check if user save this product in wish list
                  (user && user.data && user.data.data && user.data.data.wishlist.includes(product._id))
                     ?
                     <button onClick={() => handleRemoveProductFromWishList(product._id)} className={`btn`} >
                        <img style={{ width: '25px', cursor: 'pointer' }} src={favOn} alt="" />
                     </button>
                     :
                     <button onClick={() => handleAddProductToWishList(product._id)} className='btn' >
                        <img style={{ width: '25px', cursor: 'pointer' }} src={favOff} alt="" />
                     </button>
               }

            </div>
         }
         <div className="fs-5 my-2"> {product.title} </div>
         {
            product.description && <div className="desc text-black-50 my-2 "> {product.description.split(' ').slice(0, 10).join(' ')} </div>
         }
         <div className="d-flex justify-content-between align-items center">
            <div className="rate center text-warning">
               <img style={{ width: '20px' }} src={rate} alt="" />
               <span> {product.ratingsAverage} </span>
            </div>
            <div className="price bold">
               {product.price} جنيه
            </div>
         </div>
         <ToastContainer />
      </div >
   )
}

export default ProductComp