import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PaginationComponent from '../../Components/Utilty/PaginationComponent'
import ProductComp from '../../Components/ProductDetalisComp/ProductComp'
import ProductsInBrandHook from '../../custom hook/products/products-in-brand-hook'

const ProductsInBrandPage = () => {
   const [products, pagination, getNum] = ProductsInBrandHook()
   return (
      <div className='page'>
         <div className="container my-5">
            <Row>
               {
                  (products && products.length) ? (products.map(product => {
                     return <Col lg='4' md='6' sm='12' className='mt-3' >
                        <ProductComp product={product} />
                     </Col>
                  })) : (<div className='alert alert-danger text-center fs-2 fw-bold'> لا يوجد منتجات لهذا البراند </div>)
               }
            </Row>
            {
               pagination && pagination.numberOfPages > 1 &&
               <PaginationComponent pageCount={pagination.numberOfPages} onPress={getNum} />
            }
         </div>
      </div>
   )
}

export default ProductsInBrandPage