import React from 'react'
// import favOn from '../../Images/fav-on.png'
import favOff from '../../Images/fav-off.png'
import rate from '../../Images/rate.png'
import prod1 from '../../Images/prod1.png'
import { Link } from 'react-router-dom'
import LatestOutfitProducts from '../../custom hook/products/latest-outfit-products'



const LatestOutfitContainer = () => {

   const [products] = LatestOutfitProducts()

   return (
      <div className="products my-3 gap-3 grid-300">
   
         {
            products && products.data && products.data.slice(0, 3).map(product => {
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



      </div>
   )
}

export default LatestOutfitContainer