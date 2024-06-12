import fs from 'fs';

interface ServerComponentTwoProps {}

function ServerComponentTwo({}: ServerComponentTwoProps): JSX.Element {
  fs.readFileSync('src/components/server-component-two.tsx', 'utf-8');
  return (
    <>
      <h1>Server Component Two</h1>
    </>
  );
}

export default ServerComponentTwo;
