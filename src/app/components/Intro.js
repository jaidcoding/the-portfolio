'use client';

import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import Skills from './Skills';
import CyclingAvatar from './CyclingAvatar';

export default function Intro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-4 sm:mb-8">
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6 text-gray-800">
            Hi, my name is Jaidon
          </h1>
          <div className="text-base sm:text-xl text-gray-600">
            I'm a{' '}
            <TypingAnimation
              strings={[
                'developer',
                'software engineer',
                'frontend developer',
                'problem solver',
                'creative thinker',
                'continuous learner'
              ]}
              className="text-black font-semibold"
            />
          </div>
        </div>
        <CyclingAvatar />
      </div>

      <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-8">
        I have a passion for software development and building things for the web. 
        I thrive on challenges and love to code. My main focus is Frontend Development, 
        but I'm also interested in Backend Development and Mobile Development.
      </p>

      <div id="experience">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">My Experience</h2>
        <ol className="relative border-s ml-2 border-gray-200 dark:border-gray-700">                  
          <li className="mb-4 sm:mb-10 ms-4">
            <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2025 - Present</time>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Audio Engine</h3>
            <p className="mb-2 sm:mb-4 text-xs sm:text-base font-normal text-gray-500 break-words">At Audio Engine, I am responsible for developing the frontend for the company's website. I also work with the company's IT department and customer service team to ensure the website is always up to date and running smoothly.</p>
          </li>
          <li className="ms-4">
            <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2023 - March 2025</time>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Geek Squad Technician</h3>
            <p className="text-xs sm:text-base font-normal text-gray-500 break-words">At Geek Squad, I was responsible for providing technical support to customers. I worked on a variety of devices, including laptops, desktops, and smartphones. I also worked on networking and security issues.</p>
          </li>
        </ol>
      </div>
      <div className="mt-4 sm:mt-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">My Education</h2>
        <ol className="relative border-s ml-2 border-gray-200 dark:border-gray-700">                  
          <li className="mb-4 sm:mb-10 ms-4">
            <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2024 - March 2025</time>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">SMU University Full Stack Development Bootcamp</h3>
            <p className="mb-2 sm:mb-4 text-xs sm:text-base font-normal text-gray-500 break-words">At SMU University, I learned the fundamentals of Full Stack Development. I learned about HTML, CSS, JavaScript, React, Node.js, and MongoDB. We worked on 20+ projects to solidify my understanding of the material.</p>
          </li>
          <li className="ms-4">
            <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2024 - June 2024</time>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">U.S. Army</h3>
            <p className="text-xs sm:text-base font-normal text-gray-500 break-words">In the U.S. Army, I was 15C, Drone Operator. I was also trained in basic infantry skills and weapons handling. I was stationed in Fort Jackson, SC. Unfortunately, due to my back injury, I was medically discharged in June 2024. Now, I am pursuing my passion for software development.</p>
          </li>
        </ol>
      </div>
      <Skills />
    </motion.div>
  );
}