import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import AdminAllOrdersContainer from '../../Components/Admin/AdminAllOrdersContainer'
import SubTitle from '../../Components/Utilty/SubTitle'
import { Col, Row } from 'react-bootstrap'

const AdminAllOrdersPage = () => {
   return (
      <div className='page'>
         <div className="container mt-3">
            <Row>
               <Col lg='3' md='3' sm='12' >
                  <AdminSidebar />
               </Col>
               <Col lg='9' md='9' sm='12' >
                  <SubTitle title={`اداره جميع الطلبات`} />
                  <AdminAllOrdersContainer />
               </Col>
            </Row>
         </div>
      </div>
   )
}

export default AdminAllOrdersPage