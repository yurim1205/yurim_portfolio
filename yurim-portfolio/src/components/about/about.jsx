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
        안녕하세요! 겅청을 좋아하는 이유림입니다.
      </p>
      
      <p className="text-2xl text-center max-w-3xl leading-8 pt-8">
        주도적으로 새로운 기술을 학습하는 것을 좋아하며, <br />
        UX를 우선시하며 개발하는 프론트엔드 개발자로 성장하고 싶습니다.
      </p>
    </section>
  );
};

export default About;
