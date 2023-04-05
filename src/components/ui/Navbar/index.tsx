import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Brand from "../Brand";
import { Login } from "./login";

const Navbar = () => {
  const [state, setState] = useState(false);
  const { events } = useRouter();

  const navigation = [
    { title: "Pricing", path: "#pricing" },
    { title: "Features", path: "#features" },
    {
      title: "Docs",
      path: "https://gine.notion.site/Plato-4908411bdcfc49d5a663dded1e1f21a9",
    },
    // { title: "Pricing", path: "#pricing" },
  ];

  useEffect(() => {
    // Close the navbar menu when navigate
    const handleState = () => {
      document.body.classList.remove("overflow-hidden");
      setState(false);
    };
    events.on("routeChangeStart", () => handleState());
    events.on("hashChangeStart", () => handleState());
  }, []);

  const handleNavMenu = () => {
    setState(!state);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <header>
      <nav
        className={`w-full bg-white md:static md:text-sm ${
          state ? "fixed z-10 h-full" : ""
        }`}
      >
        <div className="custom-screen mx-auto items-center md:flex">
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <Brand />
            <div className="md:hidden">
              <button
                role="button"
                aria-label="Open the menu"
                className="text-gray-500 hover:text-gray-800"
                onClick={handleNavMenu}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`mt-8 flex-1 pb-3 md:mt-0 md:block md:pb-0 ${
              state ? "" : "hidden"
            }`}
          >
            <ul className="items-center justify-end space-y-6 text-gray-700 md:flex md:space-x-6 md:space-y-0 md:font-medium md:text-gray-600">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="duration-150 hover:text-gray-900">
                    <Link href={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              <Login />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
