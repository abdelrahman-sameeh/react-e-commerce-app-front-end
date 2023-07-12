import React from 'react'
import AddSubCategoryHook from '../../custom hook/sub-category/add-sub-category-hook'
import { ToastContainer } from 'react-toastify'


const AddSubCategory = () => {


   const [category, input, select, setSubName, handleChangeSelect, handleSubmit] = AddSubCategoryHook()


   return (
      <div>
         <form className='p-3 rounded bg-light' action={`/add/subCategory`} method='post'>
            <div className="my-3">
               <input ref={input} onChange={(e) => setSubName(e.target.value)} className='form-control' type="text" placeholder={`اسم التصنيف الفرعى`} name='subCategory' />
            </div>
            <select ref={select} onChange={handleChangeSelect} className='form-control mb-3' name="category" id="">
               <option value={0}>اختر تصنيف رئيسي</option>
               {
                  category && category.data && category.data.length &&
                  category.data.map(cat => {
                     return <option key={cat._id} value={cat._id}>{cat.name}</option>
                  })
               }
            </select>
            <div className="d-flex justify-content-end">
               <button onClick={handleSubmit} className="btn btn-dark">
                  حفظ التعديلات
               </button>
               <ToastContainer />
            </div>
         </form>
      </div>
   )
}

export default AddSubCategory