import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform) => {
    toast({
      title: `${platform} Link`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-purple-900/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <motion.div 
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Rocket className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Launchly
              </span>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md">
              Launch your startup smarter, not harder. Build, grow, and scale with confidence using our all-in-one platform.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleSocialClick('Twitter')}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-300" />
              </button>
              <button
                onClick={() => handleSocialClick('LinkedIn')}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-300" />
              </button>
              <button
                onClick={() => handleSocialClick('GitHub')}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-300" />
              </button>
              <button
                onClick={() => handleSocialClick('Instagram')}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-300" />
              </button>
            </div>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Product</span>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-400 hover:text-purple-400 transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-400 hover:text-purple-400 transition-colors text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('email-signup')}
                className="text-gray-400 hover:text-purple-400 transition-colors text-left"
              >
                Pricing
              </button>
            </nav>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Company</span>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => handleSocialClick('About')}
                className="text-gray-400 hover:text-purple-400 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => handleSocialClick('Blog')}
                className="text-gray-400 hover:text-purple-400 transition-colors text-left"
              >
                Blog
              </button>
              <button
                onClick={() => handleSocialClick('Contact')}
                className="text-gray-400 hover:text-purple-400 transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-900/20">
          <p className="text-center text-gray-500">
            © {currentYear} Launchly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;