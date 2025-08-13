import React, { useState } from "react";
import { projectData } from "../../data/projectData";
import ProjectCard from "../../components/cards/projectCard";
import ProjectDetailModal from "../../components/modal/projectDetailModal";

const ProjectSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);
    const itemsPerPage = 2;

    const handlePrev = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0
                ? Math.max(projectData.length - itemsPerPage, 0)
                : prevIndex - itemsPerPage
        );
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex =>
            prevIndex + itemsPerPage >= projectData.length
                ? 0
                : prevIndex + itemsPerPage
        );
    };

    const visibleProjects = projectData.slice(
        currentIndex,
        currentIndex + itemsPerPage
    );

    return (
        <div className="min-h-screen flex flex-col justify-between bg-main">
            <section id="project" className="w-full py-20 mx-auto flex flex-col items-center relative bg-main overflow-hidden">
                <p className="mt-4 text-[64px] sm:text-[48px] text-center font-thin font-abhaya decoration-[2px] text-[#FFEDD2]">
                    PROJECT
                </p>

                <div className="mt-4 w-[1200px] h-[2px] bg-text"></div>

                <div className="relative w-full flex items-center justify-center mt-8">
                    {/* 왼쪽 화살표 */}
                    <button
                        onClick={handlePrev}
                        className="mr-36 text-4xl text-[#FFEDD2] z-10 transition-transform duration-300 transform hover:scale-125 hover:text-[#68835E]"
                    >
                        ❮
                    </button>

                    {/* 현재 카드 */}
                    <div className="grid grid-cols-2 gap-6 items-stretch">
                    {visibleProjects.map(project => (
                            <ProjectCard
                                key={project.id}
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                onClick={() => {
                                    setSelectedProject(project)}}
                            />
                        ))}

                        {selectedProject && (
                                <ProjectDetailModal onClose={() => setSelectedProject(null)}>
                                <h2 className="text-xl font-bold mb-4">{selectedProject.title}</h2>
                                <p className="mb-4">{selectedProject.description}</p>
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full rounded-lg"
                                />
                                </ProjectDetailModal>
                            )}
                        </div>

                    {/* 오른쪽 화살표 */}
                    <button
                        onClick={handleNext}
                        className="ml-36 text-4xl text-[#FFEDD2] z-10 transition-transform duration-300 transform hover:scale-125 hover:text-[#68835E]"
                    >
                        ❯
                    </button>
                </div>

                {/* 슬라이드 하단 점 */}
                <div className="flex space-x-2 mt-8">
                    {Array.from({ length: Math.ceil(projectData.length / itemsPerPage) }).map(
                        (_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === Math.floor(currentIndex / itemsPerPage)
                                        ? "bg-[#68835E]"
                                        : "bg-[#FFEDD2] opacity-50"
                                }`}
                            ></div>
                        )
                    )}
                </div>
            </section>
        </div>
    );
};

export default ProjectSection;