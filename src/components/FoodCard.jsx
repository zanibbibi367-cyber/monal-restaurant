import React from 'react';
import { motion } from 'framer-motion';

const FoodCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="glass-panel rounded-2xl overflow-hidden group hover:border-gold-500/40 transition-colors flex flex-col h-full shadow-lg"
    >
      {/* Image container with zoom hover */}
      <div className="relative overflow-hidden aspect-[4/3] bg-dark-700">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent opacity-80" />

        {/* Tags floating on image */}
        {item.tags && item.tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gold-500 text-dark-800 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="p-5 flex flex-col flex-grow text-left">
        <div className="flex justify-between items-start mb-2 gap-4">
          <h4 className="font-serif text-lg font-semibold text-white group-hover:text-gold-300 transition-colors">
            {item.name}
          </h4>
          <span className="text-gold-400 font-bold font-mono text-lg whitespace-nowrap">
            ${item.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-dark-300 text-sm leading-relaxed mb-6 flex-grow">
          {item.description}
        </p>

        {/* Action Button */}
        <div className="pt-2">
          <button className="w-full border border-gold-500/25 text-gold-400 font-semibold text-xs uppercase tracking-wider py-2 rounded-lg group-hover:bg-gold-gradient group-hover:text-dark-800 group-hover:border-transparent transition-all cursor-pointer">
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
