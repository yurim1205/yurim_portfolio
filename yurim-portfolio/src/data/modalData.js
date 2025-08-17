import project1 from "../assets/projectImg/labguard.webp";
import project2 from "../assets/projectImg/portfolio.webp";
import project3 from "../assets/projectImg/tripTeller.webp";

export const modalData = [
    {
      id: 1,
      title: "[랩 가드]",
      period: "2025.5 ~ 2025.7",
      teamInfo: "팀 프로젝트 (기획자 1명, 프론트엔드 1명, 백엔드 3명)",
      summary: "Ai 기반 실험실 안전 보조 서비스",
      description: `Ai 기반 실험실 안전 보조 서비스`,
      features: [
       "실험별 매뉴얼 등록 및 등록된 매뉴얼 분석",
       "실험 위험도 분석 및 위험 요소 사전 브리핑","실시간 채팅을 통한 실험 로그 저장",
       "채팅 로그 기반 실험 레포트 생성"
      ],
      techStack: ["React", "JavaScript", "Justand", "Tailwind CSS","MySQL"],
      contributions: [
        {
            title: "로그인, 회원가입 기능",
            description: ""
        },
        {
            title: "",
            description: ""
        },
       

      ],
      troubleShooting: [
        {
            title: "",
            description: ""
        },
      ],
      image: project1
    },

    {
        id: 2,
        title: "[포트폴리오 웹사이트]",
        period: "2025.3 ~ 진행 중",
        teamInfo: "개인 프로젝트",
        summary: "Ai 기반 실험실 안전 보조 서비스",
        description: `포트폴리오를 위해 제작한 웹사이트로, 현재도 계속 업데이트 중입니다.`,
        features: [
        //   "카카오, 구글, 애플 로그인",
        //   "유치원 등록, 강아지 관리, 셔틀 관련 운영"
        ],
        techStack: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
        contributions: [
            {
                title: "",
                description: ""
            },
        ],
        troubleShooting: [
            {
                title: "",
                description: ""
            },

        ],

        image: project2
      },

      {
        id: 3,
        title: "[트립 텔러]",
        period: "2024.4 ~ 2024.6",
        teamInfo: "팀 프로젝트 (프론트엔드 4명, 백엔드 2명)",
        summary: "Ai 기반 실험실 안전 보조 서비스",
        description: `여행 일정을 계획하고, 여행 기록을 공유하는 서비스로, `,
        features: [
            "여행 일정 계획",
            ""

        ],
        techStack: ["React","Vite", "JavaScript", "Styled Components","NestJS", "MongoDB"],
        contributions: [
            {
                title: "",
                description: ""
            },
        ],
        troubleShooting: [
            {
                title: "",
                description: ""
            },
        ],
        image: project3
      }
  ];