import { Metadata } from 'next';

type ProductDetailsProps = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: ProductDetailsProps): Promise<Metadata> => {
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  return { title: `Product  ${title}` };
};

function ProductDetails({ params }: ProductDetailsProps): JSX.Element {
  return <h1>Product Details of ID {params.productId}</h1>;
}

export default ProductDetails;
