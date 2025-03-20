import React from "react";

const Header = ({ activeSection }) => {
  return (
    <header className="bg-[#294122] text-[#FFEDD2] p-4 w-full fixed top-0 left-0 z-50 font-sans">
      <div className="flex justify-between items-center mx-auto">
        <div className="text-lg font-bold">LeeYurim's Portfolio</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#about"
                className={`hover:underline ${activeSection === "about" ? "underline" : ""}`}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#stack"
                className={`hover:underline ${activeSection === "stack" ? "underline" : ""}`}
              >
                STACK
              </a>
            </li>
            <li>
              <a
                href="#project"
                className={`hover:underline ${activeSection === "project" ? "underline" : ""}`}
              >
                PROJECT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;