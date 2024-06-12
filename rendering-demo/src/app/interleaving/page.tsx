import ClientCompoentOne from '@/components/client-component-one';
import ServerComponentOne from '@/components/server-component-one';

interface InterleavingProps {}

function Interleaving({}: InterleavingProps): JSX.Element {
  return (
    <>
      <h1>Interleaving</h1>
      {/* <ServerComponentOne /> */}

      {/* <//! um Server Components in Client Components zu verschachteln */}
      <ClientCompoentOne>
        <ServerComponentOne />
      </ClientCompoentOne>
    </>
  );
}

export default Interleaving;
