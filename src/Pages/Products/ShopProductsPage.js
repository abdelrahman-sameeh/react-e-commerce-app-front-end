import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/ShopProductsComp/SearchCountResult'
import PaginationComponent from '../../Components/Utilty/PaginationComponent'

const ShopProductsPage = () => {
  return (
    <div className="page">
      <div className="container">
        <CategoryHeader />
        <SearchCountResult />
        <PaginationComponent />
      </div>
    </div>
  )
}

export default ShopProductsPage