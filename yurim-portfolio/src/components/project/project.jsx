import React from "react";
import projectImg1 from "../../assets/projectImg/ABOUT.png";

const Project = () => {
    return (
        <section
            id="project"
            className="w-full min-h-screen py-20 mx-auto flex flex-col justify-start items-center relative bg-main overflow-hidden"
        >
            <p className="mt-8 text-[96px] sm:text-[64px] text-center font-thin font-abhaya decoration-[2px] text-[#FFEDD2]">
                PROJECT
            </p>

            <div className="mt-4 w-[1200px] h-[2px] bg-text">
            </div>

            <div className="mt-4 w-[1200px] h-[700px] flex items-center justify-center">
                {/* 프로젝트 대표 이미지 */}
                <div className="w-1/2 h-full flex items-center justify-center">
                    <div className="w-[80%] h-[80%] rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                            src={projectImg1} className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* 가운데 선 */}
                <div className="w-[2px] h-[80%] bg-[#FFEDD2]"></div>

                <div className="w-1/2 h-full flex flex-col justify-center px-4">

                </div>
            </div>
        </section>
    );
};

export default Project;