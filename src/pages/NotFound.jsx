import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-9xl font-heading font-black mb-6">404</h1>
      <p className="text-2xl md:text-3xl mb-6">Page Not Found</p>
      <Link
        to="/"
        className="text-xl font-bold text-[hsl(var(--color-orange))] hover:underline"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
