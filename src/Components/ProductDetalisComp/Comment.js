import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Comment = ({name, rate, comment}) => {
  return (
      <div className="comment border-top p-2 ">
         <div>  <span className='bold fs-5'>{name}</span>  <span className='text-warning'> {rate} <FontAwesomeIcon icon={faStar} /> </span> </div>
         <div className='fs-5'> {comment} </div>
      </div>
  )
}

export default Comment