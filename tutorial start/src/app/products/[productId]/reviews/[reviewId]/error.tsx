'use client';
interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
}
function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  //Error Nachricht aus page.tsx Review durch throw Error
  return (
    <>
      <div>Error in Review {error.message}</div>
      <button
        className={
          'border-solid border-red-500 border-2 p-2 rounded-md bg-red-500 text-white'
        }
        onClick={reset}
      >
        Reset
      </button>
    </>
  );
}

export default ErrorBoundary;
