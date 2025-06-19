import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-[#c5c6c7]  shadow-md px-6 md:px-20 pt-16 pb-10 mt-20">
     
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: About */}
        <div>
          <h2 className="text-xl font-bold text-[#66fcf1] mb-4">Prompt<span className='text-red-600'>IQ</span></h2>
          <p className="text-sm leading-relaxed text-gray-400">
            PromptIQ is your AI-powered quiz companion, helping learners, educators, and professionals generate instant, smart quizzes on any topic.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-[#66fcf1] transition">Home</a></li>
            <li><a href="/create" className="hover:text-[#66fcf1] transition">Generate Quiz</a></li>
            <li><a href="/about" className="hover:text-[#66fcf1] transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-[#66fcf1] transition">Contact</a></li>
          </ul>
        </div>

        {/*Follow me */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-6 text-xl">
            <a href="https://github.com/Mursleen-2004" target="_blank" rel="noreferrer" className="hover:text-[#66fcf1]">
              <FaGithub />
            </a>
           
            <a href="https://www.linkedin.com/in/mursleen-bukhari-322a86259/" target="_blank" rel="noreferrer" className="hover:text-[#66fcf1]">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      
      <div className="mt-12 border-t border-[#1f2833] pt-6 text-sm text-white text-center">
        &copy; {new Date().getFullYear()} PromptIQ — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
