import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2, Globe } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-gold-500" size={24} />,
      title: 'Our Location',
      details: ['Monal Hilltop Road, Pir Sohawa', 'Islamabad, 44000, Pakistan']
    },
    {
      icon: <Phone className="text-gold-500" size={24} />,
      title: 'Phone Reservations',
      details: ['+92 (51) 289-8055', '+92 (300) 849-0055']
    },
    {
      icon: <Mail className="text-gold-500" size={24} />,
      title: 'Electronic Mail',
      details: ['reservations@monal.com', 'info@monal.com']
    },
    {
      icon: <Clock className="text-gold-500" size={24} />,
      title: 'Dining Hours',
      details: ['Mon - Fri: 12:00 PM - 11:00 PM', 'Sat - Sun: 10:00 AM - 12:00 AM']
    }
  ];

  return (
    <AnimatedPage>
      {/* Header Banner */}
      <section className="relative pt-32 pb-16 bg-dark-900 border-b border-gold-500/10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">
            Connect With Us
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Contact <span className="text-gold-gradient">Monal</span>
          </h1>
          <p className="text-dark-300 max-w-xl mx-auto text-sm">
            Have general inquiries or wish to collaborate? Reach out to our concierge desk below.
          </p>
        </div>
      </section>

      {/* Info Tiles */}
      <section className="py-16 bg-dark-800 border-b border-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-gold-500/10 text-left space-y-4 hover:border-gold-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-serif text-white font-semibold text-base mb-2">{info.title}</h3>
                  {info.details.map((detail, lineIdx) => (
                    <p key={lineIdx} className="text-dark-300 text-xs leading-relaxed">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-dark-700 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel rounded-3xl p-8 border border-gold-500/15 relative overflow-hidden flex flex-col justify-center"
          >
            {/* Header */}
            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                Send Us A <span className="text-gold-gradient">Message</span>
              </h2>
              <p className="text-dark-300 text-xs">
                We read every message and respond within 24 operational hours.
              </p>
            </div>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={`w-full bg-dark-600 border ${errors.name ? 'border-red-500' : 'border-dark-500 hover:border-gold-500/50'} focus:border-gold-500 rounded-lg px-4 py-2 text-white focus:outline-none transition-all text-xs`}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>
                  )}
                </div>

                {/* Email */}
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
                    className={`w-full bg-dark-600 border ${errors.email ? 'border-red-500' : 'border-dark-500 hover:border-gold-500/50'} focus:border-gold-500 rounded-lg px-4 py-2 text-white focus:outline-none transition-all text-xs`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Catering Request"
                    className={`w-full bg-dark-600 border ${errors.subject ? 'border-red-500' : 'border-dark-500 hover:border-gold-500/50'} focus:border-gold-500 rounded-lg px-4 py-2 text-white focus:outline-none transition-all text-xs`}
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.subject}</span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Write your details here..."
                    className={`w-full bg-dark-600 border ${errors.message ? 'border-red-500' : 'border-dark-500 hover:border-gold-500/50'} focus:border-gold-500 rounded-lg px-4 py-2 text-white focus:outline-none transition-all text-xs resize-none`}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.message}</span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-gradient text-dark-800 font-bold uppercase tracking-wider py-3 rounded-lg hover:shadow-lg hover:shadow-gold-500/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={14} />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success alert */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-400">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Message Transmitted!</h3>
                <p className="text-dark-300 text-xs max-w-xs leading-relaxed">
                  Thank you. Your inquiry has been received. Our concierge team will reach out to you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors border border-gold-500/20 px-4 py-2 rounded-lg bg-gold-500/5"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col space-y-6"
          >
            <div className="glass-panel rounded-3xl overflow-hidden border border-gold-500/15 h-[400px] shadow-2xl relative">
              
              {/* Google Maps Iframe styled to match the dark luxury theme */}
              <iframe
                title="Monal Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13264.444390632662!2d73.0673322!3d33.7839352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe6b7b649d21%3A0xe5a3c0cb93a1cf55!2sThe%20Monal!5e0!3m2!1sen!2s!4v1717800000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) grayscale(20%) contrast(95%) brightness(90%)'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Tag */}
              <div className="absolute top-4 left-4 glass-panel border border-gold-500/30 p-3.5 rounded-xl text-xs flex items-center space-x-2.5 max-w-[280px]">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
                  <Globe size={16} />
                </div>
                <div>
                  <p className="font-serif text-white font-bold">Monal Restaurant</p>
                  <p className="text-dark-400 text-[10px] leading-tight">Margalla Hills, Islamabad, Pakistan</p>
                </div>
              </div>

            </div>

            {/* Social media connections */}
            <div className="glass-panel rounded-2xl p-5 border border-gold-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-dark-300 font-medium text-center sm:text-left">
                Join our social channel for culinary content and events:
              </span>
              <div className="flex space-x-3">
                {['Instagram', 'Facebook', 'YouTube'].map((social) => (
                  <a
                    key={social}
                    href={`https://${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-gold-500/20 px-3.5 py-1.5 rounded-lg text-gold-400 font-bold hover:bg-gold-gradient hover:text-dark-800 hover:border-transparent transition-all"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </section>
    </AnimatedPage>
  );
};

export default Contact;
