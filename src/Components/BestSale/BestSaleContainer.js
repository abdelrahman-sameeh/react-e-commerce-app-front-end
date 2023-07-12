import React from 'react'

// import favOn from '../../Images/fav-on.png'
import favOff from '../../Images/fav-off.png'
import rate from '../../Images/rate.png'
import { Link } from 'react-router-dom'
import BestSaleProductHook from '../../custom hook/products/best-sale-products-hook'
import { Col } from 'react-bootstrap'

const BestSaleContainer = ({ col, limit }) => {

   const [products] = BestSaleProductHook()

   

   return (
      <Col lg='10' md='10' sm='12' className={`products col my-3 gap-3 grid-300 `}>

         {
            products && products.data && products.data.slice(0, limit).map(product => {
               return (
                  <div className="bg-light shadow-sm p-3 rounded">
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
                           <img style={{ width: '20px' }} src={rate} alt="" />
                           <span> {product.ratingsQuantity} </span>
                        </div>
                        <div className="price bold">
                           {product.price} جنيه
                        </div>
                     </div>
                  </div>
               )
            })
         }

      </Col>
   )
}

export default BestSaleContainer