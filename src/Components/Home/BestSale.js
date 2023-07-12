import React from 'react'
import SubTitle from '../Utilty/SubTitle'
import BestSaleContainer from '../../Components/BestSale/BestSaleContainer'



function BestSale() {
   return (
      <div className="popular">
         <SubTitle title='الاكثر مبيعا' btnLink='المزيد' link='products' />
         <BestSaleContainer limit={3} />
      </div>
   )
}

export default BestSale