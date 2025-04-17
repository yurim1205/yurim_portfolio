import React, { useState } from "react";
import { projectData } from "./projectData";
import ProjectItem from "./projectItem";

const ProjectSection = () => {
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
            <section id="project" className="w-full py-20 mx-auto flex flex-col items-center relative bg-main overflow-hidden">
                <p className="mt-4 text-[64px] sm:text-[48px] text-center font-thin font-abhaya decoration-[2px] text-[#FFEDD2]">
                    PROJECT
                </p>

                <div className="mt-4 w-[1200px] h-[2px] bg-text"></div>

                <div className="relative w-full flex items-center justify-center mt-8">
                    <div className="relative w-full max-w-[1000px] h-auto overflow-hidden flex items-center justify-between">
                        {/* 왼쪽 화살표 */}
                        <button
                            onClick={handlePrev}
                            className="text-4xl text-[#FFEDD2] z-10 transition-transform duration-300 transform hover:scale-125 hover:text-[#68835E]"
                        >
                            ❮
                        </button>

                        <div className="w-full h-auto overflow-hidden relative">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                    width: "100%", // 전체 크기를 100%로 맞춤
                                }}
                            >
                                {projectData.map((project) => (
                                    <div
                                        key={project.id}
                                        className="w-full flex-shrink-0 px-4 flex justify-center"
                                    >
                                        <ProjectItem {...project} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 오른쪽 화살표 */}
                        <button
                            onClick={handleNext}
                            className="text-4xl text-[#FFEDD2] z-10 transition-transform duration-300 transform hover:scale-125 hover:text-[#68835E]"
                        >
                            ❯
                        </button>
                    </div>
                </div>

                {/* 슬라이드 하단 점 */}
                <div className="flex space-x-2 mt-8">
                    {projectData.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-[#68835E]" : "bg-[#FFEDD2] opacity-50"
                                }`}
                        ></div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProjectSection;