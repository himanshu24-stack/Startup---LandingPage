import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Founder, TechStart',
    image: 'Professional woman entrepreneur working on laptop in modern office',
    content: 'Launchly helped us go from idea to launch in just 2 weeks. The built-in analytics and email tools saved us thousands in third-party integrations.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CEO, GrowthLabs',
    image: 'Asian businessman presenting startup pitch to investors',
    content: 'The fastest way to validate your startup idea. We collected 500 emails in our first week and the analytics dashboard gave us invaluable insights.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Co-founder, InnovateCo',
    image: 'Young female founder celebrating successful product launch',
    content: 'As a non-technical founder, Launchly was a game-changer. I was able to create a professional launch page without writing a single line of code.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Loved by{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              founders
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See what successful founders are saying about Launchly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-purple-400 mb-4 opacity-50" />

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  className="w-12 h-12 rounded-full border-2 border-purple-500/30"
                  alt={`${testimonial.name} profile picture`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;