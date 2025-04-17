import React from "react";

const Logo = ({ scrollTo }) => (
    <div
        className="text-xl font-bold cursor-pointer"
        onClick={scrollTo}>
        LeeYurim's Portfolio
    </div>
);

export default Logo;