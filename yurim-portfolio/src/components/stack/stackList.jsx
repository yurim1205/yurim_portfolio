import React from "react";
import HtmlIcon from "../../assets/stackIcon/HTML.svg";
import JsIcon from "../../assets/stackIcon/JavaScript.svg";
import CssIcon from "../../assets/stackIcon/CSS.svg";
import TsIcon from "../../assets/stackIcon/TypeScript.svg";
import ReactIcon from "../../assets/stackIcon/React.svg";
import StyledComponentsIcon from "../../assets/stackIcon/StyledComponents.svg";
import AndroidStudioIcon from "../../assets/stackIcon/AndroidStudio-Light.svg";
import VsCodeIcon from "../../assets/stackIcon/VSCode.svg";
import PostmanIcon from "../../assets/stackIcon/Postman.svg";
import FigmaIcon from "../../assets/stackIcon/Figma.svg";
import GitIcon from "../../assets/stackIcon/Git.svg";
import GitLabIcon from "../../assets/stackIcon/GitLab-Light.svg";

// StackSection: title과 icons를 props로 받아서 각 섹션을 렌더링 함
const StackSection = ({ title, icons }) => (
    <div className="z-10 relative flex flex-col items-center">
        <div className="flex flex-col items-start">
            <div className="mt-12 w-[70%] max-w-[150px] h-[50px] bg-main rounded-full flex flex-col items-center justify-center">
                <p className="text-[20] sm:text-[20px] text-center text-text font-sans font-thin">
                    {title}
                </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-16">
                {icons.map((icon) => (
                    <div key={icon.id} className="relative group">
                        <img
                            src={icon.src}
                            alt={icon.alt}
                            className="w-[130px] h-[115px] rounded-lg shadow-xl transition-transform duration-200 transform hover:scale-110 hover:shadow-2xl"
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const StackList = () => {
    const FrontendIcons = [
        { id: 1, src: HtmlIcon, alt: "HTML Icon" },
        { id: 2, src: JsIcon, alt: "JavaScript Icon" },
        { id: 3, src: CssIcon, alt: "CSS Icon" },
        { id: 4, src: TsIcon, alt: "TypeScript Icon" },
        { id: 5, src: ReactIcon, alt: "React Icon" },
        { id: 6, src: StyledComponentsIcon, alt: "StyledComponents Icon" },
    ];

    const ToolsIcons = [
        { id: 7, src: AndroidStudioIcon, alt: "AndroidStudio Icon" },
        { id: 8, src: VsCodeIcon, alt: "VsCode Icon" },
        { id: 9, src: PostmanIcon, alt: "Postman Icon" },
        { id: 10, src: FigmaIcon, alt: "Figma Icon" },
        { id: 11, src: GitIcon, alt: "Git Icon" },
        { id: 12, src: GitLabIcon, alt: "GitLab Icon" }
    ];

    return (
        <section
            id="stack"
            className="w-full min-h-screen py-20 mx-auto flex flex-col justify-start items-center relative bg-[#68835E] overflow-hidden"
        >
            <p className="mt-8 text-[96px] sm:text-[64px] text-center font-thin font-abhaya decoration-[2px] text-[#FFEDD2]">
                TECH STACK
            </p>

            <StackSection title="Frontend" icons={FrontendIcons} />
            <br></br>
            <br></br>
            <br></br>
            <StackSection title="Tools" icons={ToolsIcons} />
        </section>
    );
};

export default StackList;