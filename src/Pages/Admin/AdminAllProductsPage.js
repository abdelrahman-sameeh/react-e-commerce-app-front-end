import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import AdminAllProductContainer from '../../Components/Admin/AdminAllProductContainer'
import SubTitle from '../../Components/Utilty/SubTitle'

const AdminAllProductsPage = () => {
   return (
      <div className='page' >
         <div className="container mt-3">
            <div className="row">
               <div className="col col-3 p-2">
                  <AdminSidebar />
               </div>
               <div className="col col-9 p-2">
                  <SubTitle title={`اداره جميع المنتجات`} />
                  <AdminAllProductContainer />
               </div>
            </div>
         </div>
      </div>
   )
}

export default AdminAllProductsPage