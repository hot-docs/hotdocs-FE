// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8" style={{ backgroundColor: '#F5F0CD' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">© 2024 XXXX Corporation</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Contact Us
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;