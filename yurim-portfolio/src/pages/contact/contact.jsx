import React from "react";
// import githubIcon from "../../assets/footerIcon/github.png";
// import velogIcon from "../../assets/footerIcon/velog.png";
import emailIcon from "../../assets/email.jpg";
import { CONTACT_LINKS } from "../../data/contactData";
import ContactButton from "../../components/buttons/contactButton";

function ContactSection() {
    return (
        <>
            <section
                id="contact"
                className="flex h-screen w-full items-start justify-center bg-text"
            >
                <div className="max-w-6xl w-full px-4 mt-16 items-start">
                    <p className="mt-12 mb-24 text-[64px] sm:text-[48px] text-center font-thin font-abhaya decoration-[2px] text-main">
                        Contact Me
                    </p>

                    <div className="flex flex-col">
                        <div className="flex flex-col items-center gap-6">
                            <img
                                width={300}
                                height={300}
                                src={emailIcon}
                                alt="메일 아이콘"
                                className="animate-bounce"
                            />
                            <h4 className="text-2xl font-semibold underline text-main">eoulim3237@naver.com</h4>
                        </div>

                        <div className="flex flex-wrap gap-8 justify-center mt-4">
                            {CONTACT_LINKS.map(({ href, text }) => (
                                // 렌더링 최적화를 위해 href를 key 값으로 설정
                                <ContactButton key={href} href={href} text={text} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* <footer className="w-full bg-text h-[200px] flex items-center justify-center text-main">
                <div className="container mx-auto flex justify-between w-full items-center">
                    <div className="flex space-x-4">
                        <a href="https://github.com/yurim1205" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="github" className="w-10 h-10" />
                        </a>

                        <a href="https://velog.io/@yurimi/posts" target="_blank" rel="noopener noreferrer">
                            <img src={velogIcon} alt="velog" className="w-10 h-10" />
                        </a>
                    </div>
                    <p className="text-sm text-right">© 2025 LeeYurim. All Rights Reserved.</p>
                </div>
            </footer> */}
        </>
    );
}

export default ContactSection;