import React from 'react'

// import favOn from '../../Images/fav-on.png'
import BestSaleProductHook from '../../custom hook/products/best-sale-products-hook'
import ProductComp from '../ProductDetalisComp/ProductComp'

const BestSaleContainer = ({ col, limit }) => {

   const [products] = BestSaleProductHook()


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

export default BestSaleContainer