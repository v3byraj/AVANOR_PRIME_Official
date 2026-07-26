import aplogo from "../../assets/aplogo.png";
import { useState } from "react";
import {
  FaSearch,
  FaBars,
} from "react-icons/fa";
import alogo from "../../assets/alogo.png";

const menuItems = [
  "Home",
  "About",
  "Categories",
  "Projects",
  "Research",
  "Events",
  "Contact",
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    
      <header className="absolute top-0 left-0 w-full z-50">
        {/* Main Navbar */}
        <div className=" backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3 sm:gap-4">

              <img
                src={aplogo}
                alt="logo"
                className="w-12 sm:w-16 md:w-20"
              />

              <div className="text-white leading-tight">

                <h1 className="text-lg sm:text-2xl md:text-4xl font-extrabold tracking-wide">
                  Avanor Prime
                </h1>

                <p className="text-xs sm:text-sm md:text-base italic text-gray-200">
                  Advancing Technology
                </p>

                <p className="text-xs sm:text-sm md:text-base italic text-gray-200">
                  for Humanity
                </p>

              </div>

            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4 sm:gap-6 text-white">

              {/* Search */}
              <button className="text-xl sm:text-2xl hover:text-cyan-400 transition">
                <FaSearch />
              </button>



              {/*Mobile view*/}
              <button
                onClick={() => setIsOpen(true)}
                className=" lg:flex text-2xl lg:hidden hover:text-cyan-400 transition"
              >
                <img
    src={alogo}
    alt="Logo"
    className="w-10 h-10 object-contain" />
              </button>


              {/* Desktop Menu */}
              <button
                onClick={() => setIsOpen(true)}
                className="hidden lg:flex text-2xl hover:text-cyan-400 transition"
              >
                <img
    src={alogo}
    alt="Logo"
    className="w-10 h-10 object-contain" />
              </button>

            </div>

          </div>
        </div>


        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          {/* Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Menu */}
          <div
            className={`fixed inset-0 z-[100] transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src={aplogo} alt="logo" className="w-10" />

                <div>
                  <h2 className="text-white font-semibold text-lg">
                    Avanor Prime
                  </h2>

                  <p className="text-xs text-gray-400">
                    Advancing Technology
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-3xl hover:text-cyan-400"
              >
                ×
              </button>
            </div>

            {/* Navigation */}
            <nav className="px-6 py-6 space-y-1">

              {[
                "Home",
                "About",
                "Categories",
                "Projects",
                "Research",
                "Events",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-4 py-3 text-white hover:bg-white/10 hover:text-cyan-400 transition"
                >
                  {item}
                </a>
              ))}

            </nav>

            {/* Divider */}
            <div className="mx-6 border-t border-white/10 my-3"></div>

            {/* IEEE Links */}
            <div className="px-6 space-y-1 text-sm">

              <a href="/" className="block py-2 text-gray-300 hover:text-cyan-400">
                AP.org
              </a>

              <a href="/research" className="block py-2 text-gray-300 hover:text-cyan-400">
                AP Spectrum
              </a>

              <a href="https://avanorcommerce.netlify.app/" target="_blank" className="block py-2 text-gray-300 hover:text-cyan-400">
                AP Commerce
              </a>


            </div>

            {/* Bottom Buttons */}
            <div className="absolute bottom-0 left-0 w-full p-6 border-t border-white/10">

              <button className="w-full rounded-lg bg-cyan-500 py-3 font-medium text-white hover:bg-cyan-400 transition">
                Join IEEE
              </button>

              <button className="mt-3 w-full rounded-lg border border-white/20 py-3 text-white hover:bg-white/10 transition">
                Sign In
              </button>

            </div>

          </div>
        </div>


        {/* Desktop Sidebar */}
        <div
          className={`hidden lg:block fixed inset-0 z-[999] transition-all duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
        >
          {/* Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* Sidebar */}
          <div
            className={`absolute right-0 top-0 h-full w-[380px] bg-white shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b">

              <div className="flex items-center gap-3">
                <img
                  src={aplogo}
                  alt=""
                  className="w-12"
                />

                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Avanor Prime
                  </h2>

                  <p className="text-sm text-gray-500">
                    Navigation
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl text-gray-600 hover:text-black"
              >
                ×
              </button>

            </div>

            {/* Menu */}
            <nav className="px-8 py-8">

              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between rounded-xl px-5 py-4 text-lg font-medium text-slate-800 hover:bg-slate-100 transition"
                    >
                      <span>{item}</span>

                      <span className="opacity-0 group-hover:opacity-100 transition">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

            </nav>

          </div>
        </div>



      </header>
    </>


  );
};