import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/clerk-react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="text-[#c5c6c7] px-6 md:px-20 py-4 shadow-md relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-white tracking-wide"
        >
          Prompt<span className="text-red-600">IQ</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          {["/", "/create", "/about", "/contact"].map((path, index) => {
            const labels = ["Home", "Quiz", "About", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f12711] border-b-2 border-[#f12711] pb-1"
                    : "hover:text-[#f53844] transition"
                }
              >
                {labels[index]}
              </NavLink>
            );
          })}
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-[#f12711] text-black font-semibold cursor-pointer px-4 py-1 rounded hover:bg-[#f53844] transition text-sm">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-transparent justify-center items-center rounded-lg shadow-lg flex flex-col space-y-4 p-4">
          {["/", "/create", "/about", "/contact"].map((path, index) => {
            const labels = ["Home", "Create Quiz", "About", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f12711] font-semibold"
                    : "hover:text-[#f53844] transition"
                }
              >
                {labels[index]}
              </NavLink>
            );
          })}

          <div className="pt-2 border-t border-gray-600">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="mt-2 bg-[#f12711] text-black px-4 py-1 rounded hover:bg-[#f53844] transition text-sm w-full">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
