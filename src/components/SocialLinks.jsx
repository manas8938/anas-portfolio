// src/components/SocialLinks.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialLinks = ({ size = "text-2xl", gap = "space-x-4" }) => {
  const socials = [
    { 
      icon: FaWhatsapp, 
      url: "https://wa.me/923029125349", 
      color: "hover:text-green-400",
      label: "WhatsApp"
    },
    { 
      icon: FaGithub, 
      url: "https://github.com/manas8938", 
      color: "hover:text-purple-400",
      label: "GitHub"
    },
    { 
      icon: FaInstagram, 
      url: "https://instagram.com/_ana7x_/", 
      color: "hover:text-pink-500",
      label: "Instagram"
    },
    { 
      icon: FaLinkedin, 
      url: "https://www.linkedin.com/in/muhammad-anas-nawaz-9730a8287", 
      color: "hover:text-cyan-400",
      label: "LinkedIn"
    },
  ];

  return (
    <div className={`flex ${gap} justify-center`}>
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
            aria-label={social.label}
          >
            <Icon className={size} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;