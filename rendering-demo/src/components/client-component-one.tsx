'use client';

import { useState } from 'react';

interface ClientComponentOneProps {
  children: React.ReactNode;
}

function ClientCompoentOne({
  children,
}: ClientComponentOneProps): JSX.Element {
  const [name, setName] = useState<string>('Superman');
  return (
    <>
      <h1>Client Component one</h1>

      {/* <//! es ist nicht möglich, Server Component in ClientComponent zu importieren */}
      {/* <ServerComponentOne /> */}
      {children}
    </>
  );
}

export default ClientCompoentOne;
