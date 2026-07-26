import aplogo from "../../assets/aplogo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h3 className="text-sm font-bold tracking-[3px] uppercase text-black mb-6">
              About <span className="italic">Avanor Prime</span>
            </h3>

            <ul className="space-y-4 text-[#00629B] text-sm">
              <li>
                <a href="https://avanorcommerce.netlify.app/" className="hover:underline">
                  Avanor Commerce
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  History
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  Strategic Plan
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  Expanding Collaboration & Engagement Opportunities
                </a>
              </li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-sm font-bold tracking-[3px] uppercase text-black mb-6">
              Organization
            </h3>

            <ul className="space-y-4 text-[#00629B] text-sm">
              <li>
                <a href="https://www.linkedin.com/company/avanorprime/?viewAsMember=true" target="_blank" className="hover:underline">
                  Avanor Prime
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/groups/37110216/" className="hover:underline">
                  Prime Perspective
                </a>
              </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-[3px] uppercase text-black mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-[#00629B] text-sm">
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>

              <li>
                <a href="/research" className="hover:underline">
                  Reseach
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  Work at AP
                </a>
              </li>

            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-sm font-bold tracking-[3px] uppercase text-black mb-6">
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-4">

              {[
                <FaGlobe />,
                <FaLinkedinIn />,
                <FaInstagram />,
                <FaXTwitter />,
              ].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-[#00629B] hover:bg-[#00629B] hover:text-white transition-all duration-300"
                >
                  {icon}
                </a>
              ))}

            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">

          {/* Logo */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">

            <img
              src={aplogo}
              alt="Avanor Prime"
              className="w-20 sm:w-24"
            />

            <div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00629B]">
                Avanor Prime
              </h2>

              <p className="text-[#00629B] italic text-sm mt-2">
                Advancing Technology
                <br />
                for Humanity
              </p>

            </div>

          </div>

          {/* Footer Content */}
          <div className="flex-1 text-center lg:text-right">

            <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-3 text-sm text-[#00629B] font-medium">

              <a href="#" className="hover:underline">
                More AP Sites
              </a>

              <a href="#" className="hover:underline">
                Accessibility
              </a>

              <a href="#" className="hover:underline">
                Nondiscrimination Policy
              </a>

              <a href="#" className="hover:underline">
                AP Ethics Reporting
              </a>

              <a href="#" className="hover:underline">
                Privacy Policy
              </a>

              <a href="#" className="hover:underline">
                Terms & Disclosures
              </a>

              <a href="#" className="hover:underline">
                Feedback
              </a>

            </div>

            <p className="mt-6 text-xs sm:text-sm text-gray-500 leading-7 max-w-3xl mx-auto lg:ml-auto lg:mr-0">
              © 2026 <strong>Avanor Prime</strong>. All Rights Reserved.
              <br />
              Avanor Prime is dedicated to advancing technology through
              innovation, research, education, collaboration, and community
              engagement. Our mission is to empower students, professionals,
              researchers, and innovators by building opportunities that create
              a positive impact on society.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};