import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Smartphone,
  Bot,
  Globe,
  Clock,
  Star,
  ArrowRight,
  Play,
  Sparkles,
  Target,
  Layers
} from 'lucide-react';

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const mainFeatures = [
    {
      icon: MessageSquare,
      title: 'Omnichannel Excellence',
      description: 'Unify all customer touchpoints - email, chat, social media, and phone - into one intelligent command center.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      stats: '95% faster response time',
      gradient: 'from-blue-500 via-purple-500 to-pink-500'
    },
    {
      icon: Bot,
      title: 'AI-Powered Intelligence',
      description: 'Smart automation that learns from every interaction, handling routine inquiries while escalating complex issues seamlessly.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      stats: '70% reduction in manual work',
      gradient: 'from-green-500 via-teal-500 to-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Transform data into actionable insights with real-time dashboards, predictive analytics, and customer journey mapping.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      stats: '360° customer intelligence',
      gradient: 'from-orange-500 via-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Empower your team with real-time collaboration tools, knowledge sharing, and intelligent workload distribution.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      stats: '50% faster resolution',
      gradient: 'from-purple-500 via-indigo-500 to-blue-500'
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance, end-to-end encryption, and advanced threat protection.',
      color: 'from-emerald-500 to-teal-500',
      pattern: 'dots'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Native iOS and Android apps with offline capabilities and push notifications.',
      color: 'from-blue-500 to-cyan-500',
      pattern: 'waves'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Support customers in 40+ languages with AI-powered translation and cultural adaptation.',
      color: 'from-purple-500 to-pink-500',
      pattern: 'grid'
    },
    {
      icon: Clock,
      title: 'Always Available',
      description: '24/7 intelligent routing with smart escalation and global team coordination.',
      color: 'from-orange-500 to-red-500',
      pattern: 'circles'
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Sub-second response times powered by global CDN and edge computing.',
      color: 'from-yellow-500 to-orange-500',
      pattern: 'triangles'
    },
    {
      icon: Star,
      title: 'Premium Experience',
      description: 'Dedicated success manager, priority support, and custom onboarding.',
      color: 'from-indigo-500 to-purple-500',
      pattern: 'hexagons'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % mainFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Custom Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <svg className="absolute top-20 left-20 w-64 h-64 text-blue-500/10" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-semibold text-blue-600 mb-6 border border-blue-200/50">
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful Features for Modern Support
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
            <span className="block">Everything You Need</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              In One Platform
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your customer support with cutting-edge features designed for the modern business landscape.
          </p>
        </div>

        {/* Main Features Showcase with Custom Layout */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Feature Navigation - Custom Design */}
            <div className="lg:col-span-5 space-y-6">
              {mainFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`group relative p-8 rounded-3xl cursor-pointer transition-all duration-700 transform hover:scale-105 ${
                      activeFeature === index
                        ? `bg-gradient-to-r ${feature.gradient} text-white shadow-2xl scale-105`
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-xl border border-gray-100'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                          <pattern id={`pattern-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill={`url(#pattern-${index})`} />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-start space-x-6">
                        <div className={`p-4 rounded-2xl transition-all duration-500 ${
                          activeFeature === index 
                            ? 'bg-white/20 backdrop-blur-sm' 
                            : 'bg-gradient-to-br from-blue-500 to-purple-500'
                        }`}>
                          <Icon className={`w-8 h-8 transition-colors duration-500 ${
                            activeFeature === index ? 'text-white' : 'text-white'
                          }`} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">
                            {feature.title}
                          </h3>
                          <p className={`text-lg leading-relaxed mb-4 ${
                            activeFeature === index ? 'text-white/90' : 'text-gray-600'
                          }`}>
                            {feature.description}
                          </p>
                          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${
                            activeFeature === index 
                              ? 'bg-white/20 text-white' 
                              : 'bg-blue-100 text-blue-600'
                          }`}>
                            <Target className="w-4 h-4 mr-2" />
                            {feature.stats}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Feature Showcase - Enhanced Design */}
            <div className="lg:col-span-7 relative">
              <div className="relative">
                {/* Glowing background */}
                <div className={`absolute -inset-8 bg-gradient-to-r ${mainFeatures[activeFeature].gradient} opacity-20 rounded-3xl blur-2xl animate-pulse`}></div>
                
                {/* Main showcase container */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50">
                  {/* Custom header */}
                  <div className={`bg-gradient-to-r ${mainFeatures[activeFeature].gradient} p-6`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          {(() => {
                            const CurrentIcon = mainFeatures[activeFeature].icon;
                            return <CurrentIcon className="w-6 h-6 text-white" />;
                          })()}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">{mainFeatures[activeFeature].title}</h4>
                          <p className="text-white/80 text-sm">Live Demo</p>
                        </div>
                      </div>
                      <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                        <Play className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Feature content */}
                  <div className="p-8">
                    <img
                      src={mainFeatures[activeFeature].image}
                      alt={mainFeatures[activeFeature].title}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                {/* Floating metrics */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl animate-float border border-gray-200/50">
                  <div className="text-center">
                    <div className="text-3xl font-black text-gray-900 mb-1">99.9%</div>
                    <div className="text-sm text-gray-600 font-medium">Uptime</div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl animate-float-delayed border border-gray-200/50">
                  <div className="text-center">
                    <div className="text-3xl font-black text-gray-900 mb-1">&lt;2s</div>
                    <div className="text-sm text-gray-600 font-medium">Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Grid - Redesigned */}
        <div className="mb-24">
          <h3 className="text-4xl font-black text-center text-gray-900 mb-16 animate-fade-in-up">
            Complete Feature Suite
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 border border-gray-100 overflow-hidden"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-br ${feature.color}`}></div>
                  </div>

                  {/* Icon with custom styling */}
                  <div className={`relative w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transform transition-all duration-500 ${
                    hoveredCard === index ? 'scale-110 rotate-6' : ''
                  } shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-3xl backdrop-blur-sm"></div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-bold group-hover:text-blue-700 transition-colors duration-300">
                    <span>Explore feature</span>
                    <ArrowRight className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${
                      hoveredCard === index ? 'translate-x-2' : ''
                    }`} />
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-500 pointer-events-none ${
                    hoveredCard === index ? 'opacity-5' : ''
                  } rounded-3xl`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl"></div>
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          
          <div className="relative text-center p-16 text-white animate-fade-in-up">
            <div className="mb-8">
              <Layers className="w-16 h-16 mx-auto mb-6 text-white/80" />
              <h3 className="text-4xl lg:text-5xl font-black mb-6">
                Ready to Transform Your Support?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of companies already using LiLi Desk to deliver exceptional customer experiences and drive business growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;