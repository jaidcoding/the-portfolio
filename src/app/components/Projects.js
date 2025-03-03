'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: "Flare48",
    description: "Flare48 is a platform to view news articles from around the world that are only from the past 48 hours. It uses the NewsAPI to get the news data. It also uses the Geocoding API to get the latitude and longitude of the city.",
    link: "https://flare48-6c1x.onrender.com",
    video: "/videos/Flare48Clip.mp4"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that allows you to search for the weather in any city in the world. It uses the OpenWeather API to get the weather data. It also uses the Geocoding API to get the latitude and longitude of the city.",
    link: "https://jaidcoding.github.io/Weather-Dashboard/",
    video: "/videos/WeatherApp.mp4"
  },
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
                <div className="relative aspect-[16/10] w-full bg-neutral-100 flex items-center justify-center">
                  {project.video ? (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-neutral-400 text-base sm:text-lg md:text-xl">No preview available</span>
                    </div>
                  )}
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