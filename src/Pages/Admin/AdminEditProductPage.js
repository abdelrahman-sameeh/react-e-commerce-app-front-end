import React from 'react'
import Select from 'react-select';
import MultiImageInput from 'react-multiple-image-input';
import { ToastContainer } from 'react-toastify';
import { Col, Row, Spinner } from 'react-bootstrap';
import AddProductHook from '../../custom hook/products/add-product-hook';
import AdminEditProductHook from '../../custom hook/admin/admin-edit-product-hook';
import AdminSidebar from '../../Components/Admin/AdminSidebar';
import AdminEditProductContainer from '../../Components/Admin/AdminEditProductContainer';
import SubTitle from '../../Components/Utilty/SubTitle';


const AdminEditProductPage = () => {



   return (

      <div className='page'>
         <div className="container mt-3">
            <Row>
               <Col lg='3' md='3' sm='12' >
                  <AdminSidebar />
               </Col>
               <Col lg='9' md='9' sm='12' >
                  <SubTitle title={`تعديل المنتج`} />
                  <AdminEditProductContainer />
               </Col>
            </Row>
         </div>
      </div>
   )
}

export default AdminEditProductPage

