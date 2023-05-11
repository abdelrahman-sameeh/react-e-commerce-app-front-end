import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Comment from './Comment'
import PaginationComponent from '../Utilty/PaginationComponent'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import SubTitle from '../Utilty/SubTitle'
import LatestOutfitContainer from '../LatestOutfit/LatestOutfitContainer'

const PeopleComments = () => {
   return (
      <div className='bg-light p-2 rounded'>
         <div>
            <span className='fs-2'>
               التقيمات
            </span>
            <span className='text-warning fs-5 bold'>  <FontAwesomeIcon icon={faStar} /> 3.4 </span>
            <span> (160تقيم) </span>
         </div>
         <div className="mx-5">
            <div className="name fs-5">
               <span>عبدالرحمن سميح</span>
               <span className='text-warning'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
               </span>
            </div>

            {/* add comment */}
            <form className='mt-3 p-2 rounded bg-light' action="/addComment" method='post'>
               <textarea className='form-control' name="comment" placeholder='اكتب تعليق'></textarea>
               <div className="d-flex justify-content-end mt-3"> <button className='btn btn-dark'> اضافه تعليق </button> </div>
            </form>


            {/* comments */}
            <div className="comments mt-2 mb-4 border-bottom bg-light rounded">
               <Comment comment={'منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة'} name={'عبدالرحمن سميح'} rate={'4.8'} />
               <Comment comment={'منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة'} name={'عبدالرحمن سميح'} rate={'4.8'} />
               <Comment comment={'منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة'} name={'عبدالرحمن سميح'} rate={'4.8'} />
            </div>

            {/* pagination */}
            <PaginationComponent />

            {/* منتجات قد تعجبك */}
            <SubTitle title='منتجات قد تعجبك' />

            <LatestOutfitContainer />

         </div>
      </div>
   )
}

export default PeopleComments