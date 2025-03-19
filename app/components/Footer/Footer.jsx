import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      {/* Top Section - Logo & Navigation */}
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <img src="/assets/logo.png" alt="VJC INFRA" className="h-16 mb-3" />
          <h1 className="text-2xl font-bold tracking-wider">VJC INFRA</h1>
        </div>

        {/* Navigation Links */}
        <ul className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm tracking-widest uppercase mb-8 text-center">
          <li>
            <a href="/" className="hover:text-gray-400 cursor-pointer">Home</a>
          </li>
          <li>
            <a href="/solutions" className="hover:text-gray-400 cursor-pointer">Solutions</a>
          </li>
          <li>
            <a href="/process" className="hover:text-gray-400 cursor-pointer">Process</a>
          </li>
          <li>
            <a href="/projects" className="hover:text-gray-400 cursor-pointer">Projects</a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400 cursor-pointer">About Us</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400 cursor-pointer">Contact</a>
          </li>
        </ul>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 w-full max-w-full mx-auto my-8"></div>

      {/* Address Section */}
      <div className="text-center text-sm mb-8">
        <p className="font-bold text-lg">VJC INFRA.</p>
        <p>1055 Arthur Ave</p>
        <p>Elk Grove Village, IL 60007</p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 w-full max-w-full mx-auto my-8"></div>

      {/* Bottom Links */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 px-4">
        <p>© 2025 VJC INFRA. All Rights Reserved.</p>
        <a href="/terms-conditions" className="hover:text-gray-400 cursor-pointer">Terms & Conditions</a>
        <a href="https://www.immersivegarden.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 cursor-pointer">
          WEBSITE BY <span className="text-white">IMMERSIVE GARDEN</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
