'use client';

import { serverSideFunction } from '@/utils/server-utils';

interface ClientRouteProps {}

function ClientRoute({}: ClientRouteProps): JSX.Element {
  console.log('Client route rendered');
  const result = serverSideFunction();
  return (
    <>
      <h1>Client side route Page</h1>
      <p>{result}</p>
    </>
  );
}

export default ClientRoute;
