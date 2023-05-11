import React from 'react'

import labtop from '../../Images/labtop.png'
import favOn from '../../Images/fav-on.png'
import rate from '../../Images/rate.png'

const UserFavProduct = () => {
   return (
      <div>
         <div className="rounded border bg-light p-3 mt-2">
            <div style={{ width: '100%', height: '120px' }} className="image">
               <img style={{ objectFit: 'contain' }} className='w-100 h-100' src={labtop} alt="" />
            </div>
            <div className="d-flex justify-content-end ms-2">
               <button style={{ all: 'unset', width: 'fit-content', cursor: 'pointer' }}>
                  <img style={{ width: '23px ', height: '23px', objectFit: 'cover' }} src={favOn} alt="" />
               </button>
            </div>
            <div className="fav-product-description">
               سود كربون ساعة يد ذكية بيب إس أسود كربون
            </div>
            <div className="d-flex justify-content-between align-items-center">
               <div className="rate text-warning"> 4.5 <img style={{ width: '20px' }} src={rate} alt="" /> </div>
               <div className="price"> 1200 جنيه </div>
            </div>
         </div>
      </div>
   )
}

export default UserFavProduct