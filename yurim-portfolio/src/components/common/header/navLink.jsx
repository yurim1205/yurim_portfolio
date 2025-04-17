import React from "react";

const NavLink = ({ id, section, activeSection, onClick }) => (
    <li>
        <a
            href={`#${id}`}
            onClick={(e) => {
                e.preventDefault();
                onClick(id);
            }}
            className={`hover:underline ${activeSection === id ? "underline" : ""}`}
        >
            {section}
        </a>
    </li>
);

export default NavLink;