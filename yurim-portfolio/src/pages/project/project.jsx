import React, { useState } from "react";
import { projectData } from "../../data/projectData";
import { modalData } from "../../data/modalData";
import ProjectCard from "../../components/cards/projectCard";
import ProjectDetailModal from "../../components/modal/projectDetailModal";

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
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

  // 선택된 프로젝트 상세 데이터
  const selectedProjectDetail =
    selectedProjectId &&
    modalData.find(modal => modal.id === selectedProjectId);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-main">
      <section
        id="project"
        className="w-full py-20 mx-auto flex flex-col items-center relative bg-main overflow-hidden"
      >
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {visibleProjects.map(project => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                onClick={() => setSelectedProjectId(project.id)}
              />
            ))}

            {selectedProjectDetail && (
              <ProjectDetailModal
                onClose={() => setSelectedProjectId(null)}
              >
                <h2 className="text-xl font-bold mb-4 text-center">
                  {selectedProjectDetail.title}
                </h2>
                <div className="flex items-center justify-center mt-4 space-x-4 mb-4">
                <p className="text-center">{selectedProjectDetail.period}</p>
                <div className="w-px h-6 bg-gray-400 mx-4"></div>
                <p className="text-center">{selectedProjectDetail.teamInfo}</p>
                </div>
                {selectedProjectDetail.image && (
                  <img
                    src={selectedProjectDetail.image}
                    alt={selectedProjectDetail.title}
                    className="rounded-lg w-[700px] h-[400px] mx-auto"
                  />
                )}
                <div className="flex flex-col items-center mt-4">
                <p className="mb-4 text-center">{selectedProjectDetail.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProjectDetail.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="w-[700px] h-px bg-gray-300 my-4"></div>

                <div className="flex flex-col w-[700px] mx-auto mt-4">
                    <p className="mb-2 font-semibold text-xl">주요 기능</p>
                    <ul className="list-disc pl-6 mb-4">
                        {selectedProjectDetail.features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                        ))}
                    </ul>

                    <p className="mb-2 font-semibold text-xl">기여 내용</p>
                    <div className="space-y-2 mb-4">
                        {selectedProjectDetail.contributions.map((contrib, i) => (
                            <div>
                                <div
                                    key={i}
                                    className="bg-gray-100 px-4 py-2 rounded-md text-gray-800 font-medium"
                                    >
                                    <p>{contrib.title}</p>
                                </div>
                                <div>
                                    <ul className="text-gray-600 text-sm mt-1 list-disc pl-5">
                                        <li>{contrib.description}</li>
                                    </ul>     
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mb-2 font-semibold text-xl">트러블 슈팅</p>
                    <div className="space-y-2 mb-4">
                        {selectedProjectDetail.troubleShooting.map((trouble, i) => (
                            <div>
                                <div
                                    key={i}
                                    className="bg-gray-100 px-4 py-2 rounded-md text-gray-800 font-medium"
                                    >
                                    <p>{trouble.title}</p>
                                </div>
                                <div>
                                    <ul className="text-gray-600 text-sm mt-1 list-disc pl-5">
                                        <li>{trouble.description}</li>
                                    </ul>     
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                </div>
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