import React from "react";
import NavLink from "./navLink";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => (
    <nav
        className={`md:hidden bg-[#68835E] w-full transition-all ease-in-out duration-500 overflow-hidden ${isMenuOpen ? "max-h-96" : "max-h-0"
            }`}
    >
        <ul className="flex flex-col items-center space-y-4 p-4 font-semibold">
            {["about", "stack", "project"].map((id) => (
                <NavLink
                    key={id}
                    id={id}
                    section={id.toUpperCase()}
                    activeSection={activeSection}
                    onClick={(id) => {
                        setIsMenuOpen(false);
                        scrollToSection(id);
                    }}
                />
            ))}
        </ul>
    </nav>
);

export default MobileMenu;