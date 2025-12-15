import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Settings, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Sign Up & Set Up',
    description: 'Create your account in seconds and customize your launch page with our intuitive builder.'
  },
  {
    icon: Settings,
    step: '02',
    title: 'Configure & Customize',
    description: 'Add your branding, set up email collection, and configure analytics to track your progress.'
  },
  {
    icon: TrendingUp,
    step: '03',
    title: 'Launch & Grow',
    description: 'Go live with your product, collect emails, and watch your startup grow with real-time insights.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How it{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              works
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Three simple steps to launch your startup successfully
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30"></div>
                  <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 shadow-xl">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-slate-800 text-purple-400 font-bold text-sm px-3 py-1 rounded-full border border-purple-500/30">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent -translate-x-6"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;