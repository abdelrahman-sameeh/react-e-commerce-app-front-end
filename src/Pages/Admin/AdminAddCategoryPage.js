import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import SubTitle from '../../Components/Utilty/SubTitle'
import AddBrandOrCategoryContainer from '../../Components/Admin/AddBrandOrCategoryContainer'

const AdminAddCategoryPage = () => {
  return (
   <div className='page'>
   <div className="container mt-3">
      <div className="row">
         <div className="col col-3 p-2">
            <AdminSidebar />
         </div>
         <div className="col col-9 p-2">
            <SubTitle title='اضافه تصنيف جديد' />
            <AddBrandOrCategoryContainer name={'التصنيف'} />
         </div>
      </div>
   </div>
</div>
  )
}

export default AdminAddCategoryPage