import React from 'react'

import upload from '../../Images/upload.png'

const AddBrandOrCategoryContainer = (props) => {
   return (
      <div>
         <form action={`/add/${props.name}`} method='post'>
            <div className="fs-5"> صوره {props.name} </div>
            <input className='d-none' type="file" id='image' name='image' />
            <label htmlFor="image">
               <img style={{width:'120px'}} src={upload}  alt="" />
            </label>
            <div className=" my-3">
               <input className='form-control' type="text" placeholder={`اسم ${props.name}`}  name='brandName' />
            </div>
            <div className="d-flex justify-content-end ">
               <button className="btn btn-dark">
                  حفظ التعديلات
               </button>
            </div>
         </form>
      </div>
   )
}

export default AddBrandOrCategoryContainer