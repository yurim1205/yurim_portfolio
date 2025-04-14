import './App.css';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Header from './components/common/header';
import About from './components/about/about';
import StackList from './components/stack/stackList';
import Project from './components/project/project';
import buttonIcon from "./assets/topButton.png";

// 모든 section태그에 대한 관찰 로직이 있고, 
// activeSection를 Header 컴포넌트에 전달해서 ui 업데이트 !

// [App.jsx]
// IntersectionObserver로 각 섹션을 감지하고 activeSection 상태를 업데이트.
// activeSection 상태를 Header에 props로 전달.
// 각 섹션 컴포넌트(About.jsx, Stack.jsx, Project.jsx 등)를 렌더링.

const App = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Top 버튼을 위한 스크롤 감지
    const handleScroll = () => {
      if (window.scrollY > 340) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main className="relative">
        <section
          id="main"
          className="h-screen flex flex-col items-center justify-center bg-[#294122] text-[#FFEDD2]"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-x-48">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', visualDuration: 0.6, bounce: 0.6 }}
            >
              <div className="origin-bottom-right animate-wiggle text-9xl">👋🏻</div>
              <br />
            </motion.h1>
            <h1 className="text-3xl font-bold font-aclonica text-right">
              안녕하세요 !<br />
              사용자를 고려한 편리한 인터페이스를 구현하는<br />
              프론트엔드 개발자 이유림입니다.
            </h1>
          </div>
        </section>

        <section
          id="about">
          <About />
        </section>

        <section
          id="stack">
          <StackList />
        </section>

        <section
          id="project">
          <Project />
        </section>
      </main>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-white p-2 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl z-50"
        >
          <img src={buttonIcon} className="w-10 h-10" />
        </button>
      )}
    </>
  );
};

export default App;