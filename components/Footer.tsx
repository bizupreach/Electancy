
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-6 brand-font brand-title text-white">ELECTANCY</h3>
            <p className="text-slate-400 max-w-xs mx-auto md:mx-0 leading-relaxed font-light">
              Precision-driven political advisory and media management for leadership that demands results.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-white border-b border-slate-700 pb-2 inline-block">Navigation</h4>
            <ul className="space-y-4 text-slate-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/why-electancy" className="hover:text-white transition-colors">Why Electancy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-white border-b border-slate-700 pb-2 inline-block">Confidentiality</h4>
            <p className="text-slate-400 leading-relaxed font-light">
              All engagements are protected by strict non-disclosure protocols. We maintain absolute discretion for our partners across all jurisdictions.
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 tracking-wider">
          <p>&copy; {new Date().getFullYear()} ELECTANCY. STRATEGIC EXCELLENCE.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-slate-300 font-bold tracking-widest uppercase">Discretion Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
