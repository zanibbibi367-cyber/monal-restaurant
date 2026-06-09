import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, MapPin, Check, Loader2 } from 'lucide-react';

const ReservationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: '2',
    seating: 'standard',
    requests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingId, setBookingId] = useState('');

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setIsSubmitting(false);
      setErrors({});
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '19:00',
        guests: '2',
        seating: 'standard',
        requests: ''
      });
    }
  }, [isOpen]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.date) {
      newErrors.date = 'Reservation date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }

    if (!formData.time) newErrors.time = 'Time slot is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setBookingId(`MONAL-${Math.floor(1000 + Math.random() * 9000)}`);
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl glass-panel border border-gold-500/20 text-left shadow-2xl z-10"
        >
          {/* Decorative Header Border */}
          <div className="h-1.5 w-full bg-gold-gradient" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-dark-300 hover:text-gold-500 hover:bg-dark-600 rounded-full transition-colors"
          >
            <X size={20} />
          </button>

          {!isSuccess ? (
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h3 className="font-serif text-2xl md:text-3xl text-gold-gradient font-semibold">
                  Reserve A Table
                </h3>
                <p className="text-dark-300 text-sm mt-1">
                  Secure your luxury dining experience at Monal Restaurant.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-dark-600 border ${errors.name ? 'border-red-500' : 'border-dark-500 hover:border-gold-500/50'} focus:border-gold-500 rounded-lg px-4 py-2 text-white focus:outline-none transition-all text-sm`}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full bg-dark-600 border ${errors.email ? 'border-red-500' : 'border-dark-500 hover:border-gold-500/50'} focus:border-gold-500 rounded-lg px-4 py-2 text-white focus:outline-none transition-all text-sm`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Phone & Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full bg-dark-600 border ${errors.phone ? 'border-red-500' : 'border-dark-500 hover:border-gold-500/50'} focus:border-gold-500 rounded-lg px-4 py-2 text-white focus:outline-none transition-all text-sm`}
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1">
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-dark-600 border border-dark-500 focus:border-gold-500 rounded-lg px-4 py-2 text-white focus:outline-none transition-all text-sm"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full bg-dark-600 border ${errors.date ? 'border-red-500' : 'border-dark-500 hover:border-gold-500/50'} focus:border-gold-500 rounded-lg px-4 py-2 text-white focus:outline-none transition-all text-sm`}
                    />
                    {errors.date && (
                      <span className="text-red-500 text-xs mt-1 block">{errors.date}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1">
                      Time Slot
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-dark-600 border border-dark-500 focus:border-gold-500 rounded-lg px-4 py-2 text-white focus:outline-none transition-all text-sm"
                    >
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                      <option value="22:00">10:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Seating Preference */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1">
                    Seating Area
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'standard', label: 'Standard Dining' },
                      { id: 'window', label: 'Sky Skyline View' },
                      { id: 'chef', label: "Chef's Table" },
                      { id: 'terrace', label: 'Outdoor Terrace' }
                    ].map((area) => (
                      <label
                        key={area.id}
                        className={`flex items-center space-x-2 border rounded-lg px-3 py-2 cursor-pointer transition-all ${
                          formData.seating === area.id
                            ? 'border-gold-500 bg-gold-900/20 text-gold-200'
                            : 'border-dark-500 bg-dark-600 text-dark-300 hover:border-gold-500/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="seating"
                          value={area.id}
                          checked={formData.seating === area.id}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <span>{area.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="requests"
                    value={formData.requests}
                    onChange={handleChange}
                    rows="2"
                    placeholder="Allergies, anniversaries, dietary restrictions..."
                    className="w-full bg-dark-600 border border-dark-500 hover:border-gold-500/30 focus:border-gold-500 rounded-lg px-4 py-2 text-white focus:outline-none transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-gradient text-dark-800 font-bold uppercase tracking-wider py-3 rounded-lg hover:shadow-lg hover:shadow-gold-500/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      <span>Securing Reservation...</span>
                    </>
                  ) : (
                    <span>Confirm Booking</span>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* Success Screen */
            <div className="p-8 text-center flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 10, delay: 0.1 }}
                className="w-16 h-16 bg-gold-500/10 border border-gold-500/30 rounded-full flex items-center justify-center mb-6 text-gold-500"
              >
                <Check size={36} />
              </motion.div>

              <h3 className="font-serif text-3xl text-gold-gradient font-bold mb-2">
                Booking Confirmed!
              </h3>
              <p className="text-dark-200 text-sm mb-6 max-w-sm">
                We are delighted to host you. A confirmation email with booking details has been dispatched.
              </p>

              {/* Reservation Receipt details */}
              <div className="w-full bg-dark-600/50 border border-gold-500/10 rounded-xl p-4 mb-6 text-sm text-left space-y-3 font-sans">
                <div className="flex justify-between border-b border-dark-500 pb-2">
                  <span className="text-dark-300">Confirmation Code:</span>
                  <span className="font-bold text-gold-400 font-mono">{bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-300 flex items-center gap-1.5"><Calendar size={14} /> Date:</span>
                  <span className="text-white font-medium">{formData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-300 flex items-center gap-1.5"><Clock size={14} /> Time:</span>
                  <span className="text-white font-medium">
                    {formData.time.substring(0, 2) >= 12 
                      ? `${formData.time} PM` 
                      : `${formData.time} AM`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-300 flex items-center gap-1.5"><Users size={14} /> Guests:</span>
                  <span className="text-white font-medium">{formData.guests} Guest(s)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-300 flex items-center gap-1.5"><MapPin size={14} /> Seating:</span>
                  <span className="text-white font-medium capitalize">{formData.seating} Seating</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-dark-600 hover:bg-dark-500 border border-gold-500/20 text-gold-400 font-semibold py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ReservationModal;
