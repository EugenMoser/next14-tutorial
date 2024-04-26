import ErrorBoundary from "./error";
import { notFound } from "next/navigation";

interface ReviewProps {
  params: { productId: string; reviewId: string };
}

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

function Review({ params }: ReviewProps): JSX.Element {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review");
  }

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
