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
        Welcome to my profile! I am a diligent and ambitious individual with a strong educational background. I completed my 10th grade education at Kawthekar Prashala Pandharpur, where I achieved an impressive 87% score. Building on that success, I pursued my higher secondary education at KBP College Pandharpur, where I obtained a commendable 80% in the board examinations.
        </p>

        <br />

        <p className="text-xl">
        Continuing my journey towards higher education, I appeared for the CET (Common Entrance Test) and secured an exceptional 91 percentile, further affirming my academic abilities. Presently, I am in my fourth year at PVGCOET, pursuing Electronics and Telecommunication Engineering.
        </p>
      </div>
    </div>
  );
};

export default About;
