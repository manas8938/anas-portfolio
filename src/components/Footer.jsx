// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-purple-500/20 text-center bg-black">
      <p className="text-gray-400">
        © 2026 Muhammad Anas Nawaz. Crafted with{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          passion
        </span>{' '}
        and{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
          code
        </span>.
      </p>
    </footer>
  );
};

export default Footer;