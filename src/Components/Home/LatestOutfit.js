import React from 'react'
import SubTitle from '../Utilty/SubTitle'
import LatestOutfitContainer from '../LatestOutfit/LatestOutfitContainer'

function LatestOutfit() {
   return (
      <div className="latest-outfit">
         <SubTitle title='احدث الازياء' btnLink='المزيد' link='products' />
         <LatestOutfitContainer />
      </div>
   )
}

export default LatestOutfit