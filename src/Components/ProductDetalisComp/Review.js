import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Spinner } from 'react-bootstrap'
import ReviewHook from '../../custom hook/review/review-hook'

const Review = ({ review }) => {

  const [
    user,
    loading,
    isPress,
    loadingUpdate,
    pressInUpdate,
    updatedReview,
    updatedRating,
    updatedForm,
    handleCloseForm,
    handleChangeUpdateReview,
    handleChangeUpdateRating,
    handleUpdateChangeSave,
    handleUpdateChange,
    handleDeleteReview
  ] = ReviewHook()


  const avatarBgColors = ['#6a5acd', '#3cb371', '#3c3c3c', '#6B5B95', '#92A8D1', ' #5B5EA6', '#9B2335', '#0072B5', ' #00A170', ' #363945']

  return (
    <div className="comment border-top p-2">
      {/* update review */}
      <div ref={updatedForm} style={{ overflow: 'hidden', height: '0', opacity: '0', transition: 'all .4s', padding: '18px 0 0' }} className='position-relative'>
        <div onClick={handleCloseForm} className="close position-absolute">x</div>
        <form onSubmit={e => e.preventDefault()} className='mt-3 p-2 rounded bg-light' >
          <textarea onChange={handleChangeUpdateReview} value={updatedReview} className='form-control' placeholder='اكتب تعليق'>  </textarea>
          <div className="rating mt-2">
            <select onChange={handleChangeUpdateRating} value={updatedRating} class="form-select" aria-label="Default select example">
              <option selected>  اختر تقيمك <span className='text-danger'>*</span> </option>
              <option value="1"> نجمة </option>
              <option value="2">نجمتين</option>
              <option value="3">3 نجوم</option>
              <option value="4">4 نجوم</option>
              <option value="5">5 نجوم</option>
            </select>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button onClick={(e) => handleUpdateChangeSave(review._id)} className='btn btn-dark d-flex'>
              حفظ التعديل
              {loadingUpdate && pressInUpdate && <Spinner animation='border' variant='light' />}
            </button>
          </div>
        </form>
      </div>

      <div className='bg-light'>
        <div className='d-flex justify-content-between align-items-center'>

          <div className='gap-2 center'>
            <div style={{ backgroundColor: avatarBgColors[Math.floor(Math.random() * avatarBgColors.length)]}} className="avatar">{review.user.name[0].toUpperCase()}</div>
            <span className='bold fs-5'>{review.user.name}</span>
            <span className='text-warning'> <FontAwesomeIcon icon={faStar} />  {review.rating} </span>
          </div>
          <div>
            {
              (review.user._id === user._id) &&
              <button onClick={handleUpdateChange} className='btn btn-dark ms-2'>تعديل </button>
            }
            {
              (review.user._id === user._id || user.role === 'admin') &&
              <button onClick={() => handleDeleteReview(review._id)} className='btn btn-dark'>حذف <FontAwesomeIcon icon={faTrash} />
                {isPress && loading && <Spinner animation='border' variant='light' />}
              </button>
            }
          </div>
        </div>
        <div className='fs-5'> {review.review}  </div>
      </div>


    </div>
  )
}

export default Review