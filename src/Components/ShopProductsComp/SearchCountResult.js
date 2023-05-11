import React from 'react'
import UnopDropdown from 'unop-react-dropdown'
import sort from '../../Images/sort.png'
import BestSaleContainer from '../BestSale/BestSaleContainer'
import SideFilter from './SideFilter'

const SearchCountResult = () => {
   const handler = (e) => {

   }

   return (
      <>
         <div className="searchCountResult d-flex justify-content-between my-3">
            <div className="count-result fs-4 fw-bold">1000 منتج متاح ...</div>
            {/* start UnopDropdown */}
            <div className='search-count-text'>
               <UnopDropdown
                  onAppear={handler}
                  onDisappearStart={handler}
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
                     <div className='border-bottom card-filter-item'>الاكثر مبيعا</div>
                     <div className='border-bottom card-filter-item'>الاعلى تقيما</div>
                     <div className='border-bottom card-filter-item'>السعر من الاقل للاعلى</div>
                     <div className='border-bottom card-filter-item'>السعر من الاعلى للاقل</div>
                  </div>
               </UnopDropdown>
            </div>

         </div>




         {/* start content */}
         <div className="row">
            {/* side filter */}
            <SideFilter />
            {/* content */}
            <BestSaleContainer col="10" />
         </div>

      </>

   )
}

export default SearchCountResult