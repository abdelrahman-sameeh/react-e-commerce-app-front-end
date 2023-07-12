
import { ToastContainer } from 'react-toastify'
import { Spinner } from 'react-bootstrap'
import AddCategoryHook from '../../custom hook/category/add-category-hook'

const AddCategoryContainer = () => {

   const [image, loading, isPress, input, handleChangeImage, handleSubmit, handleNameChange] = AddCategoryHook() 

   return (
      <div>
         <form action={`/add/category`} method='post'>
            <div className="fs-5"> صوره تصنيف </div>
            <input className='d-none' type="file" id='image' name='image' onChange={handleChangeImage} />
            <label htmlFor="image" >
               <img style={{ width: '120px', height: '120px', objectFit: 'contain', cursor: 'pointer' }} src={image} alt="" />
            </label>
            <div className=" my-3">
               <input ref={input} className='form-control' type="text" placeholder={`اسم التصنيف`} name='brandName' onChange={handleNameChange} />
            </div>
            <div className="d-flex justify-content-end ">
               <button onClick={handleSubmit} className="btn btn-dark d-flex justify-content-center align-items-center gap-2">
                  {
                     isPress && loading && <Spinner animation="border" variant="light" />
                  }
                  حفظ التعديلات
               </button>
            </div>
         </form>
         <ToastContainer />
      </div>
   )
}

export default AddCategoryContainer