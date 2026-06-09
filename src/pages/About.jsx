import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Eye } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import { chefsData } from '../data/chefsData';

const About = () => {
  // Gallery items using our 6 generated assets
  const galleryItems = [
    { src: '/images/hero_bg.png', alt: 'Monal Luxury Dining Room' },
    { src: '/images/steak.png', alt: 'Seared Prime Ribeye Platter' },
    { src: '/images/pizza.png', alt: 'Truffle & Prosciutto Pizza' },
    { src: '/images/burger.png', alt: 'A5 Wagyu Beef Burger' },
    { src: '/images/cocktail.png', alt: 'Gold Leaf Signature Drink' },
    { src: '/images/dessert.png', alt: 'Melting Tableside Chocolate Sphere' }
  ];

  return (
    <AnimatedPage>
      {/* Banner Header */}
      <section className="relative pt-32 pb-20 bg-dark-900 border-b border-gold-500/10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">
            A Legacy of Excellence
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Our <span className="text-gold-gradient">Story</span>
          </h1>
          <p className="text-dark-300 max-w-xl mx-auto text-sm">
            Discover the passion, values, and master minds that drive Monal Restaurant's culinary heritage.
          </p>
        </div>
      </section>

      {/* Brand History Story */}
      <section className="py-24 bg-dark-800 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Culinary Artistry <br />
              <span className="text-gold-gradient">Since 2006</span>
            </h2>
            <p className="text-dark-300 leading-relaxed text-sm sm:text-base">
              Monal Restaurant was founded with a singular, clear vision: to create a sanctuary where sensory details compile into unforgettable memories. Named after the vibrant Monal bird native to the high Himalayas, our restaurant represents color, rare beauty, and natural majesty.
            </p>
            <p className="text-dark-300 leading-relaxed text-sm sm:text-base">
              What started as a boutique fine-dining experiment has grown into one of the city's most respected culinary destinations. We owe our reputation to our relentless pursuit of detail: our ingredients are imported directly from organic farms, our steaks are dry-aged in custom Himalayan salt chambers, and our pastry team spends hours sculpting edible gold-leaf desserts.
            </p>
            <p className="text-dark-300 leading-relaxed text-sm sm:text-base">
              Our architectural design, featuring modern obsidian wood, copper accents, and moody golden lighting, is custom tailored to slow down time. We welcome you to experience dining at its absolute peak.
            </p>
          </motion.div>

          {/* Side Graphic - Circular Stacked layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border border-gold-500/20 shadow-2xl bg-dark-700 p-2">
              <img
                src="/images/hero_bg.png"
                alt="Dining Room"
                className="w-full h-full object-cover rounded-full filter brightness-[0.8]"
              />
              {/* Spinning gold border */}
              <div className="absolute inset-0 border-2 border-dashed border-gold-500/30 rounded-full animate-[spin_80s_linear_infinite]" />
            </div>
            
            {/* Small absolute overlay badge */}
            <div className="absolute bottom-6 left-6 sm:left-12 glass-panel border border-gold-500/30 p-4 rounded-2xl shadow-xl flex items-center space-x-3">
              <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-500">
                <Heart size={20} />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">15+ Years</p>
                <p className="text-dark-400 text-xs">Of Fine Dining</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Mission & Vision Panels */}
      <section className="py-20 bg-dark-700 border-t border-b border-gold-500/5 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-2xl border border-gold-500/10 hover:border-gold-500/30 transition-all space-y-4"
          >
            <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500">
              <Target size={24} />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Our Mission
            </h3>
            <p className="text-dark-300 text-sm leading-relaxed">
              To present an uncompromised sensory dining experience where pristine culinary ingredients, artistic table layouts, and warm-hearted customer care fuse into an evening of sheer wonder and enjoyment for every patron.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl border border-gold-500/10 hover:border-gold-500/30 transition-all space-y-4"
          >
            <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500">
              <Eye size={24} />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Our Vision
            </h3>
            <p className="text-dark-300 text-sm leading-relaxed">
              To remain a pioneering benchmark in modern hospitality, introducing creative plating paradigms and environment concepts while preserving deep historical cooking traditions.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Chefs Section */}
      <section className="py-24 bg-dark-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 space-y-4"
          >
            <span className="text-gold-500 text-xs font-bold uppercase tracking-widest border-b border-gold-500/50 pb-1">
              Culinary Brains
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Meet Our <span className="text-gold-gradient">Master Chefs</span>
            </h2>
            <p className="text-dark-300 max-w-md mx-auto text-sm">
              The visionary creators blending fire, spice, and plating elements to draft Monal\'s seasonal maps.
            </p>
          </motion.div>

          {/* Chefs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefsData.map((chef, index) => (
              <motion.div
                key={chef.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-panel rounded-2xl overflow-hidden hover:border-gold-500/40 group transition-all text-left flex flex-col h-full shadow-lg"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/5] bg-dark-700">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent opacity-90" />
                </div>
                {/* Info */}
                <div className="p-6 flex-grow space-y-2">
                  <h4 className="font-serif text-lg font-bold text-white">{chef.name}</h4>
                  <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest">{chef.role}</p>
                  <p className="text-dark-300 text-xs leading-relaxed pt-2 border-t border-dark-600">
                    {chef.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-dark-700 border-t border-gold-500/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 space-y-4"
          >
            <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">
              Visual Preview
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Restaurant <span className="text-gold-gradient">Gallery</span>
            </h2>
            <p className="text-dark-300 max-w-md mx-auto text-sm">
              Take a visual tour through Monal Restaurant\'s curated ambiance and exquisite gourmet assemblies.
            </p>
          </motion.div>

          {/* Grid Layout of Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative overflow-hidden rounded-2xl aspect-[4/3] group border border-dark-500 shadow-md cursor-pointer bg-dark-800"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out filter brightness-[0.9] group-hover:brightness-100"
                  loading="lazy"
                />
                {/* Light Overlay */}
                <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="font-serif text-white text-base font-semibold border-b border-gold-500 pb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </AnimatedPage>
  );
};

export default About;
