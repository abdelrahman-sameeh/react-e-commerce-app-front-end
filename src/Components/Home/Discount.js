import React from 'react'
import labtops from '../../Images/laptops.png'

function Discount() {
   return (
      <div className="discount p-3 d-flex justify-content-around align-items-center flex-wrap rounded  ">
         <img style={{width: '300px', height:'120px'}} src={labtops} alt="" />
         <span style={{minWidth: '120px'}} className='fs-2 bold'> خصم يصل حتي ٣٠٪ علي اجهزه اللاب توب </span>
      </div>
   )
}

export default Discount