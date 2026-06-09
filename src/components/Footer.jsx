import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Clock, MapPin, Phone, Mail, ArrowRight, UtensilsCrossed } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  return (
    <footer className="bg-dark-800 border-t border-gold-500/10 pt-16 pb-8 text-left text-sm text-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Monal */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <UtensilsCrossed className="text-gold-500" size={20} />
            <span className="font-serif text-lg font-bold tracking-wider text-white">
              MONAL
            </span>
          </div>
          <p className="leading-relaxed">
            Experience the zenith of fine dining at Monal. We combine gourmet ingredients, artistic plating, and a breathtaking atmosphere.
          </p>
          <div className="flex space-x-4 pt-2">
            {[
              { icon: <Instagram size={18} />, href: 'https://instagram.com' },
              { icon: <Facebook size={18} />, href: 'https://facebook.com' },
              { icon: <Twitter size={18} />, href: 'https://twitter.com' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-dark-500 flex items-center justify-center text-dark-300 hover:text-gold-400 hover:border-gold-500 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-serif text-white font-semibold uppercase tracking-wider text-xs border-l-2 border-gold-500 pl-2">
            Navigation
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold-400 transition-colors">About Our Story</Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-gold-400 transition-colors">Explore Menu</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Operating Hours */}
        <div className="space-y-4">
          <h4 className="font-serif text-white font-semibold uppercase tracking-wider text-xs border-l-2 border-gold-500 pl-2">
            Opening Hours
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start space-x-2">
              <Clock size={16} className="text-gold-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium">Monday - Friday</p>
                <p className="text-xs text-dark-400">12:00 PM - 11:00 PM</p>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <Clock size={16} className="text-gold-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium">Saturday - Sunday</p>
                <p className="text-xs text-dark-400">10:00 AM - 12:00 AM</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter / Club Monal */}
        <div className="space-y-4">
          <h4 className="font-serif text-white font-semibold uppercase tracking-wider text-xs border-l-2 border-gold-500 pl-2">
            Club Monal
          </h4>
          <p className="leading-relaxed">
            Subscribe to receive exclusive event invitations and seasonal menu updates.
          </p>
          <form onSubmit={handleSubscribe} className="relative mt-2">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-dark-600 border border-dark-500 hover:border-gold-500/20 focus:border-gold-500 rounded-lg px-4 py-2.5 text-white placeholder-dark-400 focus:outline-none transition-all text-xs pr-12"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 bg-gold-gradient text-dark-800 hover:shadow-sm px-3 rounded-md flex items-center justify-center transition-opacity cursor-pointer"
            >
              <ArrowRight size={14} />
            </button>
          </form>
          {subscribed && (
            <span className="text-gold-400 text-xs mt-1 block animate-pulse">
              Thank you! Welcome to Club Monal.
            </span>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-dark-600 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-400">
        <p>© {new Date().getFullYear()} Monal Restaurant. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a href="#privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-gold-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
