import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
           <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/parth-bhattad-21a38022a/?originalSubdomain=in",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
           <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/parthbhattad20",
    },
    {
      id: 3,
      child: (
        <>
           <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:bhattadparth20@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
           <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/15tc0hw2XHdDGu9QDJuoS8Lw-pFYIRV0E/view?usp=drive_link",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className=" lg:flex flex-col top-[50%] right-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-15 h-14 px-4 hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
