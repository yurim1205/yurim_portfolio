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
        description: "포트폴리오를 위해 개발한 사이트입니다.",
        problem: "",
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
        description: "엘리스트랙 부트캠프에서 진행한 팀 프로젝트입니다. 본 서비스는 사용자의 여행을 기록하는 여행 기록 서비스입니다.",
        problem: "문제점들",
        techStack: [css, HTML, JS, React, Vite, StyledComponents, TS, NestJS],
        date: "2024.4.1 ~ 2024.4.19",
        url: "",
        projectGithub: "https://github.com/TripTeller-repository"
    }
];