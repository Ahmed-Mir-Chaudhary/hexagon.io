import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: (scrolled || isOpen) ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: (scrolled || isOpen) ? 'blur(16px)' : 'blur(0px)',
        borderBottomWidth: (scrolled || isOpen) ? '1px' : '0px',
        borderBottomColor: (scrolled || isOpen) ? 'var(--nav-border)' : 'transparent',
        boxShadow: scrolled
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.05)'
          : '0 0px 0px 0px rgba(0, 0, 0, 0)',
      }}
      transition={{ 
        default: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300"
      )}
    >
      <motion.div 
        animate={{ height: scrolled ? 72 : 96 }}
        className="w-full flex items-center shrink-0"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout: 3-column grid */}
          <div className="hidden xl:grid grid-cols-12 items-center gap-4">
            <div className="col-span-3 flex items-center">
              <Link to="/" className="flex items-center gap-2 group shrink-0">
                <div className="relative">
                  <Hexagon className="w-8 h-8 text-brand-600 fill-brand-600/10 group-hover:rotate-90 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-brand-600 rounded-full" />
                  </div>
                </div>
                <span className="text-xl font-display font-bold tracking-tight text-slate-900 whitespace-nowrap">
                  HexagonTech<span className="text-brand-600">.ai</span>
                </span>
              </Link>
            </div>

            <div className="col-span-6 flex items-center justify-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-brand-600 whitespace-nowrap",
                    location.pathname === link.href ? "text-brand-600" : "text-slate-700"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="col-span-3 flex items-center justify-end gap-4">
              <Link
                to="/contact"
                className="px-5 py-2.5 text-sm font-bold text-white bg-brand-600 rounded-full hover:bg-brand-700 transition-all shadow-md hover:shadow-brand-500/25 whitespace-nowrap"
              >
                Book a Call
              </Link>
            </div>
          </div>

          {/* Tablet/Mobile Layout: Flex justify-between */}
          <div className="xl:hidden flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <div className="relative">
                <Hexagon className="w-8 h-8 text-brand-600 fill-brand-600/10 group-hover:rotate-90 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full" />
                </div>
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-slate-900 whitespace-nowrap">
                HexagonTech<span className="text-brand-600">.ai</span>
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <Link
                  to="/contact"
                  className="px-5 py-2.5 text-sm font-bold text-white bg-brand-600 rounded-full hover:bg-brand-700 transition-all shadow-md hover:shadow-brand-500/25 whitespace-nowrap"
                >
                  Book a Call
                </Link>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-200 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "block text-lg font-medium py-2",
                    location.pathname === link.href ? "text-brand-600" : "text-slate-700"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="w-full py-3 text-center font-semibold text-white bg-brand-600 rounded-xl"
                >
                  Book a Call
                </Link>
                <Link
                  to="/contact"
                  className="w-full py-3 text-center font-semibold text-brand-600 border border-brand-200 rounded-xl"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
