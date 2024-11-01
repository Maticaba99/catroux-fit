// components/Header.js
import React from "react";

function Header() {
  return (
    <header className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <img
          src="/logo.png"
          alt="logo"
          className="flex items-center w-40 h-40"
        />
      </div>
    </header>
  );
}

export default Header;
