import React from 'react'
import SubTitle from '../../Components/Utilty/SubTitle'
import PaginationComponent from '../../Components/Utilty/PaginationComponent'
import CategoryContainer from '../../Components/Category/CategoryContainer'

function AllCategoryPage() {
   
  return (
   <div className="all-category-page page">
      <div className="container">
         <SubTitle title='التصنيفات' />

         <CategoryContainer />

         <PaginationComponent /> 
      </div>
   </div>
  )
}

export default AllCategoryPage