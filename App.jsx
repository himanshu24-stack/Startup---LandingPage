import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import LaunchingSoon from '@/components/LaunchingSoon';
import EmailSignup from '@/components/EmailSignup';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Launchly - Launch Your Startup Smarter, Not Harder</title>
        <meta name="description" content="Launchly helps you launch your startup with fast product launch tools, built-in analytics, email collection, and secure scalable infrastructure." />
      </Helmet>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <LaunchingSoon />
        <EmailSignup />
        <Testimonials />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;