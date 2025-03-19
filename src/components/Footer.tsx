import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">The Good Trade</h3>
            <p className="text-sm">
              A resource for sustainable living and conscious consumerism.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/shop" className="hover:underline">Shop</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="text-sm space-y-2">
              <li><Link to="/instagram" className="hover:underline">Instagram</Link></li>
              <li><Link to="/twitter" className="hover:underline">Twitter</Link></li>
              <li><Link to="/facebook" className="hover:underline">Facebook</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          © {new Date().getFullYear()} The Good Trade. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;