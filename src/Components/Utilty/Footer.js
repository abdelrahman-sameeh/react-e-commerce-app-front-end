/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
   return (
      <div className="footer py-3 px-4 bg-dark text-light flex-wrap">
         <div className="contact d-flex gap-3 align-items-center">
            <span className=' text-light bold' >الشروط والاحكام</span>
            <span className=' text-light bold' >سياسه الخصوصيه</span>
            <span className=' text-light bold' >اتصل بنا</span>
         </div>
         <div className="social d-flex align-items-center gap-1">
            <div className="phone center bold text-light mx-2 gap-1" style={{ fontSize: '18px' }} >
               <FontAwesomeIcon icon={faPhone} />
               <span>01556577857</span>
            </div>

            <a className='text-light' target='_blank' href="https://www.facebook.com/profile.php?id=100020585667212" rel="noreferrer"> <FontAwesomeIcon className='ms-1' style={{ fontSize: '18px' }} icon={faFacebook} /> </a>
            <a className='text-light' target='_blank' href="https://www.linkedin.com/in/abdelrahman-gadallah-384508231"> <FontAwesomeIcon className='ms-1' style={{ fontSize: '18px' }} icon={faLinkedin} /> </a>
            <a className='text-light' target='_blank' href="https://www.facebook.com/profile.php?id=100020585667212"> <FontAwesomeIcon className='ms-1' style={{ fontSize: '18px' }} icon={faGithub} /> </a>

         </div>
      </div>
   )
}

export default Footer