import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-mnit-blue text-white py-8">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">NCC MNIT Jaipur</h3>
            <p className="text-sm text-gray-300">
              National Cadet Corps<br />
              Malaviya National Institute of Technology<br />
              Jaipur, Rajasthan - 302017
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/events" className="hover:text-white">Events</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* Social Icons Placeholders */}
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} NCC MNIT Jaipur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
