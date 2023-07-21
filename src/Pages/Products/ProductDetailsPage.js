import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import ProductSlider from '../../Components/ProductDetalisComp/ProductSlider'
import ProductDescription from '../../Components/ProductDetalisComp/ProductDescription'
import PeopleComments from '../../Components/ProductDetalisComp/PeopleReviews'
import { Row } from 'react-bootstrap'

const ProductDetailsPage = () => {


  return (
    <div className='page'>

      <div className="bg-light py-2">
        <div className="container">
          <CategoryHeader  />
        </div>
      </div>

      <div className="container">
        {/* start product description */}
        <div className="row my-4" >
          <div className="product-slider col col-4 bg-light">
            <ProductSlider  />
          </div>
          <div className="product-description col col-8 rounded p-3 bg-light" >
            <ProductDescription />
          </div>
        </div>
        {/* end product description */}

        <Row>
          <PeopleComments />
        </Row>
      


      </div>
    </div>
  )
}

export default ProductDetailsPage