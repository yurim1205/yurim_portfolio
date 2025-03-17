import React from "react";
import CalenderIcon from "../../assets/calendar.png";
import PersonIcon from "../../assets/person.png";
import GraduationIcon from "../../assets/graduation.png";
import EmailIcon from "../../assets/email.png";

// UI 컴포넌트는 상태 관리보다는 데이터를 받아 렌더링하는 역할이기 때문에 Observer 로직 필요 없음

const About = () => {
  const infoItems = [
    // 수정하기 편하게 아이콘 크기 따로 지정함
    { id: 1, icon: PersonIcon, body: "이유림", size: "h-20 w-20" },
    { id: 2, icon: CalenderIcon, body: "2000.12.05", size: "h-20 w-20" },
    { id: 3, icon: GraduationIcon, body: "컴퓨터소프트웨어공학", size: "h-20 w-20" },
    {
      id: 4,
      icon: EmailIcon,
      body: (
        <>
          yuurriimm@gmail.com
          <br />
          eoulim3237@naver.com
        </>
      ),
      size: "h-20 w-20"
    },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen mx-auto bg-[#FFEDD2] flex flex-col items-center justify-center px-4 py-32"
    >
      <div className="max-w-6xl w-full px-4 mb-32">
        <p className="mb-24 text-[96px] sm:text-[64px] text-center font-thin font-abhaya decoration-[2px]">
          ABOUT ME
        </p>

        <p className="sm:text-3xl text-center max-w-3xl mx-auto leading-8 text-main font-sans">
          안녕하세요! 경청을 좋아하는 이유림입니다.
        </p>

        <p className="text-3xl text-center max-w-4xl mx-auto leading-snug mt-5 text-main font-sans">
          <span className="font-bold">주도적</span>으로 새로운 기술을 학습하는 것을 좋아하며, <br />
          <span className="font-bold">UX를 우선시하며 개발하는</span> 프론트엔드 개발자로
          <span className="font-bold"> 성장</span>하고 싶습니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-36">
          {infoItems.map((item) => (
            <div className="flex flex-col items-center" key={item.id}>
              <img src={item.icon} alt={`${item.title} 아이콘`} className="mt-10 h-20 w-20" />
              <p className="text-xl mt-8 text-main text-center">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;