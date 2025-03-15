import React from "react";
import HtmlIcon from "../../assets/stackIcon/HTML.svg";
import JsIcon from "../../assets/stackIcon/JavaScript.svg";
import CssIcon from "../../assets/stackIcon/CSS.svg";
import TsIcon from "../../assets/stackIcon/TypeScript.svg";
import ReactIcon from "../../assets/stackIcon/React.svg";
import StyledComponentsIcon from "../../assets/stackIcon/StyledComponents.svg";

const Stack = () => {
    return (
        <section
            id="stack"
            className="w-full min-h-screen py-20 mx-auto flex flex-col justify-start items-center relative bg-[#294122] overflow-hidden"
        >
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[95vw] bg-[#FFEDD2] rounded-full"
            ></div>

            <div className="z-10 absolute top-2">
                <p className="text-[96px] sm:text-[64px] text-center font-thin font-abhaya underline decoration-[2px] text-[#294122]">
                    TECH STACK
                </p>

                <div className="mt-8 w-[70%] max-w-[150px] h-[50px] bg-[#68835E] rounded-full flex items-center justify-center pl-6 ml-[-90%]">
                    <p className="text-[24px] sm:text-[24px] text-center text-[#FFEDD2] font-sans">
                        Frontend
                    </p>
                </div>

                <div className="mt-4 flex justify-center items-center space-x-6">
                    <div className="flex justify-center items-start space-x-6">
                        <img src={HtmlIcon} alt="HtmlIcon" className="w-[80px] h-[60px]" />
                        <img src={JsIcon} alt="JsIcon" className="w-[80px] h-[60px]" />
                        <img src={CssIcon} alt="CssIcon" className="w-[80px] h-[60px]" />
                        <img src={TsIcon} alt="TsIcon" className="w-[80px] h-[60px]" />
                        <img src={ReactIcon} alt="ReactIcon" className="w-[80px] h-[60px]" />
                        <img src={StyledComponentsIcon} alt="StyledComponentsIcon" className="w-[80px] h-[60px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stack;