import React from 'react'

const AddSubCategory = () => {
   return (
      <div>
         <form action={`/add/subCategory`} method='post'>
            <div className="my-3">
               <input className='form-control' type="text" placeholder={`اسم التصنيف الفرعى`} name='subCategory' />
            </div>
            <select className='form-control mb-3' name="category" id="">
               <option value="التصنيف الاول">التصنيف الاول</option>
               <option value="التصنيف الثانىى">التصنيف الثانىى</option>
               <option value="التصنيف الثانىى">التصنيف الثانىى</option>
               <option value="التصنيف الثانىى">التصنيف الثانىى</option>
            </select>
            <div className="d-flex justify-content-end">
               <button className="btn btn-dark">
                  حفظ التعديلات
               </button>
            </div>
         </form>
      </div>
   )
}

export default AddSubCategory