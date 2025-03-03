'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHome, FaCode, FaAddressCard, FaGraduationCap, FaBriefcase, FaBars } from 'react-icons/fa';
import { useState } from 'react';

const dockItems = [
  {
    name: 'Home',
    icon: FaHome,
    href: '#top',
    color: '#333333'
  },
  {
    name: 'Experience & Education',
    icon: FaGraduationCap,
    href: '#experience',
    color: '#333333'
  },
  {
    name: 'Projects',
    icon: FaCode,
    href: '#projects',
    color: '#333333'
  },
  {
    name: 'Contact',
    icon: FaAddressCard,
    href: '#contact',
    color: '#333333'
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/jaidcoding',
    color: '#333333'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/jaidon-clinton-41692b349/',
    color: '#333333'
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:jaidcoding@gmail.com',
    color: '#333333'
  }
];

export default function Dock() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
    setIsMenuOpen(false);
  };

  const DockItem = ({ item, isMobile = false }) => (
    <motion.a
      key={item.name}
      href={item.href}
      onClick={(e) => scrollToSection(e, item.href)}
      className={`group relative ${isMobile ? '' : 'block mb-2 last:mb-0'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-gray-100 hover:border-gray-300 transition-colors">
        <item.icon className="w-5 h-5 text-gray-900" />
      </div>
      <div className={`absolute ${isMobile ? 'bottom-full left-1/2 -translate-x-1/2 mb-2' : 'left-14 top-1/2 -translate-y-1/2'} bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
        {item.name}
      </div>
    </motion.a>
  );

  const renderDockItems = () => {
    return dockItems.map((item, index) => {
      if (index === 3) { // After Contact icon
        return (
          <div key="divider" className="my-2">
            <div className="h-px bg-gray-200"></div>
          </div>
        );
      }
      return <DockItem key={item.name} item={item} />;
    });
  };

  return (
    <>
      {/* Mobile Dock (Bottom Center) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-x-0 bottom-4 z-50 xl:hidden flex justify-center"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-100">
          <div className="flex items-center justify-center gap-2">
            {dockItems.map((item) => (
              <DockItem key={item.name} item={item} isMobile={true} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Desktop Dock (Left Side) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed left-24 top-[25vh] -translate-y-1/2 flex flex-col gap-2 z-50 hidden xl:flex"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-100">
          {renderDockItems()}
        </div>
      </motion.div>
    </>
  );
} 