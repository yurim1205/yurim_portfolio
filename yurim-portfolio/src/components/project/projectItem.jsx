import React from "react";
import { FaGithub } from 'react-icons/fa';

const ProjectItem = ({ title, image, description, techStack, problem, semiTitle, date, url, projectGithub }) => (
    <div className="w-full h-[700px] flex items-center justify-end ml-4">
        {/* 프로젝트 이미지 */}
        <div className="w-1/2 h-full flex flex-col items-start justify-start">
            <div className="w-[500px] flex items-start justify-start overflow-hidden shadow-2xl mb-4">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto object-contain"
                />
            </div>
            <p className="self-start text-[20px] sm:text-[20px] text-center text-text text-sm font-sans py-4">
                {semiTitle}
            </p>
            <p className="self-start sm:text-[50px] text-center text-text bg-[#68835E] text-sm font-sans py-4 font-bold">
                {title}
            </p>
            <p className="self-start text-[20px] sm:text-[20px] text-center text-text text-sm font-sans py-4 font-semibold">
                {date}
            </p>
            <p className="self-start text-[20px] sm:text-[20px] text-center text-text text-sm font-sans py-4 font-semibold">
                {url}
            </p>
            <p className="self-start text-[20px] sm:text-[20px] text-center bg-[#68835E] text-text text-sm rounded-lg font-sans py-2 px-2">
                {projectGithub && (
                    <a
                        href={projectGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text hover:"
                    >
                        <FaGithub size={24} /> GitHub
                    </a>
                )}
            </p>
        </div>

        {/* 가운데 선- 길이조절을 위해 줄을 두 개로 분리함 */}
        <div className="relative w-[2px] bg-text ml-10">
            {/* 위쪽 줄 */}
            <div className="absolute top-0 left-0 w-[2px] bg-text" style={{ height: "250px" }}></div>

            {/* 아래쪽 줄 */}
            <div className="absolute bottom-0 left-0 w-[2px] bg-text" style={{ height: "650px" }}></div>
        </div>

        <div className="sm:w-[80%] md:w-[60%] flex flex-col items-start justify-start px-8 w-full h-[700px] ml-4">
            <div className="mb-4 w-[100%] max-w-[450px] bg-main rounded-full items-start justify-start flex flex-col">
                <div className="flex flex-col items-start justify-start">
                    <p className="text-[18px] sm:text-[18px] text-center text-text text-sm font-sans py-4 font-bold">
                        프로젝트 설명
                    </p>
                    <p
                        className="py-2 px-4 max-w-[450px] text-[16px] sm:text-[16px] text-left text-main bg-text text-sm font-semibold font-sans whitespace-pre-line break-words"
                    >
                        {description}
                    </p>
                </div>
                <br></br>

                <div className=" flex flex-col items-start justify-start">
                    <p className="text-[18px] sm:text-[18px] text-center text-text text-sm font-sans py-4 font-bold">
                        배운 점
                    </p>
                    <p className="py-2 px-4 max-w-[450px] text-[16px] sm:text-[15px] text-left text-main bg-text text-sm font-semibold font-sans whitespace-pre-line break-words">
                        {problem}
                    </p>
                </div>
                <br></br>

                <div className="gap-3 flex flex-col items-start justify-start">
                    <p className="text-[18px] sm:text-[18px] text-start text-text  text-sm font-sans  py-2 font-bold">
                        기술 스택
                    </p>
                </div>
            </div>

            {/* 기술 스택 */}
            <div className="flex gap-5 flex-wrap">
                {techStack.map((tech, index) => (
                    <div key={index} className="w-10 h-10">
                        <img src={tech} alt={`tech-${index}`} className="w-full h-full object-contain" />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ProjectItem;