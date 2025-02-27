import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../services/useAuthentication";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const { currentUserData, isLoading } = useCurrentUser();

  

  return (
    <div>
      {/* big screen */}
      <nav className="px-4  py-1 h-[4rem] max-[8rem] border-b border-black sm:block hidden font-bold ">
        <ul className="sm:flex sm:items-center sm:justify-center gap-5 uppercase tracking-wide text-sm">
          <li>
            <Link
              to={`/`}
              className="hover:underline transition-all cursor-pointer"
            >
              Homepage
            </Link>
          </li>
          <li>
            <Link
              to={`/create`}
              className="hover:underline transition-all cursor-pointer"
            >
              create
            </Link>
          </li>
          <li>
            {!currentUserData && !isLoading && (
              <Link
                to={`/login`}
                className="hover:underline transition-all cursor-pointer"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>

      {/* small screen */}
      <div className="navbar-start sm:hidden block border-b border-black w-full">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#F4F4F4]"
          >
            <li>
              <a href="#">Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
