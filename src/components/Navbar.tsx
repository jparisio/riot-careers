import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="w-full bg-foreground text-white px-6 py-4 fixed top-0 z-50"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      exit={{ y: "-100%" }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center space-x-8">
          {/* Riot Games Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/riot-games.png"
              alt="Riot Games Logo"
              width={60}
              height={60}
              className="w-10 h-10 "
            />
            <span className="text-white text-lg font-bold tracking-wide">
              RIOT GAMES
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors font-medium tracking-wide"
            >
              WHO WE ARE
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors font-medium tracking-wide"
            >
              WORK WITH US
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors font-medium tracking-wide"
            >
              NEWS
            </a>
          </div>
        </div>

        {/* Right side - Search and Sign In */}
        <div className="flex items-center space-x-4">
          {/* Globe Icon */}
          <button className="p-2 hover:bg-gray-700 rounded transition-colors">
            <Image
              src="/globe.svg"
              alt="Globe Icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>

          {/* Search */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-300 font-medium tracking-wide">
              SEARCH
            </span>
            <button className="p-2 hover:bg-gray-700 rounded transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Sign In Button */}
          <button className="bg-riotred hover:bg-red-600 text-white px-6 py-2 rounded font-medium tracking-wide transition-colors">
            SIGN IN
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="p-2 hover:bg-gray-700 rounded transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
