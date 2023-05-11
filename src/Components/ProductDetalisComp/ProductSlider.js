import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import mobile from '../../Images/mobile.png'
import mobile1 from '../../Images/mobile1.png'
import mobile2 from '../../Images/mobile2.png'
import LeftButtons from './LeftButtons'
import RightButtons from './RightButtons'
const images = [
   {
      original: mobile,
   },
   {
      original: mobile1,
   },
   {
      original: mobile2,
   },
];

const ProductSlider = () => {
   return (
      <div className='center image-gallery-slide'>
         <ReactImageGallery
            items={images}
            thumbnailHeight={'100%'}
            isRTL={true}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={false}
            renderRightNav={RightButtons}
            renderLeftNav={LeftButtons}
         />
      </div>
   )
}

export default ProductSlider