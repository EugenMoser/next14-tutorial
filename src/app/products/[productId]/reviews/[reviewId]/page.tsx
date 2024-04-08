interface ReviewProps {
  params: { productId: string; reviewId: string };
}

function Review({ params }: ReviewProps): JSX.Element {
  return (
    <h1>
      Review Number: {params.reviewId} for Product {params.productId}
    </h1>
  );
}

export default Review;
