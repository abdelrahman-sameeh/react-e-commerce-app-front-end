import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import AdminAllProductHook from '../../custom hook/admin/admin-all-product-hook'
import { ToastContainer } from 'react-toastify'
import ProductComp from '../ProductDetalisComp/ProductComp'


const AdminAllProductContainer = () => {
   const [products, deleteProduct] = AdminAllProductHook()
   return (
      <div className='products gap-3 grid-300'>
         {
            products && products.data && products.data.map(product => {
               return (
                  <ProductComp key={product._id} product={product} />
               )
            })
         }
         <ToastContainer />
      </div>
   )
}

export default AdminAllProductContainer