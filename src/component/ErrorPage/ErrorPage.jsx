import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1>Opos!! Something was wrong</h1>
      <h1>{error.internal}</h1>
      <h1>{error.status}</h1>
      <h1>{error.data}</h1>
      <h1>{error.statusText}</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default ErrorPage;
