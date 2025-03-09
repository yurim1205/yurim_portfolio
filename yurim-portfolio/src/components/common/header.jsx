import React, { useEffect, useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
      root: null, // 뷰포트를 기준으로 감지
      threshold: 0.5, // 50% 이상 보여야 활성화
      rootMargin: "-100px 0px 0px 0px", // Header 높이만큼 여유 공간 추가
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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
