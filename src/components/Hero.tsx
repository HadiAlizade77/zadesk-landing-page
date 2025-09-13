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
  Award,
  Sparkles
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
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #667eea 0%, #764ba2 100%)
        `
      }}
    >
      {/* Custom Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large geometric shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute top-10 left-10 w-32 h-32 text-white/5" viewBox="0 0 100 100">
            <polygon points="50,0 100,50 50,100 0,50" fill="currentColor" className="animate-spin" style={{ animationDuration: '20s' }} />
          </svg>
          <svg className="absolute top-1/3 right-20 w-24 h-24 text-white/10" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" fill="currentColor" className="animate-pulse" />
          </svg>
          <svg className="absolute bottom-20 left-1/4 w-40 h-40 text-white/5" viewBox="0 0 100 100">
            <rect x="25" y="25" width="50" height="50" fill="currentColor" className="animate-bounce" style={{ animationDuration: '3s' }} />
          </svg>
        </div>

        {/* Floating orbs with custom animations */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
              className="animate-float"
            />
          ))}
        </div>

        {/* Custom mesh gradient overlay */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full"
            style={{
              background: `
                conic-gradient(from 0deg at 50% 50%, 
                  rgba(255,255,255,0.1) 0deg, 
                  transparent 60deg, 
                  rgba(255,255,255,0.05) 120deg, 
                  transparent 180deg, 
                  rgba(255,255,255,0.1) 240deg, 
                  transparent 300deg, 
                  rgba(255,255,255,0.05) 360deg
                )
              `
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - Spans 7 columns */}
          <div className="lg:col-span-7 text-white">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-medium mb-8 animate-slideInDown shadow-2xl">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent font-semibold">
                #1 Customer Support Platform - Trusted by 50,000+ Teams
              </span>
            </div>

            {/* Main Heading with Custom Typography */}
            <div className="mb-8">
              <h1 className="text-6xl lg:text-8xl font-black mb-4 leading-none tracking-tight">
                <span className="block animate-slideInLeft bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Support
                </span>
                <span className="block animate-slideInLeft delay-200 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent relative">
                  Reimagined
                  <div className="absolute -top-4 -right-8 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
                </span>
                <span className="block animate-slideInLeft delay-400 text-white/90 text-4xl lg:text-6xl font-light">
                  for Modern Teams
                </span>
              </h1>
            </div>

            {/* Enhanced Subtitle */}
            <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed animate-slideInUp delay-600 font-light">
              Transform customer conversations into lasting relationships with our 
              <span className="text-yellow-300 font-semibold"> AI-powered platform</span>. 
              Reduce response times by <span className="text-green-300 font-bold">75%</span> and 
              boost satisfaction to <span className="text-blue-300 font-bold">98%</span>.
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-slideInUp delay-800">
              <button className="group relative bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center">
                  <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                  Start Free Trial
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
              
              <button className="group relative border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 backdrop-blur-xl hover:bg-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center">
                  <Play className="mr-3 h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
                  Watch Demo
                </div>
              </button>
            </div>

            {/* Enhanced Stats with Custom Design */}
            <div className="grid grid-cols-3 gap-8 animate-slideInUp delay-1000">
              {[
                { value: '98%', label: 'Customer Satisfaction', icon: Star, color: 'text-yellow-300' },
                { value: '75%', label: 'Faster Response', icon: Zap, color: 'text-green-300' },
                { value: '50K+', label: 'Happy Customers', icon: Users, color: 'text-blue-300' }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-300"></div>
                    <div className="relative w-16 h-16 mx-auto bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Dashboard Mockup - Spans 5 columns */}
          <div className="lg:col-span-5 relative animate-slideInRight delay-400">
            {/* Main Dashboard with Custom Frame */}
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400/20 via-pink-400/20 to-purple-400/20 rounded-3xl blur-2xl animate-pulse"></div>
              
              {/* Dashboard container */}
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700">
                {/* Custom header bar */}
                <div className="bg-gradient-to-r from-white/10 to-white/5 p-4 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-4 text-white/60 text-sm font-medium">LiLi Desk Dashboard</div>
                  </div>
                </div>
                
                {/* Dashboard content */}
                <div className="p-6">
                  <div className="space-y-4">
                    {/* Simulated chat messages */}
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                        <div>
                          <div className="text-white font-medium text-sm">Sarah Johnson</div>
                          <div className="text-white/60 text-xs">2 minutes ago</div>
                        </div>
                      </div>
                      <div className="text-white/80 text-sm">Thanks for the quick response! Issue resolved perfectly.</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"></div>
                        <div>
                          <div className="text-white font-medium text-sm">Mike Chen</div>
                          <div className="text-white/60 text-xs">5 minutes ago</div>
                        </div>
                      </div>
                      <div className="text-white/80 text-sm">Amazing support team! You guys are the best.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI Elements with Custom Styling */}
            <div 
              className="absolute -top-12 -right-12 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl animate-float border border-white/20"
              style={{
                transform: `translate(${parallaxX * -1}px, ${parallaxY * -1}px)`
              }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium">Response Time</p>
                  <p className="text-2xl font-black text-white">1.2 min</p>
                </div>
              </div>
            </div>

            <div 
              className="absolute -bottom-12 -left-12 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl animate-floatReverse border border-white/20"
              style={{
                transform: `translate(${parallaxX * 1.5}px, ${parallaxY * 1.5}px)`
              }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium">Active Agents</p>
                  <p className="text-2xl font-black text-white">24/7</p>
                </div>
              </div>
            </div>

            <div 
              className="absolute top-1/2 -right-16 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl animate-float border border-white/20"
              style={{
                transform: `translate(${parallaxX * -0.5}px, ${parallaxY * -0.5}px)`,
                animationDelay: '1s'
              }}
            >
              <div className="flex items-center space-x-3">
                <Star className="w-6 h-6 text-yellow-400" />
                <div>
                  <span className="text-lg font-black text-white">4.9</span>
                  <span className="text-white/60 text-sm ml-1">/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <div className="text-white/60 text-sm mb-2 font-medium">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;