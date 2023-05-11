import React from 'react'

import brand1 from '../../Images/brand1.png';
import brand2 from '../../Images/brand2.png';
import brand3 from '../../Images/brand3.png';

const BrandContainer = () => {
   return (
      <div className="brands gap-2 grid-180">
         <div className="brand bg-light">
            <img  className='w-100' src={brand1} alt="" />
         </div>
         <div className="brand bg-light">
            <img  className='w-100' src={brand2} alt="" />
         </div>
         <div className="brand bg-light">
            <img  className='w-100' src={brand3} alt="" />
         </div>
         <div className="brand bg-light">
            <img  className='w-100' src={brand2} alt="" />
         </div>
         <div className="brand bg-light">
            <img  className='w-100' src={brand3} alt="" />
         </div>
      </div>
   )
}

export default BrandContainer