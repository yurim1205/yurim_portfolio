import React from 'react';
import { GraduationCap, Users, Rocket, Mail } from 'lucide-react';

// UI 컴포넌트는 상태 관리보다는 데이터를 받아 렌더링하는 역할이기 때문에 Observer 로직 필요 없음

const AboutSection = () => {
  const infoItems = [
    { 
      id: 1, 
      label: "EDUCATION",
      icon: <GraduationCap strokeWidth={0.5} />, 
      title: "순천향대학교", 
      description: "컴퓨터소프트웨어공학과 · 2024.2 졸업" 
    },
    { 
      id: 2, 
      label: "TEAM PROJECT",
      icon: <Users strokeWidth={0.5} />,  
      title: "팀 프로젝트 2회", 
      description: "트립텔러, 랩가드에서 프론트엔드를 맡아 백엔드와 API를 협업하며 개발" 
    },
    { 
      id: 3, 
      label: "PERSONAL PROJECT",
      icon: <Rocket strokeWidth={0.5} />,
      title: "개인 프로젝트", 
      description: "Pageone, 포트폴리오, Influencer Finder를 직접 설계하고 구현" 
    },
    { 
      id: 4, 
      label: "CONTACT",
      icon: <Mail strokeWidth={0.5} />, 
      title: "eoulim3237@naver.com", 
      description: (
        <>
          <a href="https://github.com/yurim1205" target="_blank" rel="noopener noreferrer" className="hover:text-main underline-offset-4 hover:underline">GitHub</a>
          {" · "}
          <a href="https://velog.io/@yurimi" target="_blank" rel="noopener noreferrer" className="hover:text-main underline-offset-4 hover:underline">Velog</a>
        </>
      )
    },
  ];

  const tags = ["FRONTEND", "UI/UX DESIGN", "REACT", "ARCHITECTURE"];

  return (
    <section
      id="about"
      className="w-full mx-auto bg-[#FEFBF5] px-6 md:px-20 py-32"
    >

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-16">
          
    <div className="flex flex-col justify-between">
          <p className="text-5xl text-[#294122] font-serif font-normal">ABOUT ME</p>

          <div className="flex flex-wrap gap-2 mt-16 md:mt-0">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 border border-gray-300 rounded-full text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-300">
      {infoItems.map((item, index) => (
        <div
          key={item.id}
          className={`
            p-10
            ${index % 2 === 0 ? 'md:border-r' : ''}
            border-b border-gray-300
          `}
        >
          <div className="h-16 w-16 text-main mb-6">
            {React.cloneElement(item.icon, { className: "w-full h-full" })}
          </div>
          <p className="text-xs tracking-widest text-gray-400 mb-1">{item.label}</p>
          <h3 className="text-2xl font-medium mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>

    </div>
    </section>
  );
};

export default AboutSection;