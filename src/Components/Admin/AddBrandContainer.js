
import { ToastContainer } from 'react-toastify'
import { Spinner } from 'react-bootstrap'
import AddBrandHook from '../../custom hook/brand/add-brand-hook'

const AddBrandContainer = () => {

   const [image, loading, isPress, input, handleChangeImage, handleSubmit, handleNameChange] = AddBrandHook() 

   return (
      <div>
         <form action={`/add/`} method='post'>
            <div className="fs-5"> صوره ماركه </div>
            <input className='d-none' type="file" id='image' name='image' onChange={handleChangeImage} />
            <label htmlFor="image" >
               <img style={{ width: '120px', height: '120px', objectFit: 'contain', cursor: 'pointer' }} src={image} alt="" />
            </label>
            <div className=" my-3">
               <input ref={input} className='form-control' type="text" placeholder={`اسم ماركه`} name='brandName' onChange={handleNameChange} />
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

export default AddBrandContainer