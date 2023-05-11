import React from 'react'
import previous from '../../Images/prev.png'

const RightButtons = (onClick, disabled) => {
   return (
      <img
         src={previous}
         alt=""
         onClick={onClick}
         disabled={disabled}
         width='35px'
         height='35px'
         style={{ position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)', zIndex:'500', cursor:'pointer', filter:'brightness(0.6)' }}
      />
   )
}

export default RightButtons