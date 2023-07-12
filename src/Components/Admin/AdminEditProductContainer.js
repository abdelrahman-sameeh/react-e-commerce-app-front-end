import React from 'react'
import { Spinner, ToastContainer } from 'react-bootstrap'
import AdminEditProductHook from '../../custom hook/admin/admin-edit-product-hook'
import MultiImageInput from 'react-multiple-image-input';
import Select from 'react-select';

const AdminEditProductContainer = () => {

   const [
      product,
      productName,
      productDescription,
      productPriceBefore,
      productPriceAfter,
      qty,
      catId,
      selectedSubCategories,
      brandId,
      images,
      colors,
      loading,
      isPress,
      allCategory,
      allBrands,
      options,
      setImages,
      setProductName,
      setProductDescription,
      setProductPriceBefore,
      setProductPriceAfter,
      setQty,
      setCatId,
      setSelectedSubCategories,
      setBrandId,
      handleChangeCategory,
      onSelectSubCategories,
      handelAddColor,
      handleSubmit,
      animatedComponents,
   ] = AdminEditProductHook()



   return (



      <div>
         {
            product && product.data &&
            <form method='post'>
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
               <input onChange={(e) => setProductName(e.target.value)} value={productName} className='mt-2 form-control' name='productName' type="text" placeholder={`اسم المنتج`} />
               <textarea onChange={(e) => setProductDescription(e.target.value)} value={productDescription} className='mt-2 form-control' placeholder='وصف المنتج' ></textarea>
               <input onChange={(e) => setProductPriceBefore(e.target.value)} className='mt-2 form-control' value={productPriceBefore} type="number" placeholder={`السعر قبل الخصم`} />
               <input onChange={(e) => setProductPriceAfter(e.target.value)} className='mt-2 form-control' value={productPriceAfter} type="number" placeholder={`السعر بعد الخصم`} />
               <input onChange={(e) => setQty(e.target.value)} className='mt-2 form-control' type="number" value={qty} placeholder={`الكميه الموجودة`} />

               <select value={catId} onChange={(e) => handleChangeCategory(e.target.value)} className='mt-2 form-control' name="mainCategory">
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


               <select value={brandId} onChange={(e) => setBrandId(e.target.value)} className='mt-2 form-control' name="brand">
                  <option value='0' >الماركه</option>
                  {
                     allBrands && allBrands.data && allBrands.data.map(brand => {
                        return <option key={brand._id} value={brand._id}>{brand.name}</option>
                     })
                  }
               </select>


               <div className="my-2 product-colors">
                  <div className="">
                     {colors && colors.length &&
                        colors.map((color, index) => {
                           return (<label key={index} class="product-color" data-color={color} style={{ backgroundColor: color }}></label>)
                        })
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
         }
         <ToastContainer />
      </div>
   )
}

export default AdminEditProductContainer