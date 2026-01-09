// src/components/Skills.jsx
import React from 'react';
import { FaMobileAlt, FaCode, FaServer, FaPaintBrush, FaGlobe, FaDatabase, FaDocker, FaFire } from 'react-icons/fa';

const techStack = [
  { name: "Flutter", icon: FaMobileAlt, color: "#02569B" },
  { name: "Dart", icon: FaCode, color: "#0175C2" },
  { name: "React.js", icon: FaMobileAlt, color: "#61DAFB" },
  { name: "JavaScript", icon: FaCode, color: "#F7DF1E" },
  { name: "NestJS", icon: FaServer, color: "#E0234E" },
  { name: "Node.js", icon: FaServer, color: "#339933" },
  { name: "MySQL", icon: FaDatabase, color: "#4479A1" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Firebase", icon: FaFire, color: "#FFCA28" },
  { name: "Figma", icon: FaPaintBrush, color: "#F24E1E" },
  { name: "Tailwind", icon: FaGlobe, color: "#06B6D4" },
];

const Skills = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            Tech Stack
          </h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <Icon 
                    className="text-5xl mb-3 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12" 
                    style={{ color: tech.color }}
                  />
                  <h3 className="text-sm font-semibold text-white">{tech.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;