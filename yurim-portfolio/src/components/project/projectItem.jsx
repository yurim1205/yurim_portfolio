import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectItem = ({ title, image, description, techStack, problem, semiTitle, date, url, projectGithub }) => (
    <div className="w-full max-w-[1000px] flex flex-col md:flex-row md:justify-center items-start gap-10 mx-auto px-4">
        <div className="w-full md:w-[45%] flex flex-col items-start">
            <div className="w-full max-w-[500px] md:max-w-[500px] shadow-2xl mb-4 mx-auto">
                <img src={image} alt={title} className="w-full aspect-[16/9] object-cover " />
            </div>
            <p className="text-sm sm:text-md text-text py-2">{semiTitle}</p>
            <p className="text-lg sm:text-xl md:text-3xl font-bold text-text bg-[#68835E] py-2 px-4">
                {title}
            </p>
            <p className="text-sm sm:text-md font-semibold text-text py-2">{date}</p>
            <div className="py-3 flex gap-4">
                {projectGithub && (
                    <Button
                        href={projectGithub}    // 링크로 연결
                        target="_blank"         // 새 탭에서 열리게 설정
                        rel="noopener noreferrer"
                        variant="contained"
                        startIcon={<GitHubIcon />}
                        sx={{
                            backgroundColor: '#68835E',
                            color: '#FFEDD2',
                            '&:hover': {
                                backgroundColor: '#5a703f',
                            },
                        }}
                    >
                        GitHub
                    </Button>
                )}
                {url && (
                    <Button
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        sx={{
                            backgroundColor: '#68835E',
                            color: '#FFEDD2',
                            '&:hover': {
                                backgroundColor: '#5a703f',
                            },
                        }}
                    >
                        👩🏻‍💻 사이트 바로가기
                    </Button>
                )}
            </div>
        </div>

        {/* 프로젝트 설명 */}
        <div className="w-full md:w-[48%] flex flex-col items-start">
            <div className="w-full bg-main rounded-lg">
                <div className="mb-4">
                    <p className="text-lg sm:text-md font-bold text-text">프로젝트 설명</p>
                    <p className="text-sm sm:text-md bg-text text-main p-3 rounded-md max-w-[500px] w-full">
                        {description}
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-lg sm:text-md font-bold text-text">배운 점</p>
                    <p className="text-sm sm:text-md bg-text text-main p-3 rounded-md max-w-[500px] w-full">
                        {problem}
                    </p>
                </div>
                <div>
                    <p className="text-lg sm:text-xl font-bold text-text">기술 스택</p>
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                    {techStack.map((tech, index) => (
                        <div key={index} className="w-8 h-8 sm:w-10 sm:h-10">
                            <img src={tech} alt={`tech-${index}`} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default ProjectItem;