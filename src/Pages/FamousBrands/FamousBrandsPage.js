import React from 'react'
import SubTitle from '../../Components/Utilty/SubTitle'


import BrandContainer from '../../Components/Brand/BrandContainer';
import PaginationComponent from '../../Components/Utilty/PaginationComponent';
import AllBrandPageHook from '../../custom hook/Brand/all-brand-page-hook';


const FamousBrandPage = () => {

   const [brands, getPageNum] = AllBrandPageHook()

   return (
      <div className="famous-brand page ">
         <div className="container">
            <SubTitle title='اشهر الماركات' />
            {brands && brands.data && <BrandContainer brands={brands.data} />}
            {brands && brands.paginationResult.numberOfPages > 1 && <PaginationComponent pageCount={brands.paginationResult.numberOfPages} onPress={getPageNum} />}
         </div>
      </div>
   )
}

export default FamousBrandPage

