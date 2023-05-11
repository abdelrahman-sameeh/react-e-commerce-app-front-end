import React from 'react';
import SubTitle from '../Utilty/SubTitle';


import BrandContainer from '../Brand/BrandContainer';

function FamousBrand() {
   return (
      <div >
         <SubTitle title='اشهر الماركات' btnLink='المزيد' link='brands'/>
         <BrandContainer />
      </div>
   )
}

export default FamousBrand