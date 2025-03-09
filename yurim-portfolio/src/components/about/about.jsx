import React from "react";

// UI 컴포넌트는 상태 관리보다는 데이터를 받아 렌더링하는 역할이기 때문에 Observer 로직 필요 없음

const About = () => {
  return (
    <section
      id="about"
      className="h-screen bg-[#FFEDD2] flex flex-col items-center text-gray-800 px-4"
    >
      <p className="text-[48px] mb-8 font-thin font-abhaya underline decoration-[2px] pt-32">ABOUT ME</p>

      <p className="text-2xl text-center max-w-3xl leading-8 pt-12">
        안녕하세요! UX를 고려한 디자인을 우선시하며, 새로운 기술을 배우는 것을 좋아하는 프론트엔드 개발자 이유림입니다.
      </p>
    </section>
  );
};

export default About;
