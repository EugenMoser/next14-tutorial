import Link from 'next/link';

interface F4Props {}

function F4({}: F4Props): JSX.Element {
  return (
    <>
      <h1>F4 page</h1>
      <div>
        <Link href={'/f1/f3'}>F3</Link>
        <Link href={'/about'}>About</Link>
      </div>
    </>
  );
}

export default F4;
