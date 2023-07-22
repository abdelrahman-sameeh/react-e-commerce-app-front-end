import React from 'react'
import { Link } from 'react-router-dom'

const UserSidebar = () => {
   return (
      <div className="bg-light  rounded">
         <ul className='list-unstyled m-0 p-0'>
            <li className='border-bottom'>
               <Link className='btn btn-light w-100 py-3 fw-bold ' to='/user/allOrders'> اداره الطلبات </Link>
            </li>
            <li className='border-bottom'>
               <Link className='btn btn-light w-100 py-3 fw-bold ' to='/user/favProducts'> المنتجات المفضله </Link>
            </li>
            <li className='border-bottom'>
               <Link className='btn btn-light w-100 py-3 fw-bold ' to='/user/addNewAddress'> اضف عنوان جديد</Link>
            </li>
            <li className='border-bottom'>
               <Link className='btn btn-light w-100 py-3 fw-bold ' to='/user/addresses'> العناوين الشخصيه</Link>
            </li>
            <li className='border-bottom'>
               <Link className='btn btn-light w-100 py-3 fw-bold ' to='/user/profile'> الملف الشخصى </Link>
            </li>
         </ul>
      </div>
   )
}

export default UserSidebar