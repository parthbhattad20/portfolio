import React from "react";

const Education = () => {
    return (
        <div
            name="Education"
            className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white sm:my-6"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-10">
                        Education
                    </p>
                </div>

                <ol class="relative border-l border-gray-200 dark:border-gray-700">
                    <li class="mb-10 ml-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            July 2018
                        </time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Completed 10th from Kawthekar Prashala Pandharpur
                        </h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                       
                        </p>
                      
                    </li>
                    <li class="mb-10 ml-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            July 2020
                        </time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Completed 12th from KBP College pandharpur.
                        </h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                           
                        </p>
                    </li>
                    <li class="ml-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            August 2020
                        </time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Admitted to the PVG's COET Pune .Pursuing B.E in ENTC .
                        </h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                        
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Education;
