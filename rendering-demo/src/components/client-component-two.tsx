'use client';

import { useState } from 'react';

interface ClientComponentTwoProps {}

function ClientCompoentTwo({}: ClientComponentTwoProps): JSX.Element {
  const [name, setName] = useState<string>('Superman');
  return (
    <>
      <h1>Client Component two</h1>
    </>
  );
}

export default ClientCompoentTwo;
