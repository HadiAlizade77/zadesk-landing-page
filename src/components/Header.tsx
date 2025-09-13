import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/10 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-slideInLeft">
            <MessageCircle className="h-8 w-8 text-blue-600" />
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>LiLi Desk</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`transition-colors duration-200 ${
              isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
            }`}>Features</a>
            <a href="#pricing" className={`transition-colors duration-200 ${
              isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
            }`}>Pricing</a>
            <a href="#testimonials" className={`transition-colors duration-200 ${
              isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
            }`}>Reviews</a>
            <a href="#faq" className={`transition-colors duration-200 ${
              isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
            }`}>FAQ</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className={`transition-colors duration-200 ${
              isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
            }`}>Sign In</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105">
              Start Free Trial
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slideInDown">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className={`transition-colors duration-200 ${
                isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
              }`}>Features</a>
              <a href="#pricing" className={`transition-colors duration-200 ${
                isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
              }`}>Pricing</a>
              <a href="#testimonials" className={`transition-colors duration-200 ${
                isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
              }`}>Reviews</a>
              <a href="#faq" className={`transition-colors duration-200 ${
                isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
              }`}>FAQ</a>
              <hr className="border-gray-200" />
              <button className={`text-left transition-colors duration-200 ${
                isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
              }`}>Sign In</button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 text-left">
                Start Free Trial
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;