import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Hexagon className="w-8 h-8 text-brand-600 fill-brand-600/10" />
              <span className="text-xl font-display font-bold tracking-tight text-slate-900">
                HexagonTech<span className="text-brand-600">.ai</span>
              </span>
            </Link>
            <p className="text-slate-600 leading-relaxed">
              Empowering global businesses with top-tier offshore technical talent and cutting-edge software solutions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-brand-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-brand-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-brand-600 transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/services/staff-augmentation" className="text-slate-600 hover:text-brand-600 transition-colors">Staff Augmentation</Link></li>
              <li><Link to="/services/data-engineering" className="text-slate-600 hover:text-brand-600 transition-colors">Data Engineering</Link></li>
              <li><Link to="/services/cloud-services" className="text-slate-600 hover:text-brand-600 transition-colors">Cloud Services</Link></li>
              <li><Link to="/services/quality-assurance" className="text-slate-600 hover:text-brand-600 transition-colors">Quality Assurance</Link></li>
              <li><Link to="/services/generative-ai" className="text-slate-600 hover:text-brand-600 transition-colors">Generative AI</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-600 hover:text-brand-600 transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="text-slate-600 hover:text-brand-600 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-slate-600 hover:text-brand-600 transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-brand-600 transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-brand-600 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600">
                <MapPin size={18} className="text-brand-600 shrink-0 mt-1" />
                <span>N. Amberbrooke Ave, Tucson, AZ 85745, USA</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Phone size={18} className="text-brand-600 shrink-0" />
                <span>+1 (347) 265-0079</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Mail size={18} className="text-brand-600 shrink-0" />
                <span>contact@hexagontech.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} HexagonTech.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
