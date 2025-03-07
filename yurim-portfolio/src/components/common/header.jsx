import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#294122] text-[#FFEDD2] p-4 w-full">
      <div className="flex justify-between items-center mx-auto">
        <div className="text-lg font-bold">
          LeeYurim's portfolio
        </div>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#stack" className="hover:underline">Stack</a>
            </li>
            <li>
              <a href="#project" className="hover:underline">Project</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
