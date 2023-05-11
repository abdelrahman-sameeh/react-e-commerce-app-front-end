import React from 'react'
import SubTitle from '../../Components/Utilty/SubTitle'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import AddSubCategory from '../../Components/Admin/AddSubCategory'

const AdminAddSubCategoryPage = () => {
  return (
   <div className='page'>
   <div className="container mt-3">
      <div className="row">
         <div className="col col-3 p-2">
            <AdminSidebar />
         </div>
         <div className="col col-9 p-2">
            <SubTitle title='اضافه تصنيف فرعى جديد' />
            <AddSubCategory />
         </div>
      </div>
   </div>
</div>
  )
}

export default AdminAddSubCategoryPage