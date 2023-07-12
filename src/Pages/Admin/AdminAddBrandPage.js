import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import SubTitle from '../../Components/Utilty/SubTitle'
import { Col, Row } from 'react-bootstrap'
import AddBrandContainer from '../../Components/Admin/AddBrandContainer'

const AdminAddBrandPage = () => {
   return (
      <div className='page'>
         <div className="container mt-3">
            <Row>
               <Col lg='3' md='3' sm='12' >
                  <AdminSidebar />
               </Col>
               <Col lg='9' md='9' sm='12' >
                  <SubTitle title='اضافه ماركه جديد' />
                  <AddBrandContainer />
               </Col>
            </Row>
         </div>
      </div>
   )
}

export default AdminAddBrandPage