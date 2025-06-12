// src/components/Navbar.tsx
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
  toggleDarkMode: () => void;
}

function Navbar({ brandName, imageSrcPath, navItems, toggleDarkMode }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow w-full fixed top-0 left-0 z-50">
      <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center cursor-pointer">
          {/* Brand */}
          <div className="flex items-center space-x-2 slide-enter-content">
            <img src={imageSrcPath} alt="Logo" className="w-10 h-10" onClick={toggleDarkMode}/>
            <span className="ruby-font text-xl font-bold text-gray-800 dark:text-white">{brandName}</span>
          </div>

          {/* Toggle button for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 bg-white dark:text-gray-300 dark:bg-gray-800 hover:text-green-700 focus:outline-none border-0"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={item === "Github"
                  ? "https://github.com/hashdbrown"
                  : item === "LinkedIn"
                  ? "https://linkedin.com/in/hashim-alkhateeb"
                  : item === "Resume"
                  ? "/Hashim_Resume.pdf"
                  : `#${item.toLowerCase()}`
                }
                target={["Github", "LinkedIn", "Resume"].includes(item) ? "_blank" : "_self"}
                rel={item === "Github" ? "noopener noreferrer" : undefined}
                onClick={() => setSelectedIndex(index)}
                className={`ruby-font !mr-0 text-sm font-medium ${
                  selectedIndex === index
                    ? "text-blue-600 dark:text-blue-300"
                    : "text-gray-700 dark:text-gray-300"
                } hover:text-green-700 dark:hover:text-blue-700 transition`}
              >
                {item === "Github" ? (
                  <>
                    <Icon icon="grommet-icons:github" width="20" height="20" />
                  </>
                ) : item === "LinkedIn" ? (
                  <>
                    <Icon icon="grommet-icons:linkedin" width="20" height="20" />
                  </>
                ) : (
                  item
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={item === "Github"
                  ? "https://github.com/hashdbrown"
                  : item === "LinkedIn"
                  ? "https://linkedin.com/in/hashim-alkhateeb"
                  : item === "Resume"
                  ? "/Hashim_Resume.pdf"
                  : `#${item.toLowerCase()}`
                }
                target={["Github", "LinkedIn", "Resume"].includes(item) ? "_blank" : "_self"}
                rel={item === "Github" ? "noopener noreferrer" : undefined}
                onClick={() => setSelectedIndex(index)}
                className={`block text-sm font-medium ${
                  selectedIndex === index
                    ? "text-blue-600 dark:text-blue-300"
                    : "text-gray-700 dark:text-gray-300"
                } hover:text-blue-500 transition`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
