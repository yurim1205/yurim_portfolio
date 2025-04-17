import React, { useState } from "react";
import Logo from "./logo";
import NavLink from "./navLink";
import MobileMenu from "./mobileMenu";

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
        <Logo scrollTo={() => scrollToSection("top")} />

        <div className="md:hidden ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <button className="text-3xl">☰</button>
        </div>

        <nav className="hidden md:flex md:flex-row md:space-x-6">
          <ul className="flex space-x-6">
            {["about", "stack", "project", "contact"].map((id) => (
              <NavLink
                key={id}
                id={id}
                section={id.toUpperCase()}
                activeSection={activeSection}
                onClick={scrollToSection}
              />
            ))}
          </ul>
        </nav>
      </div>

      {/* 반응형 부분 */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
    </header>
  );
};

export default Header;