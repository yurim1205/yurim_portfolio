import React, { useState } from "react";
import { projectData } from "./projectData";
import ProjectItem from "./projectItem";
import githubIcon from "../../assets/footerIcon/github.png";
import velogIcon from "../../assets/footerIcon/velog.png";

const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="min-h-screen flex flex-col justify-between bg-main">
            <section
                id="project"
                className="w-full py-20 mx-auto flex flex-col items-center relative bg-main overflow-hidden">
                <p className="mt-8 text-[64px] sm:text-[48px] text-center font-thin font-abhaya decoration-[2px] text-[#FFEDD2]">
                    PROJECT
                </p>

                <div className="mt-4 w-[1200px] h-[2px] bg-text"></div>

                <div className="relative w-full flex items-center justify-center mt-8">
                    <div className="relative w-[1200px] h-auto overflow-hidden flex items-center justify-between">
                        {/* 왼쪽 화살표 */}
                        <button
                            onClick={handlePrev}
                            className="text-3xl text-[#FFEDD2] z-10"
                        >
                            ❮
                        </button>

                        <div className="w-full h-auto overflow-hidden relative">
                            <div
                                className="flex transition-transform duration-500"
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >
                                {projectData.map((project) => (
                                    <div
                                        key={project.id}
                                        className="w-[1200px] flex-shrink-0"
                                    >
                                        <ProjectItem {...project} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 오른쪽 화살표 */}
                        <button
                            onClick={handleNext}
                            className="text-3xl text-[#FFEDD2] z-10"
                        >
                            ❯
                        </button>
                    </div>

                </div>
            </section>

            <footer className="w-full bg-text h-[200px] flex items-center justify-center text-main">
                <div className="container mx-auto flex justify-between w-full items-center">
                    <div className="flex space-x-4">
                        <a href="https://github.com/yurim1205" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="github" className="w-10 h-10" />
                        </a>

                        <a href="https://velog.io/@yurimi/posts" target="_blank" rel="noopener noreferrer">
                            <img src={velogIcon} alt="velog" className="w-10 h-10" />
                        </a>
                    </div>
                    <p className="text-sm text-right">© 2025 LeeYurim. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Project; 