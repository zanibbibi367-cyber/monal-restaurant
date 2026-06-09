import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const Navbar = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll handler to transition navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-800/95 backdrop-blur-md border-b border-gold-500/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <UtensilsCrossed className="text-gold-500 group-hover:rotate-45 transition-transform duration-300" size={24} />
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-gold-300 transition-colors">
              MONAL
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-gold-400 ${
                  isActive(link.path) ? 'text-gold-500 font-bold' : 'text-dark-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Call to Action */}
          <div className="hidden md:block">
            <button
              onClick={onOpenModal}
              className="bg-gold-gradient text-dark-800 hover:shadow-md hover:shadow-gold-500/20 active:scale-95 transition-all text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg cursor-pointer"
            >
              Reserve a Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gold-500 p-2 focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-30 md:hidden bg-dark-800/98 backdrop-blur-lg flex flex-col items-center justify-start pt-12 space-y-8 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-semibold uppercase tracking-wider hover:text-gold-400 transition-colors ${
                isActive(link.path) ? 'text-gold-500' : 'text-dark-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenModal();
            }}
            className="bg-gold-gradient text-dark-800 font-bold uppercase tracking-wider px-8 py-3 rounded-lg text-sm shadow-md hover:shadow-gold-500/20 active:scale-95 transition-all cursor-pointer"
          >
            Reserve a Table
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
