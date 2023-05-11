import React from 'react'

import SubTitle from '../../Components/Utilty/SubTitle'
import CartContainer from '../../Components/Cart/CartContainer'
const CartPage = () => {
   return (
      <div className='page' style={{ backgroundColor: 'rgb(241 241 241)' }}>
         <div className="container">
            <SubTitle title='عربه التسوق' />
            <CartContainer />
         </div>
      </div>
   )
}

export default CartPage