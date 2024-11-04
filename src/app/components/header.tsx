// components/Header.js
import React from "react";

function Header() {
  return (
    <header className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center md:px-6 2xl:px-11 py-8">
        <img
          src="/logo-clean.png"
          alt="logo"
          className="flex items-center w-32"
        />
      </div>
    </header>
  );
}

export default Header;
