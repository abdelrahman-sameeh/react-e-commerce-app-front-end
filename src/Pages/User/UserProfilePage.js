import React from 'react'
import { Col, Row } from 'react-bootstrap'
import UserSidebar from '../../Components/User/UserSidebar'
import UserProfileContainer from '../../Components/User/UserProfileContainer'

const UserProfilePage = () => {
   return (
      <div className='page'>
         <div className="container">
            <Row className='mt-3'>
               <Col sm='12' md='3' lg='3' >
                  <UserSidebar />
               </Col>
               <Col sm='12' md='9' lg='9' >
                  <UserProfileContainer />
               </Col>
            </Row>
         </div>
      </div>
   )
}

export default UserProfilePage