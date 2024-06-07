'use client';

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    // wird in der error.tsx abgefangen
    throw new Error('Error loading products');
  }
  return (
    <>
      <h2>Product Details Layout</h2>
      {children}
    </>
  );
}
