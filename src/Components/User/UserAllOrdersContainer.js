import React from 'react'
import SubTitle from '../Utilty/SubTitle'
import { Col, Row } from 'react-bootstrap'
import UserOrder from './UserOrder'

const UserAllOrdersContainer = () => {
  return (
    <div>
      <SubTitle title='اهلا عبدالرحمن' />

    {/* all orders */}
      <Row>
        <Col className='mt-3' lg='12' md='12' sm='12'>
          <UserOrder />
        </Col>
        
        <Col className='mt-3' lg='12' md='12' sm='12'>
          <UserOrder />
        </Col>

      </Row>

    </div>
  )
}

export default UserAllOrdersContainer