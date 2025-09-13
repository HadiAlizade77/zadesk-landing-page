import React, { useState, useEffect, useRef } from 'react';
import { Users, MessageSquare, Clock, TrendingUp } from 'lucide-react';

const InteractiveStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    customers: 0,
    messages: 0,
    responseTime: 0,
    satisfaction: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = {
    customers: 50000,
    messages: 2500000,
    responseTime: 2,
    satisfaction: 98
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        customers: Math.floor(finalCounts.customers * easeOutQuart),
        messages: Math.floor(finalCounts.messages * easeOutQuart),
        responseTime: Math.floor(finalCounts.responseTime * easeOutQuart),
        satisfaction: Math.floor(finalCounts.satisfaction * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      label: 'Happy Customers',
      value: counts.customers.toLocaleString(),
      suffix: '+',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: MessageSquare,
      label: 'Messages Handled',
      value: counts.messages.toLocaleString(),
      suffix: '+',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Clock,
      label: 'Avg Response Time',
      value: counts.responseTime,
      suffix: ' min',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: TrendingUp,
      label: 'Satisfaction Rate',
      value: counts.satisfaction,
      suffix: '%',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by thousands of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> companies worldwide</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveStats;