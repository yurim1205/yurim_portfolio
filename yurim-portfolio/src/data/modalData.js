import project1 from "../assets/projectImg/labguard.webp";
import project2 from "../assets/projectImg/portfolio.webp";
import project3 from "../assets/projectImg/tripTeller.webp";
import Github from "../assets/projectIcon/github.png";
import Velog from "../assets/projectIcon/velog.png";

export const modalData = [
    {
      id: 1,
      title: "[랩 가드]",
      period: "2025.5 ~ 2025.7",
      teamInfo: "팀 프로젝트 (기획자 1명, 프론트엔드 1명, 백엔드 3명)",
      summary: "Ai 기반 실험실 안전 보조 서비스",
      description: `화학 분야쪽 신입 사원을 대상으로 기획한 서비스입니다. (배포는 현재 내려간 상태입니다.)`,
      features: [
       "실험별 매뉴얼 등록 및 등록된 매뉴얼 분석",
       "실험 위험도 분석 및 위험 요소 사전 브리핑","실시간 채팅을 통한 실험 로그 저장",
       "채팅 로그 기반 실험 레포트 생성"
      ],
      techStack: ["React", "JavaScript", "Justand", "Tailwind CSS","MySQL"],
      contributions: [
        {
            title: "로그인, 회원가입 기능 구현",
            description: [
                "Zustand를 활용하여 사용자 인증 상태를 전역에서 관리",
                "JWT 및 리프레시 토큰을 세션에 저장하여 인증 흐름 유지",
                "필요할 때만 Zustand에서 인증 상태를 불러와 불필요한 렌더링 최소화",
                "Zod를 활용한 회원가입/로그인 입력값 유효성 검사로 안정성 확보",
                "유효성 검사 실패 시 에러 메시지 제공으로 UX 개선"
            ],
        },
        {
            title: "실험 중 채팅 기능 구현",
            description: [
                "WebSocket 기반 텍스트 채팅 기능 구현",
                "음성 채팅 API 연동을 통해 실험 참여자 간 실시간 소통 지원",
                "채팅 로그 저장 및 조회 기능을 추가하여 실험 기록 관리 가능",
                "타이핑 기능 구현을 통해 실시간으로 채팅하는 듯한 UX 제공"
            ],
        },
        {
            title: "UI/UX 디자인 설계",
            description: [
                "Figma를 활용해 로그인, 회원가입 페이지 레이아웃 및 UX 흐름 설계",
                "메인 페이지 디자인 설계"
            ],
        },
        {
            title: "프론트엔드 환경 세팅 및 구조 설계",
            description: [
                "React + Vite 기반 프로젝트 초기 환경 구성",
                "컴포넌트 구조 및 상태 관리 흐름(Zustand) 설계",
                "재사용 가능한 UI 컴포넌트 설계 및 스타일링 구조(Tailwind CSS) 적용",
                "코드 유지보수성과 확장성을 고려한 폴더 구조 설계"
            ]
        }
      ],
      troubleShooting: [
        {
            title: "프론트와 백엔드 API 연동 시 설계 문제",
            description: [
                "[문제] 실험 중간 저장된 실험을 이어하기 위해 실험별 id가 필요했는데 백엔드에서 해당 api가 구현되어 있지 않았습니다.",
                "[해결] 팀원들과 논의한 결과, 해당 api의 구현 필요성이 있다는 결론을 내렸습니다. 이에 대해 백엔드 팀에 실험을 이어할 수 있는 api 구현을 요청했고, api를 연동하여 해당 기능 구현을 완료했습니다."
            ]
        },
      ],
      links: [
        { label: "GitHub", url: "https://github.com/yurim1205/labguard_front", icon: Github },
      ],
      image: project1
    },

    {
        id: 2,
        title: "[포트폴리오 웹사이트]",
        period: "2025.3",
        teamInfo: "개인 프로젝트",
        summary: "개인 포트폴리오 사이트",
        description: `노션이나 pdf 형태로 포트폴리오를 제작할 수도 있지만, 프론트엔드 개발자로서 직접 만든 포트폴리오 사이트를 가지고 싶어 제작하게 됐습니다.
         저를 잘 나타낼 수 있는 UI를 직접 설계했으며, UX를 고려하여 디자인했습니다.
        현재도 계속 고도화 진행 중입니다.`,
        features: [
            "자기소개 및 인적사항", "기술 스택",
            "GitHub 및 블로그 링크",
            "프로젝트 경험"
        ],
        techStack: ["React", "Vite", "JavaScript", "Tailwind CSS", "Framer Motion"],
        contributions: [
            {
                title: "포트폴리오 제작 의도를 파악하여 기획",
                description: [ 
                    "자기소개, 기술 스택, 프로젝트 경험 등 중요도 순으로 페이지 구성",
                    "포트폴리오를 보는 사용자들에게 쉽게 정보를 전달할 수 있도록 고려",
                ],
            },
            {
                title: "직관성을 고려한 UI / UX 디자인 설계",
                description: [
                    "좋아하는 색상 선택으로 개성을 살리며 사용자들이 편안함을 느낄 수 있는 색상 선택",
                    "모바일 환경에서도 쉽게 사용할 수 있도록 반응형 디자인 적용",
                    "헤더 메뉴, 탑 버튼, 프로젝트 카드 등 직관적인 디자인을 고려하며 사용자 경험을 개선하기 위해 노력",
                    "framer-motion 라이브러리를 활용해 애니메이션 효과 적용"             
                ]
            },
        ],
        troubleShooting: [
            {
                title: "애니메이션 성능",
                description: [
                    "[문제] 스크롤 애니메이션 성능이 느리고 부드럽지 않음",
                    "[해결] framer-motion + IntersectionObserver 최적화"
                ]
            },

        ],
        links: [
            { label: "GitHub", url: "https://github.com/yurim1205/yurim_portfolio", icon: Github },
            { label: "Velog",
            url: "https://velog.io/@yurimi/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%82%AC%EC%9D%B4%ED%8A%B8-%ED%9A%8C%EA%B3%A0",
            icon: Velog },
          ], 
        url: "https://yurim-portfolio-one.vercel.app/",
        image: project2
      },

      {
        id: 3,
        title: "[트립 텔러]",
        period: "2024.4 ~ 2024.6",
        teamInfo: "팀 프로젝트 (프론트엔드 4명, 백엔드 2명)",
        summary: "여행 일정을 계획하고, 다른 사용자들과 여행 로그를 공유하는 서비스",
        description: `여행 일정을 계획하고, 다른 사용자들과 여행 로그를 공유하는 서비스입니다.
        프론트엔드 개발을 맡아 진행했습니다. `,
        features: [
            "새로운 여행 일정 생성 및 일정 관리",
            "예산 / 지출 관리","여행 로그 작성", "다른 사용자의 여행 로그 확인",
            "일반 로그인, 소셜 로그인 및 회원정보 수정"
        ],
        techStack: ["React","Vite", "JavaScript", "Styled Components","NestJS", "MongoDB"],
        contributions: [
            {
                title: "여행 생성 api 연동, 메인 페이지, 사용자의 여행 로그 확인 페이지 구현",
                description: [
                    "무한 스크롤 구현을 통해 사용자가 다른 사용자의 여행 로그를 확인할 수 있도록 구현",
                ],
            },
            {
                title: "추가 사유 명시해 API 구현 제안하며 백엔드와 협업",
                description: [
                    "피드를 불러오는 페이지마다 무한 스크롤을 위한 페이지네이션 데이터가 필요해 이를 백엔드 팀원에게 추가 구현 제안"
                ],
            }
        ],
        troubleShooting: [
            {
                title: "최신순의 피드만 불러오던 메인화면 초기 디자인 설계에서, 서비스의 특성을 고려하여 디자인 수정",
                description: [
                    "메인 화면 상단 배너 구현을 통해 UX 개선",
                ]
            },
            {
                title: "모달창 이벤트 최적화를 통한 DB 과부하 해결",
                description: [
                    "[문제] 여행 생성 버튼 클릭 시, 과도한 FeedID값이 생성되면서 DB에 불필요한 피드 데이터가 쌓이게 됨",
                    "[해결] 팀원들과 회의를 통해 모달을 열 때 API를 호출하는 것이 아닌, 여행 일정을 다 작성하고 연동하도록 변경하여 구현",
                ]
            }
        ],
        links: [
            { label: "GitHub", url: "https://github.com/TripTeller-repository", icon: Github },
        ],
        url: "https://www.trip-teller.com/",
        image: project3
      }
  ]; 