import React from 'react'

// import favOn from '../../Images/fav-on.png'
import favOff from '../../Images/fav-off.png'
import rate from '../../Images/rate.png'
import prod1 from '../../Images/prod1.png'
import { Link } from 'react-router-dom'

const BestSaleContainer = ({ col }) => {
   return (
      <div className={`products col my-3 gap-3 grid-300 ${col && 'col-' + col} `}>

         <div className="product p-3 rounded">
            <div style={{ height: '200px' }} className="image">
               <Link to='/product/:id'>
                  <img style={{ height: '200px', objectFit: 'contain' }} className='w-100 link' src={prod1} alt="" />
               </Link>
            </div>
            <div className="d-flex justify-content-end">
               <img style={{ width: '25px', cursor: 'pointer' }} src={favOff} alt="" />
            </div>
            <div className="desc fs-5 my-2">سود كربون ساعة يد ذكية بيب إس أسود كربون</div>
            <div className="d-flex justify-content-between align-items center">
               <div className="rate center text-warning">
                  <img style={{ width: '20px' }} src={rate} alt="" />
                  <span> 4.5 </span>
               </div>
               <div className="price bold">
                  38000 جنيه
               </div>
            </div>
         </div>

         <div className="product p-3 rounded">
            <div style={{ height: '200px' }} className="image">
               <Link to='/product/:id'>
                  <img style={{ height: '200px', objectFit: 'contain' }} className='w-100 link' src={prod1} alt="" />
               </Link>
            </div>
            <div className="d-flex justify-content-end">
               <img style={{ width: '25px', cursor: 'pointer' }} src={favOff} alt="" />
            </div>
            <div className="desc fs-5 my-2">سود كربون ساعة يد ذكية بيب إس أسود كربون</div>
            <div className="d-flex justify-content-between align-items center">
               <div className="rate center text-warning">
                  <img style={{ width: '20px' }} src={rate} alt="" />
                  <span> 4.5 </span>
               </div>
               <div className="price bold">
                  38000 جنيه
               </div>
            </div>
         </div>

         <div className="product p-3 rounded">
            <div style={{ height: '200px' }} className="image">
               <Link to='/product/:id'>
                  <img style={{ height: '200px', objectFit: 'contain' }} className='w-100 link' src={prod1} alt="" />
               </Link>
            </div>
            <div className="d-flex justify-content-end">
               <img style={{ width: '25px', cursor: 'pointer' }} src={favOff} alt="" />
            </div>
            <div className="desc fs-5 my-2">سود كربون ساعة يد ذكية بيب إس أسود كربون</div>
            <div className="d-flex justify-content-between align-items center">
               <div className="rate center text-warning">
                  <img style={{ width: '20px' }} src={rate} alt="" />
                  <span> 4.5 </span>
               </div>
               <div className="price bold">
                  38000 جنيه
               </div>
            </div>
         </div>

      </div>
   )
}

export default BestSaleContainer