import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 border-t border-b border-black flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
      <Link to={`/`} className="text-4xl font-bold uppercase cursor-pointer">Blog post</Link>
      <div>
        <label className="bg-white border border-black px-1 w-[14rem] h-6 flex items-center gap-2 text-sm">
          <input
            type="text"
            className="grow bg-white uppercase focus:outline-none focus:ring-0 text-xs"
            placeholder="Search and hit enter..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </header>
  );
};

export default Header;
