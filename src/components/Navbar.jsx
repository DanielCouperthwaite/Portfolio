
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-black md:sticky top-0 z-10">
      <div className="container mx-auto md:flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 sm:text-xl text-md sm:pr-36 pr-5 md:pr-0">
            Junior Full Stack Developer
          </a>
        </a>
        <nav className="hidden md:block md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-white justify-center">
          <a href="#projects" className="mr-5 hover:text-blue-600">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-blue-600">
            Technical Skills
          </a>
          <a href="#top" className="mr-5 hover:text-blue-600">
            Back to Top
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex md:items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base md:mt-0">
          Contact
         
        </a>
      </div>
    </header>
  );
}