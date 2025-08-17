import projectImg1 from "../assets/projectImg/portfolio.webp";
import projectImg2 from "../assets/projectImg/tripTeller.webp";
import projectImg3 from "../assets/projectImg/labguard.webp";
import css from "../assets/stackIcon/CSS.svg";
import HTML from "../assets/stackIcon/HTML.svg";
import JS from "../assets/stackIcon/JavaScript.svg";
import React from "../assets/stackIcon/React.svg";
import Tailwind from "../assets/stackIcon/tailwind-css.png";
import Vite from "../assets/stackIcon/Vite-Dark.svg";
import StyledComponents from "../assets/stackIcon/StyledComponents.svg";
import TS from "../assets/stackIcon/TypeScript.svg";
import NestJS from "../assets/stackIcon/NestJS.svg";

export const projectData = [
    {
        id: 1,
        title: "Lab Guard",
        semiTitle: "팀 프로젝트",
        image: projectImg3, // fallback (일반 이미지)
        imageWebp: projectImg3, // 일반 해상도 WebP
        // imageWebp2x: projectImg3, // 고해상도 WebP (올바른 import 사용)
        description: `Ai 기반 실험실 안전 보조 서비스`,
        problem: `팀 프로젝트이기에 협업 과정이 흥미로웠습니다.

        프론트엔드와 백엔드 간의 협업 과정에서 소통의 중요성을 배웠습니다.
        `,
        techStack: [css, HTML, JS, React, Tailwind, Vite],
        date: "2025.5 ~ 2025.7",
        url: "https://yurim-portfolio-one.vercel.app/",
        projectGithub: "https://github.com/yurim1205/yurim_portfolio",
        velogUrl: "https://velog.io/write?id=06643756-1951-4092-a47a-7e9fe7dde677"
    },
    {
        id: 2,
        title: "포트폴리오 사이트",
        semiTitle: "개인 프로젝트",
        image: projectImg1, // fallback
        imageWebp: projectImg1,      
        description: `포트폴리오를 위해 제작한 웹사이트

        `,
        problem: `개인 프로젝트이기에 디자인부터 컴포넌트 세분화까지 혼자 기획하는 과정이 흥미로웠습니다.

        유지보수하기 편리하게 컴포넌트를 구현하려 노력했으며, 렌더링에 대해 고민하게 된 경험이었습니다.

        추후 TypeScript와 Next.js으로 마이그레이션 할 계획입니다.
        `,
        techStack: [css, HTML, JS, React, Tailwind, Vite],
        date: "2025.3.6 ~ 2025.4.1",
        url: "https://yurim-portfolio-one.vercel.app/",
        projectGithub: "https://github.com/yurim1205/yurim_portfolio",
        velogUrl: "https://velog.io/write?id=06643756-1951-4092-a47a-7e9fe7dde677"
    },
    {
        id: 3,
        title: "TripTeller",
        semiTitle: "팀 프로젝트 (6인)",
        image: projectImg2, // fallback
        imageWebp: projectImg2,    
        description: `여행 일정을 계획하고, 여행 기록을 공유하는 서비스
        `,
        problem: `처음 진행해본 리액트 프로젝트라 컴포넌트 세분화에 어려움을 느꼈습니다.

        기간 내 좋은 프로젝트를 완성하기 위해 기획 단계가 중요하다는 것과, 협업 시 프론트엔드-백엔드와의 의사소통 중요성을 배우게 되었습니다.
        `,
        techStack: [css, HTML, JS, React, Vite, StyledComponents, TS, NestJS],
        date: "2024.4.1 ~ 2024.4.19",
        url: "https://www.trip-teller.com/",
        projectGithub: "https://github.com/TripTeller-repository",
        velogUrl: "https://velog.io/@yurimi/%EC%97%98%EB%A6%AC%EC%8A%A4-SW-%ED%8A%B8%EB%9E%99-2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0"
    }
];