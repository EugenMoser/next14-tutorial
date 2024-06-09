'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

// import { serverSideFunction } from '@/utils/server-utils';

interface ClientRouteProps {}

function ClientRoute({}: ClientRouteProps): JSX.Element {
  console.log('Client route rendered');
  // const result = serverSideFunction();
  const settings = {
    dots: true,
  };
  return (
    <>
      <h1>Client side route Page</h1>

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

export default ClientRoute;
