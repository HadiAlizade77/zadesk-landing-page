import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, Play, Users, TrendingUp, Award } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Head of Customer Success',
      company: 'TechFlow Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'LiLi Desk transformed our customer support completely. Response times dropped by 75% and customer satisfaction soared to 98%. The automation features are incredible.',
      rating: 5,
      metrics: { responseTime: '75%', satisfaction: '98%', efficiency: '3x' },
      videoThumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Customer Experience Director',
      company: 'GrowthLabs',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'The multi-channel support and AI-powered insights have revolutionized how we handle customer inquiries. Our team productivity increased by 200%.',
      rating: 5,
      metrics: { productivity: '200%', channels: '8+', automation: '85%' },
      videoThumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Support Team Lead',
      company: 'CloudVision',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Implementation was seamless, and the results were immediate. Our customers love the instant responses, and our team loves the intuitive interface.',
      rating: 5,
      metrics: { implementation: '2 days', satisfaction: '96%', adoption: '100%' },
      videoThumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop'
    }
  ];

  const companies = [
    { name: 'TechFlow', logo: 'https://via.placeholder.com/120x40/3B82F6/FFFFFF?text=TechFlow' },
    { name: 'GrowthLabs', logo: 'https://via.placeholder.com/120x40/10B981/FFFFFF?text=GrowthLabs' },
    { name: 'CloudVision', logo: 'https://via.placeholder.com/120x40/8B5CF6/FFFFFF?text=CloudVision' },
    { name: 'DataSync', logo: 'https://via.placeholder.com/120x40/F59E0B/FFFFFF?text=DataSync' },
    { name: 'InnovateCorp', logo: 'https://via.placeholder.com/120x40/EF4444/FFFFFF?text=InnovateCorp' },
    { name: 'ScaleUp', logo: 'https://via.placeholder.com/120x40/06B6D4/FFFFFF?text=ScaleUp' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-floatReverse"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl animate-morphing"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-slideInDown">
            <Award className="w-4 h-4 mr-2" />
            <span>Trusted by 50,000+ companies worldwide</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slideInUp">
            Loved by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-textGlow"> support teams</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slideInUp delay-200">
            Join thousands of companies that have transformed their customer support with LiLi Desk
          </p>
        </div>

        {/* Main testimonial showcase */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video/Image side */}
            <div className="relative animate-slideInLeft">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <img
                    src={currentTest.videoThumbnail}
                    alt={`${currentTest.company} testimonial`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-md rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating metrics */}
              <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-float border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Customer Satisfaction</p>
                    <p className="text-lg font-bold text-green-600">{currentTest.metrics.satisfaction || '98%'}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-floatReverse border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Team Efficiency</p>
                    <p className="text-lg font-bold text-blue-600">{currentTest.metrics.efficiency || '+200%'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial content */}
            <div className="animate-slideInRight">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-200" />
                <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed mb-8 relative z-10">
                  "{currentTest.content}"
                </blockquote>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={currentTest.avatar}
                  alt={currentTest.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{currentTest.name}</h4>
                  <p className="text-gray-600">{currentTest.role}</p>
                  <p className="text-blue-600 font-semibold">{currentTest.company}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-8">
                {[...Array(currentTest.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-600 ml-2">5.0 out of 5</span>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-blue-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-all duration-200 group"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-all duration-200 group"
                  >
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company logos */}
        <div className="text-center mb-12 animate-slideInUp delay-600">
          <p className="text-gray-500 text-sm font-medium mb-8">TRUSTED BY LEADING COMPANIES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto animate-slideInUp delay-800">
          {[
            { label: 'Customer Satisfaction', value: '98%', icon: Star },
            { label: 'Response Time', value: '< 2min', icon: TrendingUp },
            { label: 'Active Users', value: '50K+', icon: Users },
            { label: 'Messages Handled', value: '2M+', icon: Award }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-slideInUp delay-1000">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to transform your customer support?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of companies already using LiLi Desk to deliver exceptional customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 hover:-translate-y-1">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105 hover:-translate-y-1">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;