import Link from 'next/link';

interface ProductListProps {}

function ProductList({}: ProductListProps): JSX.Element {
  const productId = 100;

  return (
    <>
      <Link href='/'>Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href='products/1'>Product 1</Link>
      </h2>
      <h2>
        <Link href='products/2'>Product 2</Link>
      </h2>
      <h2>
        <Link
          href='products/3'
          replace //replace = true, ersetzt den aktuellen Eintrag im Verlauf durch den neuen Eintrag
        >
          Product 3
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
}

export default ProductList;
