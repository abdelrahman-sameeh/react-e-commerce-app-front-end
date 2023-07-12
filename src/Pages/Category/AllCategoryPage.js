/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import SubTitle from '../../Components/Utilty/SubTitle'
import PaginationComponent from '../../Components/Utilty/PaginationComponent'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import AllCategoryPageHook from '../../custom hook/category/all-category-page-hook'

/*
   getAllCategory()
   ---desc---
   --fun()
   --params(limit, pageNum)
   --if(!limit or !pageNum) return all components(category)
   --else return specific components(category)
*/

function AllCategoryPage() {

   const  [category, getPageNum] = AllCategoryPageHook()

   return (
      <div className="all-category-page page">
         <div className="container">
            <SubTitle title='التصنيفات' />
            <CategoryContainer category={category} />
            {category && category.data && category.data.length && category.paginationResult.numberOfPages>1 &&
               <PaginationComponent pageCount={category.paginationResult.numberOfPages} onPress={getPageNum} />
            }
         </div>
      </div>
   )
}

export default AllCategoryPage