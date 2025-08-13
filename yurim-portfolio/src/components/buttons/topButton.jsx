import React from "react";
import buttonIcon from "/src/assets/topButton.png";

const TopButton = ({ showButton }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        showButton && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-5 right-5 bg-white p-2 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl z-50"
            >
                <img src={buttonIcon} className="w-10 h-10" />
            </button>
        )
    );
}

export default TopButton;