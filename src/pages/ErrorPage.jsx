import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">404 — Page not found</h1>
      <Link to="/" className="underline">
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;
