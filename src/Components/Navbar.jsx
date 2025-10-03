import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { MapPin } from "lucide-react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";

const Navbar = ({ location, getLocation, setOpenDropDown, openDropDown }) => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="bg-white py-4 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* logo section  */}

        <div className="flex gap-7 items-center">
          <Link to="/">
            <h1 className="font-bold text-3xl">
              <span className="text-red-600 font-serif">Z</span>aptro{" "}
            </h1>{" "}
          </Link>

          <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? (
                <div className="px-5">
                  <p>{location.country}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown onClick={() => setOpenDropDown(!openDropDown)} />
          </div>
          {openDropDown ? (
            <div className=" items-center flex flex-col justify-center  shadow-2xl z-50 bg-white fixed top-21 left-120 py-5 rounded-lg">
              <h1 className="font-semibold mb-4 text-xl flex justify-between px-4 py-2 ">
                Change Location{" "}
                <span onClick={() => setOpenDropDown(!openDropDown)}>
                  <CgClose  />
                </span>
              </h1>
              <button
                onClick={getLocation}
                className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400"
              >
                Detect My Location
              </button>
            </div>
          ) : null}
        </div>

        {/* menu section  */}

        <nav className="flex gap-7 items-center ">
          <ul className="flex gap-7 items-center font-semibold text-xl">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " border-b-3 border-red-600 transition-all "
                      : "text-black"
                  }
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <Link to="/cart" className="relative">
              <IoCartOutline className="size-8" />
              <span className="bg-red-500 rounded-full px-2 absolute -top-2 -right-3 text-white">
                0
              </span>
            </Link>
          </ul>

          <div>
            <SignedOut>
              <SignInButton className="bg-red-500 px-3 py-1 text-white rounded-md cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
