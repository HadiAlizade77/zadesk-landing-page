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
  Play
} from 'lucide-react';

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const mainFeatures = [
    {
      icon: MessageSquare,
      title: 'Omnichannel Support',
      description: 'Manage conversations from email, chat, social media, and phone in one unified inbox.',
      image: 'https://www.chatwoot.com/images/features/omnichannel.png',
      stats: '95% faster response time'
    },
    {
      icon: Bot,
      title: 'AI-Powered Automation',
      description: 'Intelligent chatbots and automated workflows to handle routine inquiries 24/7.',
      image: 'https://www.chatwoot.com/images/features/automation.png',
      stats: '70% reduction in manual work'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into customer satisfaction, agent performance, and business metrics.',
      image: 'https://www.chatwoot.com/images/features/analytics.png',
      stats: '360° customer view'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for your support team with real-time updates.',
      image: 'https://www.chatwoot.com/images/features/collaboration.png',
      stats: '50% faster resolution'
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance and data encryption.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native iOS and Android apps for support on the go.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Multi-language',
      description: 'Support customers in 40+ languages with auto-translation.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock support with intelligent routing.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-second response times with global CDN.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Star,
      title: 'Premium Support',
      description: 'Dedicated success manager and priority support.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % mainFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Powerful Features for Modern Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to deliver exceptional customer experiences, all in one platform.
          </p>
        </div>

        {/* Main Features Showcase */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Feature Navigation */}
            <div className="space-y-6">
              {mainFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                      activeFeature === index
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${
                        activeFeature === index ? 'bg-white/20' : 'bg-blue-100'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          activeFeature === index ? 'text-white' : 'text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className={`${
                          activeFeature === index ? 'text-white/90' : 'text-gray-600'
                        }`}>
                          {feature.description}
                        </p>
                        <div className={`mt-3 text-sm font-semibold ${
                          activeFeature === index ? 'text-white' : 'text-blue-600'
                        }`}>
                          {feature.stats}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Feature Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="bg-white rounded-2xl p-4 shadow-xl">
                  <img
                    src={mainFeatures[activeFeature].image}
                    alt={mainFeatures[activeFeature].title}
                    className="w-full h-auto rounded-xl"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      e.currentTarget.src = `https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center`;
                    }}
                  />
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-float">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-float-delayed">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">&lt;2s</div>
                    <div className="text-sm text-gray-600">Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">
            Everything You Need to Succeed
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transform transition-all duration-300 ${
                    hoveredCard === index ? 'scale-110 rotate-6' : ''
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Learn more
                    <ArrowRight className={`w-4 h-4 ml-2 transform transition-transform ${
                      hoveredCard === index ? 'translate-x-2' : ''
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Customer Support?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using LiLi Desk to deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;