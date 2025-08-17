import React from "react";
import { CONTACT_LINKS } from "../../data/contactData";
import ContactButton from "../../components/buttons/contactButton";
import {motion} from "framer-motion";

function ContactSection() {
    return (
        <>
            <section
                id="contact"
                className="flex h-screen w-full items-start justify-center bg-text"
            >
                <div className="max-w-6xl w-full px-4 mt-16 items-start">
                    <div className="flex flex-col mt-48">
                    <motion.div
                            className="flex flex-col items-center gap-6"
                            initial={{ opacity: 0, y: 30 }}         
                            whileInView={{ opacity: 1, y: 0 }}      
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: false }}
                        >
                        <p className="text-[36px] font-normal text-main mb-12">
                            봐주셔서 감사합니다 :)
                        </p>

                        <h4 className="text-[20px] font-light text-main mb-16 text-center">
                            혼자 사용하는 것이 아닌, <br />
                            함께 사용할 수 있는 코드를 개발해가고 싶습니다. <br />
                        </h4>
                    </motion.div>

                        <div className="flex flex-wrap mb-40 gap-8 justify-center mt-4">
                            {CONTACT_LINKS.map(({ href, text }) => (
                                // 렌더링 최적화를 위해 href를 key 값으로 설정
                                <ContactButton key={href} href={href} text={text} />
                            ))}
                        </div>
                    </div>
                    <p className="flex-col items-center text-sm text-center mt-12">
                        © 2025. Lee Yurim. All rights reserved.
                    </p>
                </div>
            </section>
        </> 
    );
}

export default ContactSection;