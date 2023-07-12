import React from 'react'


const BrandContainer = ({brands}) => {

   return (
      <div style={{flexWrap:'wrap'}} className="brands gap-3 d-flex mb-5">
         {
            (brands && brands && brands.length) ?
               brands.map(brand => {
                  return <div key={brand._id} style={{height:'150px', width:'150px'}} className="brand">
                     <img style={{height:'120px', width:'150px', objectFit:'cover', flexWrap:'wrap'}} className='rounded' src={brand.image} alt="حدث خطأ اثناء التحميل" />
                     <div className="name text-center p-2"> {brand.name} </div>
                  </div>
               })
               : null
         }

      </div>
   )
}

export default BrandContainer