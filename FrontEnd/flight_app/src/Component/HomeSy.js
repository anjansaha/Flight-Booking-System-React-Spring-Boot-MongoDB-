import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./HomeSy.css"
function HomeSy() {
    return (
        <div className='carousel'>
           <Carousel>
  <Carousel.Item>
    <img
      className="slider"
      src="https://www.flydubai.com/en/media/Dubai-Canal-2560x960_tcm8-160498.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='Hthree'>Get The Best Offer!!</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slider"
      src="https://cdn.pixabay.com/photo/2017/06/04/16/33/pyramids-2371501__480.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='Hthree'>Get The Best Offer!!</h3>
      <p>getting the best deal and best service book your tickets now...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slider"
      src="https://wallpaperaccess.com/download/venice-201217"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='Hthree'>Get The Best Offer!!</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default HomeSy
