import React from 'react'
import next from '../../Images/next.png'

const LeftButtons = (onClick, disabled) => {
   return (
      <img
         src={next}
         alt=""
         onClick={onClick}
         disabled={disabled}
         width='35px'
         height='35px'
         style={{position: 'absolute', left:'5px', top:'50%', transform:'translateY(-50%)', zIndex:'500', cursor: 'pointer', filter:'brightness(0.6)'}}
      />
   )
}

export default LeftButtons