import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
   return (
      <div className="footer py-3 px-4 bg-dark text-light flex-wrap">
         <div className="contact d-flex gap-3 align-items-center">
            <span className=' text-light bold' >الشروط والاحكام</span>
            <span className=' text-light bold' >سياسه الخصوصيه</span>
            <span className=' text-light bold' >اتصل بنا</span>
         </div>
         <div className="social d-flex align-items-center gap-1">
            <div className="phone center bold text-light mx-2 gap-1" style={{fontSize: '18px'}} >
               <FontAwesomeIcon icon={faPhone} />
               <span>01556577857</span>
            </div>

               <FontAwesomeIcon className='ms-1' style={{fontSize: '18px'}} icon={faFacebook} />
               <FontAwesomeIcon className='ms-1' style={{fontSize: '18px'}} icon={faInstagram} />
               <FontAwesomeIcon className='ms-1' style={{fontSize: '18px'}} icon={faTwitter} />
         </div>
      </div>
   )
}

export default Footer