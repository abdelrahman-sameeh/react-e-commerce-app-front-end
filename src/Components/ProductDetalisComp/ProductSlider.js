import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import LeftButtons from './LeftButtons'
import RightButtons from './RightButtons'
import ProductDetailsHook from '../../custom hook/products/product-details-hook'


const ProductSlider = () => {


   const  [product, images, category] = ProductDetailsHook()

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