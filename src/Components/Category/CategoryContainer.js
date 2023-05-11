import React from 'react'
import labtop from '../../Images/labtop.png'
import CategoryCard from '../../Components/Category/CategoryCard'


const CategoryContainer = () => {
   const colors = [
      'rgba(139, 168, 206, 0.5)',
      'rgba(68, 160, 206, 0.5)',
      'rgba(206, 68, 204, 0.5)',
      'rgba(223, 155, 60, 0.5)',
      'rgba(139, 68, 206, 0.5)',
   ]
   return (
      <div className="categories gap-4 flex-wrap p-2">
         {colors.map((category, index) => {
            return (
               <CategoryCard image={labtop} color={category} />
            )
         })}
      </div>
   )
}

export default CategoryContainer