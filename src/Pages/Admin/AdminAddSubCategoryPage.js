import React from 'react'
import SubTitle from '../../Components/Utilty/SubTitle'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import AddSubCategory from '../../Components/Admin/AddSubCategory'
import { Col, Row } from 'react-bootstrap'

const AdminAddSubCategoryPage = () => {
   return (
      <div className='page'>
         <div className="container mt-3">
            <Row>
               <Col lg='3' md='3' sm='12' >
                  <AdminSidebar />
               </Col>
               <Col lg='9' md='9' sm='12' >
                  <SubTitle title='اضافه تصنيف فرعى جديد' />
                  <AddSubCategory />
               </Col>
            </Row>
         </div>
      </div>
   )
}

export default AdminAddSubCategoryPage