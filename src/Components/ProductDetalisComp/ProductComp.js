import React from 'react'
import { Link } from 'react-router-dom'

import favOff from '../../Images/fav-off.png'
import rate from '../../Images/rate.png'

const ProductComp = ({product}) => {
   return (
      <div style={{height: '350px' ,padding: '15px'}} className="shadow-sm rounded">
         <div style={{ height: '200px' }} className="image">
            <Link to={`/product/${product._id}`}>
               <img style={{ height: '200px', objectFit: 'contain' }} className='w-100 link' src={product.imageCover} alt="" />
            </Link>
         </div>
         <div className="d-flex justify-content-end">
            <img style={{ width: '25px', cursor: 'pointer' }} src={favOff} alt="" />
         </div>
         <div className="fs-5 my-2"> {product.title} </div>
         {
            product.description && <div className="desc text-black-50 my-2 "> {product.description.split(' ').slice(0, 10).join(' ')} </div>
         }
         <div className="d-flex justify-content-between align-items center">
            <div className="rate center text-warning">
               <img style={{ width: '20px' }} src={rate}  alt="" />
               <span> {product.ratingsQuantity} </span>
            </div>
            <div className="price bold">
               {product.price} جنيه
            </div>
         </div>
      </div>
   )
}

export default ProductComp