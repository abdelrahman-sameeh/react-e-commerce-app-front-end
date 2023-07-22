import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SubTitle from '../../Components/Utilty/SubTitle'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import AllCouponsContainer from '../../Components/Admin/AllCouponsContainer'

const AdminAllCouponsPage = () => {
   return (
      <div className='page'>
         <div className="container mt-3">
            <Row>
               <Col lg='3' md='3' sm='12' >
                  <AdminSidebar />
               </Col>
               <Col lg='9' md='9' sm='12' >
                  <SubTitle title='كل الكوبونات' />
                  <AllCouponsContainer />
               </Col>
            </Row>
         </div>
      </div>
   )
}

export default AdminAllCouponsPage