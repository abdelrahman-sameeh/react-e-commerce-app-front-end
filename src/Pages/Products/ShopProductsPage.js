import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/ShopProductsComp/SearchCountResult'

const ShopProductsPage = () => {
  return (
    <div className="page">
      <div className="container">
        <CategoryHeader />
        <SearchCountResult />
      </div>
    </div>
  )
}

export default ShopProductsPage