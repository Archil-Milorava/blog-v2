import { Link } from "react-router-dom";

const ErrorBoundary = () => {
    
    
  return (
    <div className="w-full h-screen flex flex-col gap-2 items-center justify-center ">
      Page not found
      <Link to={`/`} className="text-4xl hover:text-gray-400 transition-all">Go back</Link>
    </div>
  );
};

export default ErrorBoundary;
