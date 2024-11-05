import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
        <img
          src="/logo-clean-new.png"
          alt="logo"
          className="flex items-center w-32"
        />
        </div>
      
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
