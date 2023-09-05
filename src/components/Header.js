import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-5">
        <nav className="flex items-center justify-between">
          <div className="text-white font-bold text-lg">My Expense App</div>
          <ul className="flex space-x-4">
            <li>
              <a className="text-white hover:underline" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
