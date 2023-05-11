import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import AdminOrderDetailsContainer from '../../Components/Admin/AdminOrderDetailsContainer'
import SubTitle from '../../Components/Utilty/SubTitle'

const AdminOrderDetailsPage = () => {
   const order = '12';
   return (
      <div className='page'>
         <div className="container mt-3">
         <div className="row">
               <div className="col col-3 p-2">
                  <AdminSidebar />
               </div>
               <div className="col col-9 p-2">
                  <SubTitle title={`  تفاصيل الطلب ${order} `} />
                  <AdminOrderDetailsContainer />
               </div>
            </div>
         </div>
      </div>
   )
}

export default AdminOrderDetailsPage