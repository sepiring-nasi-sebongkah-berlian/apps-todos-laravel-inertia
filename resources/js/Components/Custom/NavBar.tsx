import ToggleLightDark from "./ToggleLightDark";
import { Link } from "@inertiajs/react";

const CustomNavBar = () => {
  return (
    <>
      {/* Drawer with NavBar */}
      <div className="navbar w-full bg-base-300">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="mx-2 flex-1 px-2">
          <Link href={route("custom")}>
            <span className="text-lg font-bold">Custom</span>
          </Link>
        </div>
        <div className="hidden flex-none lg:block">
          <ul className="menu menu-horizontal">
            {/* Navbar menu content here */}
            <li>
              <ToggleLightDark />
            </li>
            <li>
              <Link href={route("login")}>Login</Link>
            </li>
            <li>
              <Link href={route("custom.register")}>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CustomNavBar;
