import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white sm:my-6"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-10">
                        About
                    </p>
                </div>

                <p className="text-xl mt-5">
                    <h1 className="font-bold">Engineering Studies:</h1>
                    As a student of Electronics and Telecommunication, I have
                    delved deep into the intricate workings of electronic
                    systems and communication networks. Through my academic
                    journey, I have gained a solid understanding of concepts
                    related to signal processing, circuit design, and
                    communication protocols, empowering me to analyze and solve
                    complex engineering problems effectively.
                </p>

                <br />
                <p className="text-xl mt-5">
                    <h1 className="font-bold">MERN Stack and Beyond:</h1>
                    Alongside my engineering pursuits, I have honed my skills as
                    a Full Stack Developer, specializing in the MERN (MongoDB,
                    Express, React, Node.js) stack. My proficiency in this
                    technology stack allows me to create robust, scalable, and
                    dynamic web applications. Moreover, I have also ventured
                    into Next.js, a powerful framework for building server-side
                    rendered React applications, elevating my ability to deliver
                    seamless user experiences.
                </p>
                <br />
                <p className="text-xl mt-5">
                    <h1 className="font-bold">Containerization with Docker:</h1>
                    In the fast-paced world of software development, I
                    understand the significance of efficient deployment and
                    management of applications. Thus, I have familiarized myself
                    with Docker, a cutting-edge containerization platform,
                    enabling me to package, distribute, and run applications
                    smoothly across various environments.
                </p>
                <br />
                <p className="text-xl mt-5">
                    <h1 className="font-bold">Data Structures and Algorithms:</h1> This
                    proficiency not only fuels my passion for problem-solving
                    but also equips me to optimize application performance,
                    ensuring efficient and reliable solutions.
                </p>
                <br />
                <p className="text-xl mt-5">
                    <h1 className="font-bold">Collaboration and Team Spirit:</h1>
                    Beyond my technical expertise, I deeply value teamwork and collaboration. Working effectively with others is key to delivering successful projects. I am always open to learning from my peers and contributing my best efforts to achieve collective goals.
                </p>
                <br />
            </div>
        </div>
    );
};

export default About;
