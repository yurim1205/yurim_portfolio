import projectImg1 from "../../assets/projectImg/ABOUT.png";
import projectImg2 from "../../assets/projectImg/tripTeller.png";
import css from "../../assets/stackIcon/CSS.svg";
import HTML from "../../assets/stackIcon/HTML.svg";
import JS from "../../assets/stackIcon/JavaScript.svg";
import React from "../../assets/stackIcon/React.svg";
import Tailwind from "../../assets/stackIcon/tailwind-css.png";
import Vite from "../../assets/stackIcon/Vite-Dark.svg";
import StyledComponents from "../../assets/stackIcon/StyledComponents.svg";
import TS from "../../assets/stackIcon/TypeScript.svg";
import NestJS from "../../assets/stackIcon/NestJS.svg";

export const projectData = [
    {
        id: 1,
        title: "포트폴리오 사이트",
        semiTitle: "개인 프로젝트",
        image: projectImg1,
        description: `포트폴리오를 위해 제작한 웹사이트입니다.

        사용자에게 편리함을 제공하기 위해 반응형 웹으로 제작하여 모든 환경에서 확인할 수 있습니다.

        리액트 프로젝트의 특징인 재사용 컴포넌트를 활용해 유지보수에 용이합니다.
        `,
        problem: `개인 프로젝트이기에 디자인부터 컴포넌트 세분화까지 혼자 기획하는 과정이 흥미로웠습니다.

        유지보수하기 편리하게 컴포넌트를 구현하려 노력했으며, 렌더링에 대해 고민하게 된 경험이었습니다.

        추후 TypeScript와 Next.js으로 마이그레이션 할 계획입니다.
        `,
        techStack: [css, HTML, JS, React, Tailwind, Vite],
        date: "2025.3.6 ~ 2025.3.31",
        url: "",
        projectGithub: "https://github.com/yurim1205/yurim_portfolio"
    },
    {
        id: 2,
        title: "TripTeller",
        semiTitle: "팀 프로젝트 (6인)",
        image: projectImg2,
        description: `TripTeller는 사용자의 여행 일정을 계획하고, 여행 이야기를 기록하며 추억할 수 있는 서비스입니다.

        엘리스트랙 부트캠프에서 진행한 팀 프로젝트로, 프론트엔드 포지션을 맡았습니다.
        `,
        problem: `처음 진행해본 리액트 프로젝트라 컴포넌트 세분화에 어려움을 느꼈습니다.

        기간 내 좋은 프로젝트를 완성하기 위해 기획 단계가 중요하다는 것과, 협업 시 프론트엔드-백엔드와의 의사소통 중요성을 배우게 되었습니다.
        `,
        techStack: [css, HTML, JS, React, Vite, StyledComponents, TS, NestJS],
        date: "2024.4.1 ~ 2024.4.19",
        url: "",
        projectGithub: "https://github.com/TripTeller-repository"
    }
];