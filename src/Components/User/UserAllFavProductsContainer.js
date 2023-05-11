import React from 'react'
import { Col, Row } from 'react-bootstrap'
import UserFavProduct from './UserFavProduct'

const UserAllFavProductsContainer = () => {
   return (
      <Row>
         <Col className='fav-product' lg='4' md='4' sm='6' >
            <UserFavProduct />
         </Col>
         <Col className='fav-product' lg='4' md='4' sm='6' >
            <UserFavProduct />
         </Col>
      </Row>
   )
}

export default UserAllFavProductsContainer