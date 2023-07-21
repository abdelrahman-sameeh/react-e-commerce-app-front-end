import React from 'react'
import BestSaleProductHook from '../../custom hook/products/best-sale-products-hook'
import ProductComp from '../ProductDetalisComp/ProductComp'
import CRUDProductToWishListHook from '../../custom hook/wishList/CRUD-product-to-wish-list-hook'

const UserAllFavProductsContainer = () => {
   const [wishListProducts] = CRUDProductToWishListHook()
   const [products] = BestSaleProductHook()
   console.log(products);

   return (
      <div className="products my-3 gap-3 grid-300">
         {
            wishListProducts && wishListProducts.data && wishListProducts.data.data && wishListProducts.data.data.map(product => {
               return (
                  <ProductComp product={product} />
               )
            })
         }
      </div>
   )
}

export default UserAllFavProductsContainer