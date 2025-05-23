import React from "react";
import { FrontendIcons, ToolsIcons } from "./stackData";

// StackSection: title과 icons를 props로 받아서 각 섹션을 렌더링 함

// title: 섹션 제목
// icons: 아이콘 데이터 배열
const Stack = ({ title, icons }) => (
    <div className="z-10 relative flex flex-col items-center w-full">
        <div className="flex flex-col items-center">
            <div className="mt-12 w-[70%] max-w-[150px] h-[50px] bg-main rounded-full flex flex-col items-center justify-center">
                <p className="text-[20px] sm:text-[20px] text-center text-text font-sans font-thin">
                    {title}
                </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {icons.map((icon) => (  // icons라는 이름으로 props를 받아서 map으로 렌더링
                    <div
                        key={icon.id}
                        className="flex items-start gap-4 bg-black/50 p-4 rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-200 transform hover:scale-105"
                    >
                        {/* 아이콘 이미지 */}
                        <img
                            src={icon.src}
                            alt={icon.alt}
                            className="w-[50px] h-[50px] object-contain"
                        />

                        <div className="flex flex-col items-start w-[200px] h-[85px]">
                            <h4 className="text-lg font-bold text-white">{icon.title}</h4>
                            <p className="text-sm text-gray-300">{icon.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const StackSection = () => {
    return (
        <section
            id="stack"
            className="w-full min-h-screen py-20 mx-auto flex flex-col justify-start items-center relative bg-[#68835E] overflow-hidden"
        >
            <p className="mt-4 text-[64px] sm:text-[48px] text-center font-thin font-abhaya decoration-[2px] text-text">
                TECH STACK
            </p>

            <Stack title="Frontend" icons={FrontendIcons} />
            <br></br>
            <br></br>
            <br></br>
            <Stack title="Tools" icons={ToolsIcons} />
        </section>
    );
};

export default StackSection;