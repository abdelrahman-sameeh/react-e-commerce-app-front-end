import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import RemoveItemFromCart from '../../custom hook/cart/remove-item-from-cart'
import { Spinner } from 'react-bootstrap'
import UpdateCartQtyHook from '../../custom hook/cart/update-cart-qty-hook'
import { ToastContainer } from 'react-toastify'

const CartProduct = ({ item }) => {
   const [loading, isPress, deleteItemFromCart] = RemoveItemFromCart()
   const [updateIsPress, updateLoading, itemCount, handleChangeCount, handleUpdateCount] = UpdateCartQtyHook(item)

   return (
      <div className='cart-product bg-light mb-2 rounded d-flex  align-items-start p-2' >
         {/* image */}
         <div className="image" style={{ height: '213px', width: '180px' }}>
            <img src={item.product.imageCover} className='h-100 w-100' style={{ objectFit: 'contain' }} alt="" />
         </div>

         {/* description */}
         <div className="cart-product-description flex1 h-100 px-4 py-2">
            <div className="d-flex justify-content-between align-items-center">
               <span> {item.product.category.name} </span>
               <button onClick={() => deleteItemFromCart(item._id)} className='btn'> <FontAwesomeIcon icon={faTrash} />
                  ازاله
                  {loading && isPress && <Spinner animation='border' variant='light' />}
               </button>
            </div>
            <div className="cart-product-name mt-2 ">
               <span className='fs-5'> التقيم </span>
               <span className="text-warning fs-3 fw-bold">
                  {item.product.ratingsAverage}
               </span>
            </div>
            <div className="product-category text-black-50 mt-3">
               الماركه
               : <span className='fw-bold fs-5 text-dark'> {item.product.brand.name} </span>
            </div>
            <div className="color">
               <label style={{ backgroundColor: item.color }} className="phone-color"></label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
               <div className="product-category text-black-50 mt-2 center gap-1">
                  الكميه
                  <input onChange={handleChangeCount} value={itemCount} type="number" className='form-control' />
               </div>
               <span className="price"> {item.price} جنيه  </span>

            </div>
            <div className="d-flex justify-content-end align-items-center mt-3 mb-1">
               <button onClick={handleUpdateCount} className='btn btn-dark '>
                  {updateIsPress && updateLoading && <Spinner animation='border' variant='light' />}
                  تطبيق
               </button>
            </div>
         </div>
         <ToastContainer />
      </div>
   )
}

export default CartProduct