import React from 'react'
import SubTitle from '../Utilty/SubTitle'

import labtop from '../../Images/labtop.png'

function Category() {
   const colors = [
      'rgba(139, 168, 206, 0.5)',
      'rgba(68, 160, 206, 0.5)',
      'rgba(206, 68, 204, 0.5)',
      'rgba(223, 155, 60, 0.5)',
      'rgba(139, 68, 206, 0.5)',
   ]
   return (
      <div className="category mt-2">
         <SubTitle title='التصنيفات' btnLink='المزيد' link='category' />

         <div className="categories gap-4 flex-wrap p-2">
            {colors.map((cat, index) => {
               return (
                  <div key={index} className="cat center gap-2 flex-column ">
                     <div style={{backgroundColor:`${cat}`}} className="image">
                        <img className='w-100' src={labtop} alt="" />
                     </div>
                     <p className='fw-600 fs-5'> اجهزه منزليه </p>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default Category