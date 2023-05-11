import React, { useEffect, useState } from 'react'
import upload from '../../Images/upload.png'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const AdminAddProduct = () => {

   const animatedComponents = makeAnimated();
   const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
   ]

   const [colors, setColors] = useState([])
   const [subCategories, setSubCategories] = useState([])

   const handelAddColor = (e) => {
      // add color to DOM
      const color = e.target.previousSibling.value
      if (!colors.includes(color)) {
         const colorContainer = document.querySelector('.product-colors .colors')
         const label = document.createElement('label');
         label.classList.add('product-color');
         label.setAttribute('color', color);
         label.style.backgroundColor = color;
         colorContainer.appendChild(label)
      } else return

      // add color to state
      const productColors = document.querySelectorAll('.product-colors .colors label.product-color')
      productColors.forEach(col => {
         setColors(() => [...colors, col.getAttribute('color')])
      })
   }

   document.addEventListener('click', (e) => {
      // remove color from DOM and state
      if (e.target.classList.contains('product-color')) {
         const colorsAfterRemove = colors.filter(col => col !== e.target.getAttribute('color'))
         setColors(colorsAfterRemove)
         e.target.remove()
      }
   })

   const handelSubmit = (e) => {
      e.preventDefault()
      const image = document.getElementById('image')
      const productName = document.getElementsByName('productName')[0]
      const productDescription = document.getElementsByName('productDescription')[0]
      const priceBeforeDiscount = document.getElementsByName('priceBeforeDiscount')[0]
      const priceAfterDiscount = document.getElementsByName('priceAfterDiscount')[0]
      const mainCategory = document.getElementsByName('mainCategory')[0]
      const subCategories = document.getElementsByName('subCategories')[0]
      const brand = document.getElementsByName('brand')[0]
      const colors = document.getElementsByName('colors')[0]



      console.log(image.defaultValue);
      console.log(productName.defaultValue);
      console.log(productDescription.defaultValue);
      console.log(priceBeforeDiscount.defaultValue);
      console.log(priceAfterDiscount.defaultValue);
      console.log(mainCategory.defaultValue);
      console.log(subCategories.defaultValue);
      console.log(brand.defaultValue);
      console.log(colors.defaultValue);
   }


   const onSelectChange = (selected) => {
      setSubCategories(selected)
   }

   useEffect(() => {
      // console.log(colors);
   }, [colors])

   return (
      <div>
         <form onSubmit={handelSubmit} /*action={`/add/product`}*/ method='post'>
            <div className="fs-5"> صوره المنتج </div>
            <input className='d-none' type="file" id='image' name='image' />
            <label htmlFor="image">
               <img style={{ width: '120px' }} src={upload} alt="" />
            </label>
            <input className='mt-2 form-control' name='productName' type="text" placeholder={`اسم المنتج`} />
            <textarea className='mt-2 form-control' name="productDescription" placeholder='وصف المنتج' defaultValue=''></textarea>
            <input className='mt-2 form-control' name='priceBeforeDiscount' type="number" placeholder={`السعر قبل الخصم`} />
            <input className='mt-2 form-control' name='priceAfterDiscount' type="number" placeholder={`السعر بعد الخصم`} />

            <select className='mt-2 form-control' name="mainCategory">
               <option >التصنيف</option>
               <option defaultValue="category1">category1</option>
               <option defaultValue="category2">category2</option>
               <option defaultValue="category3">category3</option>
               <option defaultValue="category4">category4</option>
            </select>


            <input type="hidden" name="subCategories" defaultValue={JSON.stringify(subCategories)} />
            <Select
               className='mt-2'
               closeMenuOnSelect={false}
               components={animatedComponents}
               // defaultValue={[options[0], options[1]]}
               isMulti
               options={options}
               onChange={onSelectChange}
            />

            <select className='mt-2 form-control' name="brand">
               <option >الماركه</option>
               <option defaultValue="brand1">brand1</option>
               <option defaultValue="brand2">brand2</option>
               <option defaultValue="brand3">brand3</option>
               <option defaultValue="brand4">brand4</option>
            </select>

            <div className="my-2 product-colors">
               <div className="colors">
               </div>
               <div className="d-flex justify-content-start align-items-center gap-2">
                  <input style={{ width: '50px' }} className='form-control' type="color" />
                  <div onClick={handelAddColor} style={{ width: 'fit-content', cursor: 'pointer' }} className="add-color fs-5 border px-3 rounded">+</div>
               </div>
            </div>

            <input type="hidden" name="colors" defaultValue={JSON.stringify(colors)} />

            <div className="d-flex justify-content-end ">
               <button className="btn btn-dark">
                  حفظ التعديلات
               </button>
            </div>
         </form>
      </div>
   )
}

export default AdminAddProduct

