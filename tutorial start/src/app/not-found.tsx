interface NotFoundProps {}

function NotFound({}: NotFoundProps): JSX.Element {
  return (
    <>
      <h1>Page not found</h1>
      <p>Could not find requested resource</p>
    </>
  );
}

export default NotFound;
