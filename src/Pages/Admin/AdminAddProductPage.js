import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import SubTitle from '../../Components/Utilty/SubTitle'
import AdminAddProduct from '../../Components/Admin/AdminAddProduct'

const AdminAddProductPage = () => {
  return (
   <div className='page'>
   <div className="container mt-3">
      <div className="row">
         <div className="col col-3 p-2">
            <AdminSidebar />
         </div>
         <div className="col col-9 p-2">
            <SubTitle title='اضافه منتج جديد' />
            <AdminAddProduct />
         </div>
      </div>
   </div>
</div>
  )
}

export default AdminAddProductPage