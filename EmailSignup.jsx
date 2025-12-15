import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    const existingEmails = JSON.parse(localStorage.getItem('launchly_emails') || '[]');
    
    if (existingEmails.includes(email)) {
      toast({
        title: "Already Subscribed",
        description: "You're already on our early access list!",
      });
      return;
    }

    existingEmails.push(email);
    localStorage.setItem('launchly_emails', JSON.stringify(existingEmails));

    toast({
      title: "Success! 🎉",
      description: "You're on the list! We'll notify you when we launch.",
    });

    setEmail('');
  };

  return (
    <section id="email-signup" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-purple-500/20 shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get Early Access
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join our exclusive waitlist and be the first to know when we launch. 
              Plus, get special early bird pricing!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-slate-900/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 whitespace-nowrap"
              >
                Notify Me
              </Button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSignup;