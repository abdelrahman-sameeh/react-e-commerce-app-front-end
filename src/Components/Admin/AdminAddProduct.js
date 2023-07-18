import React from 'react'
import Select from 'react-select';
import MultiImageInput from 'react-multiple-image-input';
import { ToastContainer } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import AddProductHook from '../../custom hook/products/add-product-hook';


const AdminAddProduct = () => {

   const [
      loading,
      isPress,
      images,
      colors,
      allCategory,
      allBrands,
      options,
      animatedComponents,
      setImages,
      handleChangeProductName,
      handleChangeProductDesc,
      handleChangeProductPriceBefore,
      handleChangeProductPriceAfter,
      handleChangeProductQty,
      handleChangeBrandId,
      handleChangeCategory,
      onSelectSubCategories,
      setBrandId,
      handelAddColor,
      handleSubmit,
      productName,
      productDescription,
      productPriceBefore,
      productPriceAfter,
      qty,
      catId,
      brandId
   ] = AddProductHook()



   return (
      <div>
         <form  /*action={`/add/product`}*/ method='post'>
            <div className="fs-5 mb-1"> صور المنتج </div>
            <input className='d-none' type="file" id='image' name='image' />
            <label htmlFor="image">
               <MultiImageInput
                  images={images}
                  setImages={setImages}
                  theme={'light'} 
                  allowCrop={false}
                  max={4}
               />
            </label>
            <input onChange={handleChangeProductName}  value={productName}   className='mt-2 form-control' name='productName' type="text" placeholder={`اسم المنتج`} />
            <textarea onChange={handleChangeProductDesc}  value={productDescription}  className='mt-2 form-control' placeholder='وصف المنتج' defaultValue=''></textarea>
            <input onChange={handleChangeProductPriceBefore} value={productPriceBefore}   className='mt-2 form-control' type="number" placeholder={`السعر قبل الخصم`} />
            <input onChange={handleChangeProductPriceAfter} value={productPriceAfter}   className='mt-2 form-control' type="number" placeholder={`السعر بعد الخصم`} />
            <input onChange={handleChangeProductQty} value={qty} className='mt-2 form-control' type="number" placeholder={`الكميه الموجودة`} />

            <select onChange={(e) => handleChangeCategory(e.target.value)} value={catId} className='mt-2 form-control' name="mainCategory">
               <option value='0' defaultChecked >التصنيف الرئيسى</option>
               {
                  allCategory && allCategory.data && allCategory.data.map(cat => {
                     return <option key={cat._id} value={cat._id}>{cat.name}</option>
                  })
               }
            </select>


            <Select
               className='mt-2'
               closeMenuOnSelect={false}
               components={animatedComponents}
               isMulti
               options={options}
               onChange={onSelectSubCategories}
            />

            <select onChange={handleChangeBrandId} value={brandId} className='mt-2 form-control' name="brand">
               <option value='0' >الماركه</option>
               {
                  allBrands && allBrands.data && allBrands.data.map(brand => {
                     return <option key={brand._id} value={brand._id}>{brand.name}</option>
                  })
               }  
            </select>


            <div className="my-2 product-colors">  
               <div className="colors">
                  {
                     (colors && colors.length) ? (
                        colors.map((color, index)=>{
                           return (<label key={index} className="product-color" data-color={color} style={{ backgroundColor: color }}></label>)
                        })
                     ) : null 
                  }
               </div>
               <div className="d-flex justify-content-start align-items-center gap-2">
                  <span htmlFor=""> اختر لون </span>
                  <input style={{ width: '50px' }} className='form-control' type="color" />
                  <div onClick={handelAddColor} style={{ width: 'fit-content', cursor: 'pointer' }} className="add-color fs-5 border px-3 rounded bg-dark text-light">اضافة</div>
               </div>
            </div>




            <div className="d-flex justify-content-end ">
               <button onClick={handleSubmit} className="btn btn-dark d-flex justify-content-center align-items-center gap-2">
                  {
                     isPress && loading && <Spinner animation={'border'} variant='light' />
                  }
                  حفظ التعديلات 
               </button>
            </div>
         </form>
         <ToastContainer />
      </div>
   )
}

export default AdminAddProduct

 