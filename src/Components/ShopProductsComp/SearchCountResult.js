import React from 'react'
import UnopDropdown from 'unop-react-dropdown'
import sort from '../../Images/sort.png'
import BestSaleContainer from '../BestSale/BestSaleContainer'
import SideFilter from './SideFilter'
import ViewSearchProductHook from '../../custom hook/products/view-search-product-hook'
import PaginationComponent from '../Utilty/PaginationComponent'
import { Col } from 'react-bootstrap'

const SearchCountResult = () => {


   const [products, numberOfPages, getNum, handleSortDropDown] = ViewSearchProductHook()


   return (
      <>
         <div className="searchCountResult d-flex justify-content-between my-3">
            <div className="count-result fs-4 fw-bold">{(products) && products.results} منتج متاح ...</div>
            {/* start UnopDropdown */}
            <div className='search-count-text'>
               <UnopDropdown
                  trigger={
                     <p>
                        <img src={sort} width='20px' height='20px' style={{ objectFit: 'cover' }} alt="" />
                        ترتيب حسب
                     </p>
                  }
                  align="CENTER"
                  hover
               >
                  <div className='card-filter'>
                     <div onClick={handleSortDropDown} data-sort='' className='border-bottom card-filter-item'>بدون ترتيب</div>
                     <div onClick={handleSortDropDown} data-sort='quantity' className='border-bottom card-filter-item'>الاكثر كميه</div>
                     <div onClick={handleSortDropDown} data-sort='sold' className='border-bottom card-filter-item'>الاكثر مبيعا</div>
                     <div onClick={handleSortDropDown} data-sort='rate' className='border-bottom card-filter-item'>الاعلى تقيما</div>
                     <div onClick={handleSortDropDown} data-sort='+price' className='border-bottom card-filter-item'>السعر من الاقل للاعلى</div>
                     <div onClick={handleSortDropDown} data-sort='-price' className='border-bottom card-filter-item'>السعر من الاعلى للاقل</div>
                  </div>
               </UnopDropdown>
            </div>

         </div>




         {/* start content */}
         <div className="row">
            {/* side filter */}
            <Col sm='12' md='4' lg='3' >
               <SideFilter />
            </Col>
            {/* content */}
            <Col sm='12' md='8' lg='9'>
               <BestSaleContainer />
            </Col>
         </div>
         {
            numberOfPages > 1 &&
            <PaginationComponent onPress={getNum} pageCount={numberOfPages} />
         }
      </>

   )
}

export default SearchCountResult