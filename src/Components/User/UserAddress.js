import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import DeleteAddressHook from '../../custom hook/address/delete-address-hook'
import { Spinner } from 'react-bootstrap'

const UserAddress = ({ address }) => {

   const [loading, isPress, handleDeleteAddress] = DeleteAddressHook()

   return (
      <div className="user-address rounded bg-light p-2 mt-2">
         <div className="d-flex justify-content-between align-items-center">
            <span className='fs-5 fw-bold'>
               {address.alias}
            </span>
            <div className="controls d-flex align-items-center gap-2">
               <Link className='text-decoration-none' to={`/edit-address/${address._id}`}>
                  <div className="modify text-dark">
                     <FontAwesomeIcon icon={faPenToSquare} />
                     تعديل
                  </div>
               </Link>
               <button onClick={() => handleDeleteAddress(address._id)} className="btn modify">
                  {loading && isPress && <Spinner animation='border' variant='dark' />}
                  <FontAwesomeIcon icon={faTrash} />
                  حذف
               </button>
            </div>
         </div>

         <div className="user-address my-2"> {address.details} </div>

         <div className="user-phone my-2"> رقم الهاتف:
            <span className='text-black-50'> {address.phone} </span>
         </div>
         <div className="user-phone my-2"> الرمز البريدى:
            <span className='text-black-50'> {address.postalCode} </span>
         </div>

      </div>
   )
}

export default UserAddress