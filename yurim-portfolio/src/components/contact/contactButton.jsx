import React from "react";

function ContactButton({ href, text }) {
    return (
        <a
            href={href}
            className="mt-8 rounded-full bg-white px-5 py-3 h-12 w-48 text-center
         text-main text-bold shadow-md hover:bg-text hover:scale-115 transition-transform 
         duration-500"
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </a>
    );
}

export default ContactButton;