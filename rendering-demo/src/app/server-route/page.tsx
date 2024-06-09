import ImageSlider from '@/components/image-slider';
import { clientSideFunction } from '@/utils/client-utils';

// import { serverSideFunction } from '@/utils/server-utils';

interface ServerRouteProps {}

function ServerRoute({}: ServerRouteProps): JSX.Element {
  console.log('Server route rendered');
  const result = clientSideFunction();
  return (
    <>
      <h1>Server Route Page</h1>
      <ImageSlider />
      <p>{result}</p>
    </>
  );
}

export default ServerRoute;
