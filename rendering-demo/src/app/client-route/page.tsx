'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import { useTheme } from '@/components/theme-provider';

// import { serverSideFunction } from '@/utils/server-utils';

interface ClientRouteProps {}

function ClientRoute({}: ClientRouteProps): JSX.Element {
  console.log('Client route rendered');
  const theme = useTheme();
  // const result = serverSideFunction();
  const settings = {
    dots: true,
  };
  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>
        Client side route Page
      </h1>

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
