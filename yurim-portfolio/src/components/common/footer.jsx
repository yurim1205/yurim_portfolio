import React from "react";

const Footer = () => (
    <footer className="w-full bg-main text-[#FFEDD2] pb-10">
        <div className="w-[90%] max-w-[1200px] h-[2px] bg-text mx-auto" />

        <div className="w-[90%] max-w-[1200px] mx-auto pt-6 flex flex-col
         sm:flex-row items-center justify-between gap-4 text-sm sm:text-xl
         font-thin">
            <p>© 2026 이유림. All rights reserved.</p>

            <div className="flex items-center gap-8 sm:gap-10">
                <a
                    href="https://github.com/yurim1205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#68835E] transition-colors"
                >
                    GitHub
                </a>
                
                <a
                    href="https://velog.io/@yurimi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#68835E] transition-colors"
                >
                    Velog
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;