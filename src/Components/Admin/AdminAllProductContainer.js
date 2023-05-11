import React from 'react'
import { Link } from 'react-router-dom'

// import favOn from '../../Images/fav-on.png'
import favOff from '../../Images/fav-off.png'
import rate from '../../Images/rate.png'
import prod1 from '../../Images/prod1.png'


const AdminAllProductContainer = () => {
   return (
      <div className='products  gap-3 grid-300'>

         <div className="product p-3 rounded bg-light">
            <div className="d-flex justify-content-between">
               <form action="/removeProduct/id" method="post">
                  <button className='btn btn-dark'> ازاله </button>
               </form>
               <form action="/editProduct/id" method="post">
                  <button className='btn btn-dark'> تعديل </button>
               </form>
            </div>
            <div style={{ height: '200px' }} className="image">
               <Link to='/product/:id'>
                  <img style={{ height: '200px', objectFit: 'contain' }} className='w-100 link' src={prod1} alt="" />
               </Link>
            </div>
            <div className="d-flex justify-content-end">
               <form action="/" method="post">
                  <button style={{all:'unset'}}>
                     <img style={{ width: '25px', cursor: 'pointer' }} src={favOff} alt="" />
                  </button>
               </form>
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


         <div className="product p-3 rounded bg-light">
            <div className="d-flex justify-content-between">
               <form action="/removeProduct/id" method="post">
                  <button className='btn btn-dark'> ازاله </button>
               </form>
               <form action="/editProduct/id" method="post">
                  <button className='btn btn-dark'> تعديل </button>
               </form>
            </div>
            <div style={{ height: '200px' }} className="image">
               <Link to='/product/:id'>
                  <img style={{ height: '200px', objectFit: 'contain' }} className='w-100 link' src={prod1} alt="" />
               </Link>
            </div>
            <div className="d-flex justify-content-end">
               <form action="/" method="post">
                  <button style={{all:'unset'}}>
                     <img style={{ width: '25px', cursor: 'pointer' }} src={favOff} alt="" />
                  </button>
               </form>
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


         <div className="product p-3 rounded bg-light">
            <div className="d-flex justify-content-between">
               <form action="/removeProduct/id" method="post">
                  <button className='btn btn-dark'> ازاله </button>
               </form>
               <form action="/editProduct/id" method="post">
                  <button className='btn btn-dark'> تعديل </button>
               </form>
            </div>
            <div style={{ height: '200px' }} className="image">
               <Link to='/product/:id'>
                  <img style={{ height: '200px', objectFit: 'contain' }} className='w-100 link' src={prod1} alt="" />
               </Link>
            </div>
            <div className="d-flex justify-content-end">
               <form action="/" method="post">
                  <button style={{all:'unset'}}>
                     <img style={{ width: '25px', cursor: 'pointer' }} src={favOff} alt="" />
                  </button>
               </form>
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

export default AdminAllProductContainer