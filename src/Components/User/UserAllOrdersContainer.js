import React from 'react'
import SubTitle from '../Utilty/SubTitle'
import { Col, Row } from 'react-bootstrap'
import UserOrder from './UserOrder'
import UserAllOrdersHook from '../../custom hook/order/user-get-all-orders'

const UserAllOrdersContainer = () => {
  const [orders, user] = UserAllOrdersHook()

  return (
    <div>
      <SubTitle title={`اهلا ${user && user.name}`} />

      {/* all orders */}
      <Row>
        <Col className='mt-3' lg='12' md='12' sm='12'>

          {
            (orders && orders.length)
              ?
              orders.map((order, index) => {
                return <UserOrder key={index} order={order} numberOfOrder={index} user={user} />
              })
              :
              <div className="alert alert-danger text-center fs-3 fw-bold"> لا يوجد طلبات </div>
          }
        </Col>

      </Row>

    </div>
  )
}

export default UserAllOrdersContainer