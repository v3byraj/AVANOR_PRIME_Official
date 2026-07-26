import { useState } from "react";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import alogo from "../../assets/alogo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      
      {/* ================= Desktop Navbar ================= */}
      <div className="hidden md:block bg-black/70 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 xl:px-10 py-3 text-white text-sm">

          {/* Left Menu */}
          <div className="flex items-center gap-4 lg:gap-6 xl:gap-8 font-medium uppercase tracking-wide text-[12px] lg:text-[13px]">

            <a href="/" className="hover:text-cyan-400 transition">
              AP.org
            </a>

            <a href="#" className="hover:text-cyan-400 transition">
              AP Xplore
            </a>

            <a href="#" className="hover:text-cyan-400 transition">
              AP Standards
            </a>

            <a href="/research" className="hover:text-cyan-400 transition">
              AP Spectrum
            </a>

            <a href="https://avanorcommerce.netlify.app/" target="_blank" className="hover:text-cyan-400 transition">
              AP Commerce
            </a>

          </div>

          {/* Right Menu */}
          <div className="relative flex items-center gap-5 lg:gap-6 text-[13px]">

            <div className="absolute -bottom-3 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 rounded-full"></div>

            <a href="https://www.linkedin.com/company/avanorprime/?viewAsMember=true" className="font-semibold text-cyan-400 hover:text-cyan-300 transition">
              Join AP
            </a>

            <a href="#" className="hover:text-cyan-400 transition">
              Donate
            </a>

            {/* <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition">
              <FaShoppingCart className="text-xs" />
              Cart (0)
            </a> */}

            <a href="#" className="hover:text-cyan-400 transition">
              Create Account
            </a>

            <a href="#" className="hover:text-cyan-400 transition">
              Sign In
            </a>

          </div>
        </div>
      </div>
    </>
  );
};