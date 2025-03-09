import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/common/header';
import About from './components/about/about';

// 모든 section태그에 대한 관찰 로직이 있고, 
// activeSection를 Header 컴포넌트에 전달해서 ui 업데이트 !

// [App.jsx]
// IntersectionObserver로 각 섹션을 감지하고 activeSection 상태를 업데이트.
// activeSection 상태를 Header에 props로 전달.
// 각 섹션 컴포넌트(About.jsx, Stack.jsx, Project.jsx 등)를 렌더링.

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
      root: null, 
      threshold: 0.1, // 10% 보이면 트리거
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

  return (
    <>
      <Header activeSection={activeSection} />
      <main className="relative">
        <section
          id="main"
          className="h-screen flex flex-col items-start pl-32 justify-center bg-[#294122] text-[#FFEDD2]"
        >
          <h1 className="text-xl font-bold font-sans">Frontend developer<br />
            </h1>
          <h1 className="text-6xl font-bold font-aclonica">
            PORT<br />FOLIO
          </h1>
        </section>

        <section
          id="about"
          className="h-screen bg-[#FFEDD2] flex items-center justify-center">
          <About />
        </section>

        <section
          id="stack"
          className="h-scree flex items-center justify-center">
          <h1 className="text-2xl">Stack Section</h1>
        </section>

        <section
          id="project"
          className="h-screen flex items-center justify-center">
          <h1 className="text-2xl">Project Section</h1>
        </section>
      </main>
    </>
  );
};

export default App;