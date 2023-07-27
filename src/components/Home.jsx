import React from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Typed from "react-typed";


const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full mt-0">
                    <h2 className="text-4xl sm:text-7xl font-bold text-blue-400 mt-20">
                        Welcome to my Portfolio! I am <Typed className=""   strings={[' a Student',' a Developer','a Quick Learner','a Tech Enthusiast']}
                    typeSpeed={40} backSpeed={40} loop />
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                    I am Parth Bhattad, an ambitious Electronics and Telecommunication Engineering student with a passion for Full Stack Development. My proficiency in the MERN stack, Next.js, Docker, and data structures & algorithms sets me on a path to create innovative solutions and drive positive change in the world of technology. I am excited about the opportunities that lie ahead and eager to make a significant impact in the tech industry.
                    </p>

                    <div>
                        <a href="https://drive.google.com/file/d/15tc0hw2XHdDGu9QDJuoS8Lw-pFYIRV0E/view?usp=drive_link">
                        <button
                            to="https://drive.google.com/file/d/15tc0hw2XHdDGu9QDJuoS8Lw-pFYIRV0E/view?usp=drive_link"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                              Resume
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight
                                    size={25}
                                    className="ml-1"
                                />
                            </span>
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
