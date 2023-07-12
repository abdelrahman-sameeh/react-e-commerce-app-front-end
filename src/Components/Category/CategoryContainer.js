import React from 'react'
import CategoryCard from '../../Components/Category/CategoryCard'
import {  useSelector } from 'react-redux'


const CategoryContainer = ({category}) => {

   const colors = [
      'rgba(139, 168, 206, 0.5)',
      'rgba(68, 160, 206, 0.5)',
      'rgba(206, 68, 204, 0.5)',
      'rgba(223, 155, 60, 0.5)',
      'rgba(139, 68, 206, 0.5)',
      'rgba(0, 0, 0, 0.2)',
   ]
   let i = 0;
   const loading = useSelector(state => state.category.loading)

   return (
      <div className="categories gap-4 flex-wrap p-2">
         {
            loading ?
               <div className="load">
                  <div className="loading"><div className="lds-dual-ring"></div></div>
               </div>
               :
               (category && category.data && category.data.length) ?
                  category.data.map((category) => {
                     // for index color
                     i++;
                     if (i === 6) {
                        i = 0;
                     }
                     // 
                     return (
                        <CategoryCard key={category._id} image={category.image} color={colors[i]} name={category.name} />
                     )
                  }) :
                  <p className='text-center fs-1 m-0 bold w-100 rounded bg-light'> There is category </p>
         }
      </div>
   )
}

export default CategoryContainer