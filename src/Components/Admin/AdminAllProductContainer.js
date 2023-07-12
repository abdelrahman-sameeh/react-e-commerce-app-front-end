import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// import favOn from '../../Images/fav-on.png'
import favOff from '../../Images/fav-off.png'
import rate from '../../Images/rate.png'
import AdminAllProductHook from '../../custom hook/admin/admin-all-product-hook'
import { ToastContainer } from 'react-toastify'
import PaginationComponent from '../Utilty/PaginationComponent'


const AdminAllProductContainer = () => {
   const [products, deleteProduct] = AdminAllProductHook()


   return (
      <div className='products gap-3 grid-300'>
         {
            products && products.data && products.data.map(product => {
               return (<div key={product._id} className="product p-3 rounded bg-light">
                  <div className="d-flex justify-content-between">
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
                  <div style={{ height: '200px' }} className="image">
                     <Link to={`/product/${product._id}`}>
                        <img style={{ height: '200px', objectFit: 'contain' }} className='w-100 link' src={product.imageCover} alt="" />
                     </Link>
                  </div>
                  <div className="d-flex justify-content-end">
                     <form action="/" method="post">
                        <button style={{ all: 'unset' }}>
                           <img style={{ width: '25px', cursor: 'pointer' }} src={favOff} alt="" />
                        </button>
                     </form>
                  </div>
                  {
                     product && product.description &&
                     <div className="desc fs-5 my-2"> {product.description.split(' ').slice(0, 10).join(' ')} </div>
                  }
                  <div className="d-flex justify-content-between align-items center">
                     <div className="rate center text-warning">
                        <img style={{ width: '20px' }} src={rate} alt="" />
                        <span> {product.ratingsQuantity} </span>
                     </div>
                     <div className="price bold">
                        {product.price} جنيه
                     </div>
                  </div>
               </div>)
            })
         }


         <ToastContainer />
         
      </div>
   )
}

export default AdminAllProductContainer