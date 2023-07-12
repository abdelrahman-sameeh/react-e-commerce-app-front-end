/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import SubTitle from '../Utilty/SubTitle'
import HomeCategoryHook from '../../custom hook/category/home-category-hook';

function Category() {
   
   let  [isLoading, category, i, colors] = HomeCategoryHook()


   return (
      <div className="category mt-2">
         <SubTitle title='التصنيفات' btnLink='المزيد' link='category' />

         {isLoading === true ?
            <div className="loading"><div className="lds-dual-ring"></div></div> :
            <div className="categories gap-4 flex-wrap p-2">
               {(category && category.data && category.data.length) ? category.data.slice(0, 6).map((cat, index) => {
                  
                  // for color index
                  i++;
                  if (i === 5) {
                     i = 0;
                  }

                  return (
                     <div key={cat._id} className="cat center gap-2 flex-column ">
                        <div style={{ backgroundColor: `${colors[i]}` }} className="image">
                           <img className='w-100' src={cat.image} alt="" />
                        </div>
                        <p className='fw-600 fs-5'> {cat.name} </p>
                     </div>
                  )
               }) :
                  <p className='text-center fs-1 m-0 bold w-100 rounded bg-light'> There is category </p>}
            </div>
         }


      </div>
   )
}

export default Category