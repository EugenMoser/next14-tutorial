'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

interface ImageSliderProps {}

function ImageSlider({}: ImageSliderProps): JSX.Element {
  const settings = {
    dots: true,
  };
  return (
    <>
      <div className='image-slider-container'>
        <Slider {...settings}>
          <div>
            <img src='http://picsum.photos/g/400/200' />
          </div>
          <div>
            <img src='http://picsum.photos/g/400/200' />
          </div>
          <div>
            <img src='http://picsum.photos/g/400/200' />
          </div>
          <div>
            <img src='http://picsum.photos/g/400/200' />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default ImageSlider;
