import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import AdminAllProductContainer from '../../Components/Admin/AdminAllProductContainer'
import SubTitle from '../../Components/Utilty/SubTitle'
import { Col, Row } from 'react-bootstrap'
import PaginationComponent from '../../Components/Utilty/PaginationComponent'
import AdminAllProductHook from '../../custom hook/admin/admin-all-product-hook'

const AdminAllProductsPage = () => {
   const  [products, deleteProduct, getPaginationNum] = AdminAllProductHook()
   
   

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
                  {
                     products && products.paginationResult && products.paginationResult.numberOfPages > 1 &&
                        <PaginationComponent onPress={getPaginationNum} pageCount={products.paginationResult.numberOfPages} />
                  }
               </Col>
            </Row>
         </div>
      </div>
   )
}

export default AdminAllProductsPage