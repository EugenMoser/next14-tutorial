import ImageSlider from '@/components/image-slider';
import { serverSideFunction } from '@/utils/server-utils';

// import { serverSideFunction } from '@/utils/server-utils';

interface ServerRouteProps {}

function ServerRoute({}: ServerRouteProps): JSX.Element {
  console.log('Server route rendered');
  const result = serverSideFunction();
  return (
    <>
      <h1>Server Route Page</h1>
      <ImageSlider />
      <p>{result}</p>
    </>
  );
}

export default ServerRoute;
