// src/components/Hero.jsx
import React from 'react';
import SocialLinks from './SocialLinks';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: '1s' }}
      ></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div className="text-center md:text-left space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-sm font-medium backdrop-blur-sm">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text animate-gradient">
                M. Anas Nawaz
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Full-Stack Developer
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Crafting scalable Mobile & Web Applications with cutting-edge Technologies like{' '}
              <span className="text-purple-400 font-semibold">Frontend</span>,{' '}
              <span className="text-cyan-400 font-semibold">Backend</span>,{' '}
              <span className="text-pink-400 font-semibold">Database</span>, and Modern UI/UX principles.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 pt-4">
              <a
                href="/Muhammad_Anas_Nawaz_Resume.pdf"
                download
                className="group px-8 py-4 rounded-full font-bold bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 inline-flex items-center shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105"
              >
                <FaDownload className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
              <SocialLinks size="text-2xl" gap="space-x-5" />
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              {/* Subtle Professional Glow Effect */}
              
              {/* Outer soft glow - reduced */}
              <div className="absolute -inset-5 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
              
              {/* Inner glow - subtle */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-purple-600/25 to-cyan-600/25 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
              
              {/* Rotating gradient ring - brand colors */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-600 rounded-full blur opacity-60 group-hover:opacity-90 animate-spin-slow"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-1 shadow-xl shadow-purple-500/40 group-hover:shadow-cyan-500/50 transform group-hover:scale-105 transition-all duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <img
                    src="/assets/anasProfile.jpeg"
                    alt="M. Anas Nawaz"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;