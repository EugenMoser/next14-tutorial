import { notFound } from "next/navigation";

interface ReviewProps {
  params: { productId: string; reviewId: string };
}

function Review({ params }: ReviewProps): JSX.Element {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Review Number: {params.reviewId} for Product {params.productId}
    </h1>
  );
}

export default Review;
