import React from 'react'

const CategoryCard = ({color, image}) => {
   return (

      <div className="cat center gap-2 flex-column ">
         <div style={{ backgroundColor: `${color}` }} className="image">
            <img className='w-100' src={image} alt="" />
         </div>
         <p className='fw-600 fs-5'> اجهزه منزليه </p>
      </div>

   )
}

export default CategoryCard