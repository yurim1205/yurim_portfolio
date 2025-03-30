import React, { useState } from "react";

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    if (sectionId == "top") {
      window.scrollTo({
        top: 0,              // 맨 위로 스크롤
        behavior: "smooth",  // 스크롤이 부드러워지는 옵션
      });
    } else {                 // 아이디가 top이 아니면 각 페이지로 이동
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="bg-[#294122] text-[#FFEDD2] p-4 w-full fixed top-0 left-0 z-50 font-sans">
      <div className="flex justify-between items-center mx-auto">
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => scrollToSection("top")}
        >LeeYurim's Portfolio</div>

        <div className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <button className="text-3xl">☰</button>
        </div>

        <nav className="hidden sm:flex sm:flex-row sm:space-x-6 sm:ml-auto">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
                className={`hover:underline ${activeSection === "about" ? "underline" : ""}`}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#stack"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("stack");
                }}
                className={`hover:underline ${activeSection === "stack" ? "underline" : ""}`}
              >
                STACK
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("project");
                }}
                className={`hover:underline ${activeSection === "project" ? "underline" : ""}`}
              >
                PROJECT
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <nav
        className={`sm:hidden bg-[#68835E] w-full transition-all ease-in-out duration-500 overflow-hidden ${isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
      >

        <ul className="flex flex-col items-center space-y-4 p-4 font-semibold">
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className={`hover:underline ${activeSection === "about" ? "underline" : ""}`}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#stack"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("stack");
              }}
              className={`hover:underline ${activeSection === "stack" ? "underline" : ""}`}
            >
              STACK
            </a>
          </li>
          <li>
            <a
              href="#project"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("project");
              }}
              className={`hover:underline ${activeSection === "project" ? "underline" : ""}`}
            >
              PROJECT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;