// src/components/Contact.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const socials = [
    { 
      icon: FaWhatsapp, 
      label: "WhatsApp", 
      url: "https://wa.me/923029125349", 
      color: "text-green-400", 
      hoverBg: "hover:bg-green-500/20",
      hoverBorder: "hover:border-green-500/50"
    },
    { 
      icon: FaGithub, 
      label: "GitHub", 
      url: "https://github.com/manas8938", 
      color: "text-purple-400", 
      hoverBg: "hover:bg-purple-500/20",
      hoverBorder: "hover:border-purple-500/50"
    },
    { 
      icon: FaInstagram, 
      label: "Instagram", 
      url: "https://instagram.com/_ana7x_/", 
      color: "text-pink-500", 
      hoverBg: "hover:bg-pink-500/20",
      hoverBorder: "hover:border-pink-500/50"
    },
    { 
      icon: FaLinkedin, 
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/muhammad-anas-nawaz-9730a8287", 
      color: "text-cyan-400", 
      hoverBg: "hover:bg-cyan-500/20",
      hoverBorder: "hover:border-cyan-500/50"
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-cyan-950/20 to-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Ready to collaborate? Reach out through your preferred platform!
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {socials.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 ${item.hoverBorder} ${item.hoverBg} transition-all duration-500 hover:scale-110 hover:shadow-2xl`}
                  >
                    <div className={`mb-3 ${item.color} transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500`}>
                      <Icon className="text-5xl mx-auto" />
                    </div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;