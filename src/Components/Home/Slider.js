import React from 'react'
import { Carousel } from 'react-bootstrap'

import slider1 from '../../Images/slider1.png'
import slider2 from '../../Images/prod4.png'
import slider3 from '../../Images/prod3.png'
import slider4 from '../../Images/slider4.png'

import '../../Style/Utility/slider.css'

function Slider() {
  return (
    <Carousel className='slider'>
      <Carousel.Item className='py-2 bg-violet'>
        <div className="center gap-2">
          <div className="center gap-2">
            <img
              className="d-block w-100"
              src={slider1}
              alt="First slide"
            />
            <div className="info">
              <p className='fs-3'>هناك خصم كبير</p>
              <p className='bold fs-1'>خصم يصل ٥٠٪ عند شرائك</p>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className='py-2 bg-blue'>
        <div className="center gap-2">
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />

          <div className="info">
            <p className='fs-3'>هناك خصم كبير</p>
            <p className='bold fs-1'>خصم يصل ٥٠٪ عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className='py-2 bg-pink'>
        <div className="center gap-2">
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />

          <div className="info">
            <p className='fs-3'>هناك خصم كبير</p>
            <p className='bold fs-1'>خصم يصل ٥٠٪ عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className='py-2 bg-orange'>
        <div className="center gap-2">
          <img
            className="d-block w-100"
            src={slider4}
            alt="Third slide"
          />

          <div className="info">
            <p className='fs-3'>هناك خصم كبير</p>
            <p className='bold fs-1'>خصم يصل ٥٠٪ عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>

    </Carousel>
  )
}

export default Slider