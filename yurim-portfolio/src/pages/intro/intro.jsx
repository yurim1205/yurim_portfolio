import React from "react";
import HandIcon from "../../components/intro/handIcon";
import IntroText from "../../components/intro/introText";

const IntroSection = () => {
    return (
        <section
            id="main"
            className="flex flex-col items-center justify-center bg-[#294122] text-[#FFEDD2]"
            style={{ minHeight: '100vh' }}
        >
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-48 space-x-6 md:space-y-0 text-center md:text-right">
                <HandIcon />
                <IntroText />
            </div>
        </section>
    );
}

export default IntroSection;