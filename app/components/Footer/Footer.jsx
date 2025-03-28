import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      {/* Top Section - Logo & Navigation */}
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <img src="/assets/logo-vjc.png" alt="VJC INFRA" className="h-20 w-38 mb-3" />
          
        </div>

        {/* Navigation Links */}
        <ul className="flex   md:grid-cols-6 gap-4 lg:text-lg lg:gap-10 text-gray-400 tracking-widest text-xs mb-8 text-center ">
          <li>
            <a href="/" className="hover:text-gray-600 cursor-pointer ">Home</a>
          </li>
          <li>
            <a href="/solutions" className="hover:text-gray-600 cursor-pointer">Solutions</a>
          </li>
          <li>
            <a href="/process" className="hover:text-gray-600 cursor-pointer">Process</a>
          </li>
          <li>
            <a href="/projects" className="hover:text-gray-600 cursor-pointer">Projects</a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-600 cursor-pointer">About Us</a>
          </li>
          
        </ul>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 w-full max-w-full mx-auto my-8"></div>

      {/* Address Section */}
      <div className="text-center leading-loose tracking-wider text-sm mb-8">
        <p className="font-bold text-lg tracking-widest">VJC Infra Projects Private Limited.</p>
        <p className="tracking-widest">62/A, Sundari Reddy Bhavan, Ground Floor, Vengalrao Nagar, S.R.Nagar,</p>
        <p className="tracking-widest">Hyderabad-500038 Telangana, India.</p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 w-full max-w-full mx-auto my-8"></div>

      {/* Bottom Links */}
      <div className="max-w-7xl leading-loose tracking-wider mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 px-4">
        <p className="tracking-widest">© 2025 VJC INFRA. All Rights Reserved.</p>
        <a href="/terms-conditions" className="hover:text-gray-400 tracking-widest cursor-pointer">Terms & Conditions</a>
        <a href="https://www.immersivegarden.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 cursor-pointer tracking-widest">
          WEBSITE BY <span className="text-white">VJC Infra Projects Private Limited</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
