'use client';
import { useRouter } from 'next/navigation';

interface OrderProductProps {}

function OrderProduct({}: OrderProductProps): JSX.Element {
  const router = useRouter();
  const handleClick = () => {
    console.log('placing your order');
    router.replace('/');
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}

export default OrderProduct;
