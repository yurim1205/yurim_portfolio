import React from "react";
import { FaGithub } from 'react-icons/fa';

const ProjectItem = ({ title, image, description, techStack, problem, semiTitle, date, url, projectGithub }) => (
    <div className="w-full h-[700px] flex items-center justify-end ml-4">
        {/* 프로젝트 이미지 */}
        <div className="w-1/2 h-full flex flex-col items-center justify-start ">
            <div className="w-full flex items-center justify-center overflow-hidden shadow-2xl mb-4">
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
            {/* <p className="self-start text-[20px] sm:text-[20px] text-center text-text text-sm font-sans py-4 font-semibold">
                {url}
            </p> */}
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

        {/* 가운데 선 */}
        <div className="w-[2px] h-[700px] bg-text items-start justify-start ml-8"></div>

        <div className="w-1/2 h-full flex flex-col items-start justify-start px-8 ml-4">
            <div className="mb-4 w-[100%] max-w-[450px] bg-main rounded-full items-start justify-start gap-4 flex flex-col">
                <div className="gap-4 flex flex-col items-start justify-start">
                    <p className="text-[20px] sm:text-[20px] text-center text-main bg-text text-sm font-sans py-4 px-4 font-bold">
                        프로젝트 설명
                    </p>
                    <p
                        className="py-2 px-4 max-w-[550px] text-[20px] sm:text-[20px] text-left text-main bg-text text-sm font-sans whitespace-pre-line break-words"
                    >
                        {description}
                    </p>
                </div>
                <br></br>

                <div className="gap-4 flex flex-col items-start justify-start">
                    <p className="text-[30px] sm:text-[20px] text-center text-main bg-text text-sm font-sans py-4 px-4 font-bold">
                        배운 점
                    </p>
                    <p className="py-2 px-4 max-w-[550px] text-[20px] sm:text-[20px] text-left text-main bg-text text-sm font-sans whitespace-pre-line break-words">
                        {problem}
                    </p>
                </div>
                <br></br>

                <div className="gap-4 flex flex-col items-start justify-start">
                    <p className="text-[20px] sm:text-[20px] text-center text-main bg-text text-sm font-sans py-4 px-4 font-bold">
                        기술 스택
                    </p>
                </div>
            </div>

            {/* 기술 스택 */}
            <div className="flex gap-4">
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