interface ProductDetailsProps {
  params: { productId: string };
}

function ProductDetails({ params }: ProductDetailsProps): JSX.Element {
  return <h1>Product Details of ID {params.productId}</h1>;
}

export default ProductDetails;
