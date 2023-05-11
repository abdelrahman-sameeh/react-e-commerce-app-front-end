import React from 'react'
import Slider from '../../Components/Home/Slider'
import Category from '../../Components/Home/Category'

import Discount from '../../Components/Home/Discount'
import LatestOutfit from '../../Components/Home/LatestOutfit'
import FamousBrand from '../../Components/Home/FamousBrand'
import BestSale from '../../Components/Home/BestSale'

function HomePage() {
   return (
         <div className="home page">
            <Slider />
            <div className="container">
               <Category />
               <BestSale />
               <Discount />
               <LatestOutfit />
               <FamousBrand />
            </div>
         </div>
   )
}

export default HomePage