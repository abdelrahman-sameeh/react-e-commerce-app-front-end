import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const UserAddress = () => {
   return (
      <div className="user-address rounded bg-light p-2 mt-2">
         <div className="d-flex justify-content-between align-items-center">
            <span>
               المنزل
            </span>
            <div className="controls d-flex align-items-center gap-2">
               <Link className='text-decoration-none' to='/edit-address'>
                  <div className="modify text-dark">
                     <FontAwesomeIcon icon={faPenToSquare} />
                     تعديل
                  </div>
               </Link>
               <button className="btn modify">
                  <FontAwesomeIcon icon={faTrash} />
                  حذف
               </button>
            </div>
         </div>

         <div className="user-address my-2">القاهرة مدينه نصر شارع التسعين عماره ١٤</div>

         <div className="user-phone my-2"> رقم الهاتف:
            <span className='text-black-50'>0021313432423</span>
         </div>
         
      </div>
   )
}

export default UserAddress