import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Company Name */}
        <div className="text-2xl font-bold">
          <a href="#">Decoding Digital Age</a>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#skills" className="hover:text-gray-300">
            Skills
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-700 p-4 space-y-2 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <a href="#about" className="block text-white hover:text-gray-300">
          About
        </a>
        <a href="#projects" className="block text-white hover:text-gray-300">
          Projects
        </a>
        <a href="#skills" className="block text-white hover:text-gray-300">
          Skills
        </a>
        <a href="#contact" className="block text-white hover:text-gray-300">
          Contact
        </a>
      </div>
    </nav>
  );
}
