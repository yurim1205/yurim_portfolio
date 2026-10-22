import React from "react";

const IntroSection = () => {
    return (
        <section
            id="main"
            className="flex min-h-screen flex-col justify-center bg-[#294122] 
            px-6 text-[#FFEDD2] md:px-16 lg:px-52"
        >
        <h1 className="text-5xl font-semibold leading-tight md:text-8xl lg:text-9xl">
            이유림
        </h1>
        <p className="mt-6 text-base font-normal opacity-70 md:text-xl lg:text-2xl">
            프론트엔드 개발자
        </p>

        <div className="mt-10 flex gap-6 text-sm opacity-70 md:text-base">
            <a href="https://github.com/yurim1205" target="_blank" rel="noopener noreferrer" 
                className="hover:opacity-100 hover:underline">GitHub</a>
            <a href="https://velog.io/@yurimi" target="_blank" rel="noopener noreferrer" 
                className="hover:opacity-100 hover:underline">Velog</a>
            <a href="mailto:eoulim3237@naver.com" 
                className="hover:opacity-100 hover:underline">Email</a>
        </div>
    </section>
    );
}

export default IntroSection;