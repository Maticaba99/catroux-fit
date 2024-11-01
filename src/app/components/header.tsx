// components/Header.js
import React from "react";

function Header() {
  return (
    <header className="bg-gray-900 text-white py-8">
      <div className=" flex justify-center items-center">
        <img
          src="/logo.png"
          alt="logo"
          className="flex items-center w-32 h-32"
        />
      </div>
    </header>
  );
}

export default Header;
