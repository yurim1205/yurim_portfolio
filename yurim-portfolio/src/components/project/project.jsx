import React from "react";
import { projectData } from "./projectData";
import ProjectItem from "./projectItem";

const Project = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-main">
            <section id="project" className="w-full py-20 mx-auto flex flex-col items-center relative bg-main overflow-hidden">
                <div>
                    <p className="mt-8 text-[96px] sm:text-[64px] text-center font-thin font-abhaya decoration-[2px] text-[#FFEDD2]">
                        PROJECT
                    </p>

                    <div className="mt-4 w-[1200px] h-[2px] bg-text"></div>

                    {/* 프로젝트 렌더링 */}
                    <div className="mt-8 w-full flex flex-col items-center gap-12">
                        {projectData.map((project) => (
                            <ProjectItem key={project.id} {...project} />
                        ))}
                    </div>
                </div>
            </section>

            <footer className="w-full bg-text h-[150px] flex items-center justify-center text-black">
                <div className="container mx-auto flex justify-between w-full items-center">
                    <div className="flex space-x-4">
                        <a href="https://github.com/yurim1205" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github text-xl"></i>
                        </a>

                        <a href="https://velog.io/@yurimi/posts" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-rss text-xl"></i>
                        </a>
                    </div>
                    <p className="text-sm text-right">© 2025 LeeYurim. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Project;