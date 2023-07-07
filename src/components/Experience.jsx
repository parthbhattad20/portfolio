import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import C from "../assets/new images/C.jpeg"
import Cpp from "../assets/new images/Cpp.jpeg"
import DBMS from "../assets/new images/DBMS.jpeg"
import Docker from "../assets/new images/Docker.jpeg"
import DSA from "../assets/new images/DSA.jpeg"
import Express from "../assets/new images/Express.jpeg"
import Figma from "../assets/new images/Figma.jpeg"
import Linux from "../assets/new images/Linux.jpeg"
import Mongodb from "../assets/new images/Mongodb.jpeg"
import Mysql from "../assets/new images/Mysql.jpeg"
import Netlify from "../assets/new images/Netlify.jpeg"
import Node from "../assets/new images/Node.jpeg"
import Python from "../assets/new images/Python.jpeg"
import Type from "../assets/new images/Type.jpeg"



const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-gray-400",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-gray-400",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-gray-400",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-gray-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: C,
      title: "C",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: Cpp,
      title: "CPP",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: DBMS,
      title: "DBMS",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: Docker,
      title: "docker",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: DSA,
      title: "DSA",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: Express,
      title: "Express.js",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: Figma,
      title: "Figma",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: Linux,
      title: "Linux",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: Mongodb,
      title: "MongoDB",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: Mysql,
      title: "mySQL",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: Netlify,
      title: "Netlify",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: Node,
      title: "Node.js",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: Python,
      title: "Python",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: Type,
      title: "Typescript",
      style: "shadow-gray-400",
    }
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skillset
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
