import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={banner3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='fw-bolder'>Facts about Deer Parents</h3>
          <p className='fw-bold'>See why the dawns are favourite times for deers?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='fw-bolder'>The Secret of Black Panther</h3>
          <p className='fw-bold'>Check five unknown Facts about Black Panther</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='fw-bolder'>Life Cycle of a Lion</h3>
          <p className='fw-bold'>
            Check what kind of life a king leads in forests.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
  
};

export default Banner;