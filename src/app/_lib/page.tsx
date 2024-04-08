interface PrivateRouteProps {}

function PrivateRoute({}: PrivateRouteProps): JSX.Element {
  return <h1>you can`t view this in the browser</h1>;
}

export default PrivateRoute;
