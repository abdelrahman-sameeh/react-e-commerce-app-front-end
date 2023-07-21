/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PaginationComponent from '../Utilty/PaginationComponent'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import SubTitle from '../Utilty/SubTitle'
import ProductComp from './ProductComp'
import ProductDetailsHook from '../../custom hook/products/product-details-hook'
import { Col, Row, Spinner } from 'react-bootstrap'
import PeopleReviewHook from '../../custom hook/user/people-review-hook'
import { ToastContainer } from 'react-toastify'
import Review from './Review'

const PeopleComments = () => {

   const [product, images, category, oneBrand, sameProducts] = ProductDetailsHook()

   const [allReviews, isPress, loading, user, rating, handleChangeRating, handleChangeReview, handleCreateReview, handleChangePaginationNum] = PeopleReviewHook()

   return (
      <div className='bg-light p-2 rounded'>
         <div>
            <span className='fs-2'>
               التقيمات
            </span>
            <span className='text-warning fs-5 bold'>  <FontAwesomeIcon icon={faStar} /> {product && product.data && product.data.ratingsAverage} </span>
            <span> ( {product && product.data && product.data.ratingsQuantity}تقيم) </span>
         </div>


         <div className="mx-5">

            {
               user && user.role === 'user' &&
               <>
                  <div className="name fs-5">
                     <span className='text-danger'> اختر تقيم * </span>
                     <span className='d-flex gap-1'>
                        <div className='center flex-column'>
                           <div className='text-danger'>1</div>
                           <label className='text-warning' style={{ cursor: 'pointer' }} for='1' ><FontAwesomeIcon icon={faStar} /></label>
                           <input onClick={handleChangeRating} value={1} style={{ display: 'none' }} type="radio" id='1' />
                        </div>
                        <div className='center flex-column'>
                           <div className='text-danger'>2</div>
                           <label className='text-warning' style={{ cursor: 'pointer' }} for='2' ><FontAwesomeIcon icon={faStar} /></label>
                           <input onClick={handleChangeRating} value={2} style={{ display: 'none' }} type="radio" id='2' />
                        </div>
                        <div className='center flex-column'>
                           <div className='text-danger'>3</div>
                           <label className='text-warning' style={{ cursor: 'pointer' }} for='3' ><FontAwesomeIcon icon={faStar} /></label>
                           <input onClick={handleChangeRating} value={3} style={{ display: 'none' }} type="radio" id='3' />
                        </div>
                        <div className='center flex-column'>
                           <div className='text-danger'>4</div>
                           <label className='text-warning' style={{ cursor: 'pointer' }} for='4' ><FontAwesomeIcon icon={faStar} /></label>
                           <input onClick={handleChangeRating} value={4} style={{ display: 'none' }} type="radio" id='4' />
                        </div>
                        <div className='center flex-column'>
                           <div className='text-danger'>5</div>
                           <label className='text-warning' style={{ cursor: 'pointer' }} for='5' ><FontAwesomeIcon icon={faStar} /></label>
                           <input onClick={handleChangeRating} value={5} style={{ display: 'none' }} type="radio" id='5' />
                        </div>
                     </span>
                  </div>

                  <div className="rating-chosen fs-5"> تقيمك الذى اخترته هو  <span className='fw-bold fs-4 text-danger'> {rating} </span>  </div>

                  {/* add review */}

                  <form className='mt-3 p-2 rounded bg-light' action="/addComment" method='post'>
                     <textarea onChange={handleChangeReview} className='form-control' name="comment" placeholder='اكتب تعليق'> </textarea>
                     <div className="d-flex justify-content-end mt-3">
                        <button onClick={handleCreateReview} className='btn btn-dark d-flex'>
                           اضافه مراجعه
                           {isPress && loading && <Spinner animation='border' variant='light' />}
                        </button>
                     </div>
                  </form>
               </>

            }

            {/* comments */}
            {allReviews && allReviews.data && allReviews.data.data &&
               <div className="comments mt-2 mb-4 border-bottom bg-light rounded">
                  {
                     allReviews.data.data.map(review => {
                        return <Review review={review} />
                     })
                  }
               </div>
            }

            {/* pagination */}
            {
               allReviews.data && allReviews.data.paginationResult.numberOfPages > 1 &&
               <PaginationComponent onPress={handleChangePaginationNum} pageCount={allReviews.data.paginationResult.numberOfPages} />
            }



            {/* منتجات قد تعجبك */}
            <SubTitle title='منتجات قد تعجبك' />

            <Row style={{ rowGap: '10px' }} className="same-products">
               {sameProducts && sameProducts.data && sameProducts.data.slice(0, 5).map(product => {
                  return <Col sm='12' md='6' lg='4'  >
                     <ProductComp product={product} />
                  </Col>
               })}
            </Row>


         </div>

         <ToastContainer />

      </div>
   )
}

export default PeopleComments