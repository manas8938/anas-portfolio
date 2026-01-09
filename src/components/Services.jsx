// src/components/Services.jsx
import React from 'react';
import { FaAndroid, FaApple, FaServer, FaPaintBrush, FaGlobe } from 'react-icons/fa';

const services = [
  { 
    icon: FaGlobe, 
    title: "Web Development", 
    desc: "Responsive, scalable web apps with React.js & modern frontend tools.", 
    tags: ["React.js", "HTML", "CSS", "Tailwind CSS", "JavaScript"] 
  },
  { 
    icon: FaAndroid, 
    title: "Android App Development", 
    desc: "High-performance cross-platform apps using Flutter & Dart.", 
    tags: ["Flutter", "Dart"] 
  },
  { 
    icon: FaApple, 
    title: "iOS App Development", 
    desc: "Optimized iOS apps with Flutter for seamless Apple experience.", 
    tags: ["Flutter", "Dart"] 
  },
  { 
    icon: FaServer, 
    title: "Back-End Development", 
    desc: "Secure, scalable REST APIs with NestJS, JWT auth & Docker.", 
    tags: ["NestJS", "Node.js", "PostgreSQL", "MySQL", "Docker", "Swagger"] 
  },
  { 
    icon: FaPaintBrush, 
    title: "UI / UX Design", 
    desc: "Modern, intuitive interface designs using Figma & Tailwind CSS.", 
    tags: ["Figma"] 
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-purple-950/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            What I Can Do?
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Skilled in Full-Stack App & Web Development using React.js, Flutter,
            NestJS, REST APIs, PostgreSQL, MySQL, Docker, and modern UI design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <div className="text-purple-400 mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon size={36} />
                  </div>

                  <h3 className="text-base font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed flex-grow">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center mt-auto">
                    {service.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 group-hover:bg-purple-500/20 group-hover:border-purple-400/50 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;