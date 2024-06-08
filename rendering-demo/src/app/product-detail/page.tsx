import { Suspense } from 'react';

import { Product } from '../components/product';
import { Reviews } from '../components/reviews';

interface ComponentNameProps {}

function ComponentName({}: ComponentNameProps): JSX.Element {
  return (
    <>
      <h1>Product detail page</h1>
      <Suspense fallback={<p>Loading product ...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews ...</p>}>
        <Reviews />
      </Suspense>
    </>
  );
}

export default ComponentName;
