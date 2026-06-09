import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Quote, ChevronLeft, ChevronRight, Award, Flame, GlassWater } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import FoodCard from '../components/FoodCard';
import { menuData } from '../data/menuData';

const testimonials = [
  {
    id: 1,
    name: 'Eleanor Vance',
    role: 'Gastronomy Critic',
    quote: 'Monal Restaurant is the epitome of fine dining. The Wagyu burger was absolutely life-changing, and the gold leaf truffle fries were the peak of culinary luxury.',
    rating: 5
  },
  {
    id: 2,
    name: 'Arthur Pendelton',
    role: 'Vibe & Design Architect',
    quote: 'A breathtaking atmosphere. Monal combines stunning modern architecture with culinary perfection. The Ribeye steak was charred to perfection and melt-in-your-mouth tender.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sophia Loren',
    role: 'Patron & Connoisseur',
    quote: 'The tableside chocolate sphere dessert was a masterpiece. Exceptional service, gorgeous presentation, and unforgettable tastes that keep you coming back.',
    rating: 5
  }
];

const Home = ({ onOpenModal }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const featuredDishes = menuData.filter((dish) => dish.featured);

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark-900">
        {/* Background Image with Golden Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero_bg.png')" }}
        >
          {/* Rich gradients to ensure readability and luxury aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-800/80 to-dark-900/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-3 flex items-center space-x-2 border border-gold-500/30 px-3 py-1 rounded-full bg-gold-900/10"
          >
            <Award className="text-gold-500" size={16} />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-400">
              Michelin Starred Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-white leading-tight"
          >
            Where Gastronomy Meets <br />
            <span className="text-gold-gradient">Sensory Perfection</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-dark-200 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-light"
          >
            Monal Restaurant invites you to embark on a journey of luxury, fine ingredients, and stunning aesthetics in the heart of the city.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onOpenModal}
              className="bg-gold-gradient text-dark-800 font-bold uppercase tracking-wider px-8 py-4 rounded-lg text-sm hover:shadow-xl hover:shadow-gold-500/25 active:scale-95 transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Calendar size={16} />
              <span>Reserve a Table</span>
            </button>
            <a
              href="/menu"
              className="border border-gold-500/50 hover:bg-gold-900/20 text-gold-400 font-bold uppercase tracking-wider px-8 py-4 rounded-lg text-sm transition-all flex items-center justify-center cursor-pointer"
            >
              Explore Our Menu
            </a>
          </motion.div>
        </div>

        {/* Bottom shine bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-gradient animate-pulse" />
      </section>

      {/* Welcome & Story Intro Section */}
      <section className="py-24 bg-dark-700 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block border-b-2 border-gold-500 pb-2">
              <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">
                Our Heritage
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              A Culinary Sanctuary Built On <br />
              <span className="text-gold-gradient">Passion & Elegance</span>
            </h2>
            <p className="text-dark-300 text-base leading-relaxed">
              For over two decades, Monal Restaurant has set the standard for luxury dining. We believe that a meal is not just food—it is an art form. Every dish that leaves our kitchen represents hours of sourcing the finest global ingredients, mastering traditional culinary skills, and applying modern innovations.
            </p>
            <p className="text-dark-300 text-base leading-relaxed">
              Step into our dining room and leave the outside world behind. Our team is dedicated to providing an unparalleled sensory experience, from the mood-setting golden lighting to the custom tableware, curated beverage lists, and attentive tableside plating.
            </p>
            <div className="pt-4">
              <a
                href="/about"
                className="text-gold-400 font-bold uppercase tracking-wider text-xs flex items-center space-x-2 hover:text-gold-300 transition-colors"
              >
                <span>Read Full History</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Graphic Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold-gradient rounded-3xl transform rotate-2 blur-md opacity-20" />
            <div className="relative border border-gold-500/20 rounded-3xl overflow-hidden shadow-2xl bg-dark-600/50 p-6 flex flex-col sm:flex-row gap-6">
              
              {/* Feature 1 */}
              <div className="flex-1 space-y-3 p-4 bg-dark-700/50 rounded-2xl border border-dark-500/40 hover:border-gold-500/20 transition-colors">
                <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500">
                  <Flame size={20} />
                </div>
                <h3 className="text-white font-semibold text-lg font-serif">Oakwood Grilling</h3>
                <p className="text-dark-400 text-sm">
                  Meats roasted over aromatic local woods to seal in natural smoky oils.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex-1 space-y-3 p-4 bg-dark-700/50 rounded-2xl border border-dark-500/40 hover:border-gold-500/20 transition-colors">
                <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500">
                  <GlassWater size={20} />
                </div>
                <h3 className="text-white font-semibold text-lg font-serif">Artisan Mixology</h3>
                <p className="text-dark-400 text-sm">
                  Bespoke herbal elixirs infused with gold dust and organic plant extracts.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-24 bg-dark-850 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 space-y-4"
          >
            <span className="text-gold-500 text-xs font-bold uppercase tracking-widest border-b border-gold-500/50 pb-1">
              Curated Selection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Signature <span className="text-gold-gradient">Masterpieces</span>
            </h2>
            <p className="text-dark-300 max-w-xl mx-auto text-sm">
              Discover a handpicked selection of Monal\'s highly celebrated dishes, reflecting our core culinary philosophy of luxury and taste.
            </p>
          </motion.div>

          {/* Grid Layout for Featured Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.slice(0, 3).map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/menu"
              className="inline-block bg-gold-gradient text-dark-800 font-bold uppercase tracking-wider text-xs px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-gold-500/15 transition-all cursor-pointer"
            >
              View Full Dinner Menu
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Slider Section */}
      <section className="py-24 bg-dark-700 relative overflow-hidden border-t border-b border-gold-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-10 flex justify-center">
            <Quote className="text-gold-500/40" size={54} />
          </div>

          <div className="h-64 sm:h-52 relative flex items-center justify-center">
            {testimonials.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: activeTestimonial === index ? 1 : 0,
                  x: activeTestimonial === index ? 0 : (activeTestimonial > index ? -50 : 50),
                  pointerEvents: activeTestimonial === index ? 'auto' : 'none'
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-x-0 top-0 flex flex-col items-center justify-center"
              >
                <p className="font-serif text-lg sm:text-2xl text-white font-medium italic leading-relaxed max-w-3xl">
                  "{test.quote}"
                </p>
                <h4 className="text-gold-400 font-bold uppercase tracking-wider text-xs mt-6">
                  {test.name}
                </h4>
                <span className="text-dark-400 text-xs mt-1">{test.role}</span>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex justify-center items-center space-x-6">
            <button
              onClick={handlePrevTestimonial}
              className="p-2 border border-dark-500 hover:border-gold-500 text-dark-300 hover:text-gold-400 rounded-full transition-all cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                    activeTestimonial === idx ? 'bg-gold-500' : 'bg-dark-500'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNextTestimonial}
              className="p-2 border border-dark-500 hover:border-gold-500 text-dark-300 hover:text-gold-400 rounded-full transition-all cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-dark-800 text-center relative border-b border-gold-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Secure Your <span className="text-gold-gradient">Luxurious Journey</span> Today
          </h2>
          <p className="text-dark-300 max-w-xl mx-auto text-sm leading-relaxed">
            Whether it is an intimate date, a business assembly, or a family celebration, let us craft an evening you will cherish forever.
          </p>
          <button
            onClick={onOpenModal}
            className="inline-block bg-gold-gradient text-dark-800 font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-sm shadow-xl hover:shadow-gold-500/25 active:scale-95 transition-all cursor-pointer"
          >
            Reserve Table Now
          </button>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;
