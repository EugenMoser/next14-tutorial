import fs from 'fs';

import ClientCompoentOne from './client-component-one';
import ServerComponentTwo from './server-component-two';

interface ServerComponentOneProps {}

function ServerComponentOne({}: ServerComponentOneProps): JSX.Element {
  fs.readFileSync('src/components/server-component-one.tsx', 'utf-8');
  return (
    <>
      <h1>Server Component One</h1>
      <ServerComponentTwo />
      {/* <ClientCompoentOne /> */}
    </>
  );
}

export default ServerComponentOne;
