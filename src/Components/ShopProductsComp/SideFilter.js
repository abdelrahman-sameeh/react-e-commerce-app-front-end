import React from 'react'
import { Col } from 'react-bootstrap'
import SideFilterHook from '../../custom hook/search/side-filter-hook'

const SideFilter = () => {


   const [categories, brands, handleChangeCategory, handleChangeBrand, priceFrom, priceTo] = SideFilterHook()


   return (
      <div lg='2' md='2' sm='12' className="side-filter" >
         <div className="">
            <div className="fs-5">التصنيفات</div>
            <div className='d-flex justify-content-center align-items-center gap-2'>
               <input onChange={handleChangeCategory} value='0' type="checkbox" id='all1' />
               <label htmlFor='all1'>الكل</label>
            </div>
            {
               (categories && categories.data && categories.data.length) ?
               categories.data.map(category => {
                  return (<div key={category._id} className='d-flex justify-content-center align-items-center gap-2'>
                     <input onChange={handleChangeCategory} type="checkbox" value={category._id} id={category._id} />
                     <label htmlFor={category._id}>{category.name}</label>
                  </div>)
               }) : <p> لا يوجد تصنيفات </p>

            }
         </div>
         <div className="mt-2">
            <div className="fs-5">الماركه</div>
            <div className='d-flex justify-content-center align-items-center gap-2'>
               <input onChange={handleChangeBrand} type="checkbox" value='0' id='all2' />
               <label htmlFor='all2'>الكل</label>
            </div>
            {
               (brands && brands.data && brands.data.length) ?
               brands.data.map(brand => {
                  return (<div key={brand._id} className='d-flex justify-content-center align-items-center gap-2'>
                     <input onChange={handleChangeBrand} type="checkbox" value={brand._id} id={brand._id} />
                     <label htmlFor={brand._id}>{brand.name}</label>
                  </div>)
               }) : <p> لا يوجد ماركات </p>

            }
         </div>
         <div className="mt-2">
            <div className="fs-5">السعر</div>
            <div className='d-flex mt-2 gap-2 align-items-center'>
               <label htmlFor="all3">من</label>
               <input onChange={priceFrom} className='form-control' type="text" name="all" id="all3" />
            </div>
            <div className='d-flex mt-2 gap-2 align-items-center'>
               <label htmlFor="checkbox32">الى</label>
               <input onChange={priceTo} className='form-control' type="text" name="all" id="checkbox32" />
            </div>

         </div>
      </div>
   )
}

export default SideFilter