import React from 'react'
// import favOn from '../../Images/fav-on.png'
import favOff from '../../Images/fav-off.png'
import rate from '../../Images/rate.png'
import prod1 from '../../Images/prod1.png'
import { Link } from 'react-router-dom'
import LatestOutfitProducts from '../../custom hook/products/latest-outfit-products'
import ProductComp from '../ProductDetalisComp/ProductComp'



const LatestOutfitContainer = () => {

   const [products] = LatestOutfitProducts()

   return (
      <div className="products my-3 gap-3 grid-300">
         {
            products && products.data && products.data.slice(0, 3).map(product => {
               return (
                  <ProductComp product={product} />
               )
            })
         }
      </div>
   )
}

export default LatestOutfitContainer