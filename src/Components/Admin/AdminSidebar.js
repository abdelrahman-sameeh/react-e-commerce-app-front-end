import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
   return (
      <div className="admin-sidebar bg-light  rounded">
         <ul className='list-unstyled m-0 p-0'>
            <li className='border-bottom'>
               <Link className='btn btn-light w-100 py-3 fw-bold ' to='/admin/allOrders'> اداره الطلبات </Link>
            </li>
            <li className='border-bottom'>
               <Link className='btn btn-light w-100 py-3 fw-bold ' to='/admin/allProducts'> اداره المنتجات </Link>
            </li>
            <li className='border-bottom'>
               <Link className='btn btn-light w-100 py-3 fw-bold ' to='/admin/addBrand'> اضف ماركه </Link>
            </li>
            <li className='border-bottom'>
               <Link className='btn btn-light w-100 py-3 fw-bold ' to='/admin/addCategory'> اضف تصنيف </Link>
            </li>
            <li className='border-bottom'>
               <Link className='btn btn-light w-100 py-3 fw-bold ' to='/admin/addSubCategory'>  اضف تصنيف فرعى </Link>
            </li>
            <li className='border-bottom'>
               <Link className='btn btn-light w-100 py-3 fw-bold ' to='/admin/addProduct'> اضف منتج </Link>
            </li>
         </ul>
      </div>
   )
}

export default AdminSidebar