'use client';

import Marquee from 'react-fast-marquee';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaNpm } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript, SiExpress, SiPostman } from 'react-icons/si';
import { BiSolidBrain } from 'react-icons/bi';
import { BsTools } from 'react-icons/bs';

// Split skills into two groups
const frontendSkills = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
];

const backendSkills = [
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'npm', icon: FaNpm, color: '#CB3837' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Problem Solving', icon: BiSolidBrain, color: '#6366F1' },
  { name: 'Technical Support', icon: BsTools, color: '#6B7280' },
];

const SkillPill = ({ skill }) => {
  const IconComponent = skill.icon;
  return (
    <div className="flex items-center gap-2 sm:gap-3 bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-sm border border-gray-100 hover:border-neutral-500 hover:shadow-md transition-all whitespace-nowrap">
      <IconComponent 
        className="text-xl sm:text-2xl lg:text-3xl"
        style={{ color: skill.color }}
      />
      <span className="font-medium text-sm sm:text-base lg:text-lg text-gray-800">{skill.name}</span>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="w-full max-w-5xl mx-auto py-6 sm:py-8 md:py-12 lg:py-16 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-gray-800">My Skills & Technologies</h2>
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
        <div className="relative">
          <Marquee
            gradient={true}
            gradientColor={[255, 255, 255]}
            speed={30}
            pauseOnHover={true}
            className="overflow-hidden"
          >
            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 py-2 sm:py-3 md:py-4 lg:py-6">
              {frontendSkills.map((skill, index) => (
                <SkillPill key={index} skill={skill} />
              ))}
            </div>
          </Marquee>
        </div>
        
        <div className="relative">
          <Marquee
            gradient={true}
            gradientColor={[255, 255, 255]}
            speed={25}
            direction="right"
            pauseOnHover={true}
            className="overflow-hidden"
          >
            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 py-2 sm:py-3 md:py-4 lg:py-6">
              {backendSkills.map((skill, index) => (
                <SkillPill key={index} skill={skill} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
} 