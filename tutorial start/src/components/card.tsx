interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps): JSX.Element {
  return (
    <div className='p-16 m-4 shadow-cx border border-gray-300 flex flex-col justify-center items-center'>
      {children}
    </div>
  );
}

export default Card;
