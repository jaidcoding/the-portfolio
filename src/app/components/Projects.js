'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: "Flare48",
    description: "Flare48 is a platform to view news articles from around the world that are only from the past 48 hours. It uses the NewsAPI to get the news data. It also uses the Geocoding API to get the latitude and longitude of the city.",
    link: "https://flare48.onrender.com",
    video: "/videos/Flare48.mp4"
  },
  {
    title: "Mike's Artwork",
    description: "A website for a friend to showcase his artwork. It uses the React Router to navigate between pages. It also uses the React Icons library to get the icons.",
    link: "https://jaidcoding.github.io/Mike-Artwork/",
    video: "/videos/Mike-Art.mp4"
  },
  {
    title: "React Portfolio",
    description: "A portfolio website built with React. It uses the React Router to navigate between pages. It also uses the React Icons library to get the icons.",
    link: "https://jaidcoding.github.io/Portfolio-React.js/",
    video: "/videos/React-Portfolio.mp4"
  }
  
];

export default function Projects() {
  return (
    <section className="w-full">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-neutral-800 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                <div className="relative w-full aspect-video overflow-hidden">
                  <div className="absolute inset-0 -top-8">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[120%] object-cover"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3 text-neutral-800 group-hover:text-neutral-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-600 mb-3 sm:mb-4">
                    {project.description}
                  </p>
                  <span className="text-base sm:text-lg text-neutral-800 group-hover:text-neutral-600 transition-colors font-medium">
                    View Project →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 