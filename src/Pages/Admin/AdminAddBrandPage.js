import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import SubTitle from '../../Components/Utilty/SubTitle'
import AddBrandOrCategoryContainer from '../../Components/Admin/AddBrandOrCategoryContainer'

const AdminAddBrandPage = () => {
   return (

         <div className='page'>
            <div className="container mt-3">
               <div className="row">
                  <div className="col col-3 p-2">
                     <AdminSidebar />
                  </div>
                  <div className="col col-9 p-2">
                     <SubTitle title='اضافه ماركه جديده' />
                     <AddBrandOrCategoryContainer name={'الماركه'} />
                  </div>
               </div>
            </div>
         </div>
   )
}

export default AdminAddBrandPage