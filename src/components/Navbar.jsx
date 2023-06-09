import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/resume.pdf";
import { Link } from "react-scroll";

const Navbar = ({ section, setSection }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handlePage = (page) => {
    localStorage.setItem("page", page);
  };

  useEffect(() => {
    const page = localStorage.getItem("page");
    setSection(page);
  }, []);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1 className="text-pink-600 text-4xl font-bold">Sal Jarrar</h1>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li
          className={` ${
            section === "home" ? "inline border-b-4 border-pink-600" : ""
          }`}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            activeClass="active"
            onClick={() => {
              setSection("home");
              handlePage("home");
            }}
          >
            Home
          </Link>
        </li>
        <li
          className={` ${
            section === "about" ? "inline border-b-4 border-pink-600" : ""
          }`}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => {
              setSection("about");
              handlePage("about");
            }}
          >
            About
          </Link>
        </li>
        <li
          className={` ${
            section === "skills" ? "inline border-b-4 border-pink-600" : ""
          }`}
        >
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => {
              setSection("skills");
              handlePage("skills");
            }}
          >
            Skills
          </Link>
        </li>
        <li
          className={` ${
            section === "work" ? "inline border-b-4 border-pink-600" : ""
          }`}
        >
          <Link
            to="work"
            smooth={true}
            duration={500}
            onClick={() => {
              setSection("work");
              handlePage("work");
            }}
          >
            Work
          </Link>
        </li>
        <li
          className={` ${
            section === "contact" ? "inline border-b-4 border-pink-600" : ""
          }`}
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => {
              setSection("contact");
              handlePage("contact");
            }}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/sal-jarrar-570b0410b/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/sal-jarrar"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:jarrarsal@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={resume}
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
