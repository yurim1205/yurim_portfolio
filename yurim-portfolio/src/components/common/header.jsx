import React, { useEffect, useState } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState(''); // 활성화된 섹션 상태

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
      root: null,
      threshold: 0.1, // 10% 보이면 트리거
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // 활성화된 섹션의 id로 상태 업데이트
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="bg-[#294122] text-[#FFEDD2] p-4 w-full fixed top-0 left-0 z-50 font-sans">
      <div className="flex justify-between items-center mx-auto">
        <div className="text-lg font-bold">
          LeeYurim's Portfolio
        </div>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#about"
                className={`hover:underline ${activeSection === 'about' ? 'underline' : ''}`}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#stack"
                className={`hover:underline ${activeSection === 'stack' ? 'underline' : ''}`}
              >
                STACK
              </a>
            </li>
            <li>
              <a
                href="#project"
                className={`hover:underline ${activeSection === 'project' ? 'underline' : ''}`}
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