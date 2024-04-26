"use client";

function ErrorBoundary({ error }: { error: Error }) {
  //Error Nachricht aus page.tsx Review durch throw Error
  return <div>Error in Review {error.message}</div>;
}

export default ErrorBoundary;
