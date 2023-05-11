import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import AdminAllOrdersContainer from '../../Components/Admin/AdminAllOrdersContainer'
import SubTitle from '../../Components/Utilty/SubTitle'

const AdminAllOrdersPage = () => {
   return (
      <div className='page'>
         <div className="container mt-3">
            <div className="row">
               <div className="col col-3 p-2">
                  <AdminSidebar />
               </div>
               <div className="col col-9 p-2">
                  <SubTitle title={`اداره جميع الطلبات`} />
                  <AdminAllOrdersContainer />
               </div>
            </div>
         </div>
      </div>
   )
}

export default AdminAllOrdersPage