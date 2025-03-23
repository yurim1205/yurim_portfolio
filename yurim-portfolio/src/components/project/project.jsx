import React from "react";
import { projectData } from "./projectData";
import ProjectItem from "./projectItem";

const Project = () => {
    return (
        <section
            id="project"
            className="w-full min-h-screen py-20 mx-auto flex flex-col justify-start items-center relative bg-main overflow-hidden"
        >
            {/* 섹션 제목 */}
            <p className="mt-8 text-[96px] sm:text-[64px] text-center font-thin font-abhaya decoration-[2px] text-[#FFEDD2]">
                PROJECT
            </p>

            <div className="mt-4 w-[1200px] h-[2px] bg-text"></div>

            {/* 프로젝트 리스트 */}
            <div className="mt-8 w-full flex flex-col items-center gap-12">
                {projectData.map((project) => (
                    <ProjectItem key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Project;