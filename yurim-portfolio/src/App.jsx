import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/common/header';

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
          className="h-screen bg-gray-200 flex items-center justify-center opacity-0"
        >
          <h1 className="text-2xl font-bold">About Section</h1>
        </section>
        <section
          id="stack"
          className="h-screen bg-gray-300 flex items-center justify-center opacity-0"
        >
          <h1 className="text-2xl font-bold">Stack Section</h1>
        </section>
        <section
          id="project"
          className="h-screen bg-gray-400 flex items-center justify-center opacity-0"
        >
          <h1 className="text-2xl font-bold">Project Section</h1>
        </section>
      </main>
    </>
  );
};

export default App;