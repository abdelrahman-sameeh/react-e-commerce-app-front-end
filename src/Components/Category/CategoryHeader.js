import React from 'react'
import { Link } from 'react-router-dom'

const CategoryHeader = () => {
  return (
   <div style={{overflow:'auto'}} className="category-header d-flex gap-1">
      <div style={{cursor:'pointer'}} className="rounded px-2 py-1 category text-black-50"> الكل </div>
      <div style={{cursor:'pointer'}} className="rounded px-2 py-1 category text-black-50"> الكترونيات </div>
      <div style={{cursor:'pointer'}} className="rounded px-2 py-1 category text-black-50"> ملابس </div>
      <div style={{cursor:'pointer'}} className="rounded px-2 py-1 category text-black-50"> كهربيه </div>
      <div style={{cursor:'pointer'}} className="rounded px-2 py-1 category text-black-50"> تخفيضات </div>
      <div style={{cursor:'pointer'}} className="rounded px-2 py-1 category text-black-50"> تخفيضات </div>
      <Link style={{cursor:'pointer'}} className='rounded px-2 py-1 text-decoration-none text-black-50' to='/category' > المزيد </Link>
   </div>
  )
}

export default CategoryHeader