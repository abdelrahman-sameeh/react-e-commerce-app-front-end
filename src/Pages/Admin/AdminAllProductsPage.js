import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import AdminAllProductContainer from '../../Components/Admin/AdminAllProductContainer'
import SubTitle from '../../Components/Utilty/SubTitle'
import { Col, Row } from 'react-bootstrap'

const AdminAllProductsPage = () => {
   return (
      <div className='page' >
         <div className="container mt-3">
            <Row>
               <Col lg='3' md='3' sm='12' >  
                  <AdminSidebar />
               </Col>
               <Col lg='9' md='9' sm='12' >
                  <SubTitle title={`اداره جميع المنتجات`} />
                  <AdminAllProductContainer />
               </Col>
            </Row>
         </div>
      </div>
   )
}

export default AdminAllProductsPage