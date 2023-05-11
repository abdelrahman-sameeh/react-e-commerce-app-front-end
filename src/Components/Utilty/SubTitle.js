import React from 'react';
import { Link } from 'react-router-dom';

function SubTitle(props) {
  return (
    <div className="d-flex justify-content-between align-items-center py-2">
      <span className="fs-3 fw-600 ">
         {props.title}
      </span>
      {props.link && 
      <Link to={'/' +props.link}  className='decoration-none' > 
         <div className='shopping-now '> {props.btnLink} </div>
      </Link>}
    </div>
  )
}

export default SubTitle