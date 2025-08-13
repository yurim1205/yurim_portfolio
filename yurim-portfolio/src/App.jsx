import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/common/header/header';
import AboutSection from './pages/about/about';
import StackSection from './pages/stack/stackList';
import ProjectSection from './pages/project/project';
import IntroSection from './pages/intro/intro';
import ContactSection from './pages/contact/contact';
import TopButton from './components/buttons/topButton';

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
        <IntroSection />

        <section id="about">
          <AboutSection />
        </section>

        <section id="stack">
          <StackSection />
        </section>

        <section id="project">
          <ProjectSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <TopButton showButton={showButton} />
    </>
  );
};

export default App;