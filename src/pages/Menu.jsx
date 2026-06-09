import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, RotateCcw, ShoppingBag } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import FoodCard from '../components/FoodCard';
import { menuData } from '../data/menuData';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Pizza', 'Burgers', 'BBQ', 'Fast Food', 'Drinks', 'Desserts'];

  // Filter food items based on category and search query
  const filteredMenu = useMemo(() => {
    return menuData.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleReset = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <AnimatedPage>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-dark-900 border-b border-gold-500/10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">
            Epicurean Selection
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Our <span className="text-gold-gradient">Luxury Menu</span>
          </h1>
          <p className="text-dark-300 max-w-xl mx-auto text-sm">
            Curated and crafted with the finest ingredients from around the world. Filter by categories below.
          </p>
        </div>
      </section>

      {/* Filter and Search controls */}
      <section className="py-12 bg-dark-800 border-b border-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Category selection */}
            <div className="flex flex-wrap items-center justify-center gap-2 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-gold-gradient text-dark-800 border-transparent shadow-md shadow-gold-500/10'
                      : 'bg-dark-750 text-dark-300 border-dark-600 hover:border-gold-500/30 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-dark-400">
                <Search size={16} />
              </span>
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-750 border border-dark-600 hover:border-gold-500/20 focus:border-gold-500 rounded-full pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none transition-all placeholder-dark-400"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Food Cards Grid */}
      <section className="py-20 bg-dark-700 min-h-[500px] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredMenu.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredMenu.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FoodCard item={item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-20 text-center space-y-4 max-w-sm mx-auto"
            >
              <div className="w-16 h-16 bg-gold-500/5 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-400/80">
                <ShoppingBag size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">No Dishes Found</h3>
              <p className="text-dark-300 text-xs leading-relaxed">
                We couldn\'t find any menu items matching your specific keyword or selected category combination.
              </p>
              <button
                onClick={handleReset}
                className="mt-2 text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors flex items-center space-x-2 border border-gold-500/20 px-4 py-2 rounded-lg bg-gold-500/5 hover:bg-gold-500/10 cursor-pointer"
              >
                <RotateCcw size={12} />
                <span>Reset Filters</span>
              </button>
            </motion.div>
          )}

        </div>
      </section>
    </AnimatedPage>
  );
};

export default Menu;
