import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgress from './components/ScrollProgress';
import InteractiveStats from './components/InteractiveStats';
import FloatingElements from './components/FloatingElements';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './animations.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedBackground />
      <ScrollProgress />
      <FloatingElements />
      <Header />
      <Hero />
      <InteractiveStats />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;