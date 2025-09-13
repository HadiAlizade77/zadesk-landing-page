import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Shield,
  Zap,
  Globe,
  Award
} from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxX = (mousePosition.x - window.innerWidth / 2) * 0.01;
  const parallaxY = (mousePosition.y - window.innerHeight / 2) * 0.01;

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden flex items-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Morphing Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-morphing"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-morphing" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-morphing" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-particleFloat"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40`}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium mb-8 animate-slideInDown">
              <Award className="w-4 h-4 mr-2 text-yellow-400" />
              <span>Trusted by 50,000+ companies worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block animate-slideInLeft">Transform Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-slideInLeft delay-200 animate-textGlow">
                Customer Support
              </span>
              <span className="block animate-slideInLeft delay-400">Experience</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed animate-slideInUp delay-600">
              Deliver exceptional customer experiences with our AI-powered support platform. 
              Reduce response times by 75% and boost satisfaction to 98%.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-slideInUp delay-800">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-md flex items-center justify-center">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-slideInUp delay-1000">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  98%
                </div>
                <div className="text-gray-400 text-sm">Customer Satisfaction</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  75%
                </div>
                <div className="text-gray-400 text-sm">Faster Response</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  50K+
                </div>
                <div className="text-gray-400 text-sm">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative animate-slideInRight delay-400">
            {/* Main Dashboard */}
            <div 
              className="relative transform transition-transform duration-300 hover:scale-105"
              style={{
                transform: `translate(${parallaxX * 2}px, ${parallaxY * 2}px) scale(1.02)`
              }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.chatwoot.com/images/dashboard.webp"
                  alt="LiLi Desk Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Floating UI Elements */}
            <div 
              className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl animate-float border border-white/20"
              style={{
                transform: `translate(${parallaxX * -1}px, ${parallaxY * -1}px)`
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Response Time</p>
                  <p className="text-2xl font-bold text-green-600">1.2 min</p>
                </div>
              </div>
            </div>

            <div 
              className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl animate-floatReverse border border-white/20"
              style={{
                transform: `translate(${parallaxX * 1.5}px, ${parallaxY * 1.5}px)`
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Active Agents</p>
                  <p className="text-2xl font-bold text-blue-600">24/7</p>
                </div>
              </div>
            </div>

            <div 
              className="absolute top-1/2 -right-12 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-float border border-white/20"
              style={{
                transform: `translate(${parallaxX * -0.5}px, ${parallaxY * -0.5}px)`,
                animationDelay: '1s'
              }}
            >
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-bold text-gray-900">4.9/5</span>
              </div>
            </div>

            {/* Feature Icons */}
            <div className="absolute top-1/4 left-1/4 animate-particleFloat">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="absolute bottom-1/3 right-1/4 animate-particleFloat" style={{ animationDelay: '2s' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Shield className="w-7 h-7 text-white" />
              </div>
            </div>

            <div className="absolute top-1/3 right-1/3 animate-particleFloat" style={{ animationDelay: '3s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;