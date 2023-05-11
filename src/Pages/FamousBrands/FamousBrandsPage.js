import React from 'react'
import SubTitle from '../../Components/Utilty/SubTitle'


import BrandContainer from '../../Components/Brand/BrandContainer';
import PaginationComponent from '../../Components/Utilty/PaginationComponent';


const FamousBrandPage = () => {
   return (
      <div className="famous-brand page container">
         <SubTitle title='اشهر الماركات'  />
         <BrandContainer />
         <PaginationComponent />
      </div>
   )
}

export default FamousBrandPage

