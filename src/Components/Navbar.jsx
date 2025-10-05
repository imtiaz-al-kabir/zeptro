import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { MapPin } from "lucide-react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown, FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { useState } from "react";

const Navbar = ({ location, getLocation, setOpenDropDown, openDropDown }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="bg-white py-4 shadow-2xl fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo + Location */}
        <div className="flex gap-5 items-center">
          <Link to="/">
            <h1 className="font-bold text-3xl">
              <span className="text-red-600 font-serif">Z</span>aptro
            </h1>
          </Link>

          {/* Location dropdown (desktop only) */}
          <div className="hidden md:flex gap-1 cursor-pointer text-gray-700 items-center">
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

          {openDropDown && (
            <div className="absolute top-20 left-20 md:left-110 shadow-2xl z-50 bg-white px-4 py-5 rounded-lg w-60">
              <h1 className="font-semibold mb-4 text-lg flex justify-between px-4">
                Change Location{" "}
                <span
                  onClick={() => setOpenDropDown(false)}
                  className="cursor-pointer"
                >
                  <CgClose />
                </span>
              </h1>
              <button
                onClick={getLocation}
                className="bg-red-500 text-white px-3 py-1 rounded-md w-full hover:bg-red-400"
              >
                Detect My Location
              </button>
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-7 items-center">
          <ul className="flex gap-7 items-center font-semibold text-lg">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-red-600 transition-all"
                      : "text-black hover:text-red-500"
                  }
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* Cart */}
            <Link to="/cart" className="relative">
              <IoCartOutline className="size-7" />
              <span className="bg-red-500 rounded-full px-2 absolute -top-2 -right-3 text-white text-sm">
                0
              </span>
            </Link>
          </ul>

          {/* Auth Buttons */}
          <div>
            <SignedOut>
              <SignInButton className="bg-red-500 px-3 py-1 text-white rounded-md cursor-pointer hover:bg-red-600" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <Link to="/cart" className="relative">
            <IoCartOutline className="size-7" />
            <span className="bg-red-500 rounded-full px-2 absolute -top-2 -right-3 text-white text-sm">
              0
            </span>
          </Link>
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <CgClose className="size-6" /> : <FaBars className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-lg flex flex-col items-center py-6 space-y-4">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              className="text-lg font-semibold hover:text-red-500"
              to={link.path}
              onClick={() => setMobileMenu(false)}
            >
              {link.label}
            </NavLink>
          ))}

          {/* Auth */}
          <SignedOut>
            <SignInButton className="bg-red-500 px-3 py-1 text-white rounded-md cursor-pointer hover:bg-red-600" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </div>
  );
};

export default Navbar;
