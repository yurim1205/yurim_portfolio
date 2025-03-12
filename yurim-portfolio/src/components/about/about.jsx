import React from "react";
import CalenderIcon from "../../assets/calendar.png";
import PersonIcon from "../../assets/person.png";
import GraduationIcon from "../../assets/graduation.png";
import EmailIcon from "../../assets/email.png";

// UI 컴포넌트는 상태 관리보다는 데이터를 받아 렌더링하는 역할이기 때문에 Observer 로직 필요 없음

const About = () => {
  const infoItems = [
    // 수정하기 편하게 아이콘 크기 따로 지정함
    { icon: PersonIcon, title: "이름", body: "이유림", size: "h-20 w-20" },
    { icon: CalenderIcon, title: "생년월일", body: "2000.12.05", size: "h-20 w-20" },
    { icon: GraduationIcon, title: "전공", body: "컴퓨터소프트웨어공학", size: "h-20 w-20" },
    {
      icon: EmailIcon,
      title: "이메일",
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
      className="h-screen bg-[#FFEDD2] flex flex-col items-center text-gray-800 px-4"
    >
      <p className="text-[64px] mb-8 font-thin font-abhaya underline decoration-[2px] pt-32">
        ABOUT ME
      </p>

      <p className="text-3xl text-center max-w-3xl leading-8 pt-4 text-[#294122] font-sans">
        안녕하세요! 경청을 좋아하는 이유림입니다.
      </p>

      <p className="text-3xl text-center max-w-4xl leading-snug pt-8 text-[#294122] font-sans">
        <span className="font-bold text-3xl">주도적</span>으로 새로운 기술을
        학습하는 것을 좋아하며, <br />
        <span className="font-bold text-3xl">UX를 우선시하며 개발하는</span> 프론트엔드 개발자로 
        <span className="font-bold text-3xl"> 성장</span>하고 싶습니다.
      </p>

      <div className="flex justify-center gap-36 pt-36">
        {infoItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.icon}
              alt={`${item.title} 아이콘`}
              className={`${item.size} text-[#294122]`}
            />
            <p className="text-2xl mt-4 font-bold text-[#294122] font-sans">
              {item.title}
            </p>
            <p className="text-xl mt-4 text-[#294122] font-sans">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;