import React from 'react';
import SubTitle from '../Utilty/SubTitle';


import BrandContainer from '../Brand/BrandContainer';
import HomeBrandHook from '../../custom hook/brand/home-brand-hook';

function FamousBrand() {

   let [brands] = HomeBrandHook()

   if(brands && brands.data){
      brands = brands.data.slice(0, 6)
   }

   return (
      <div >
         <SubTitle title='اشهر الماركات' btnLink='المزيد' link='brands'/>
         <BrandContainer brands={brands} />
      </div>
   )
}

export default FamousBrand