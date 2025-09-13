import React, { useState, useEffect } from 'react';
import { Check, Zap, Crown, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        'Up to 5 agents',
        '1,000 conversations/month',
        'Email & chat support',
        'Basic reporting',
        'Mobile apps',
        'API access'
      ],
      popular: false,
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'Best for growing businesses',
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        'Up to 25 agents',
        '10,000 conversations/month',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'Team collaboration',
        'Automation rules',
        'Custom branding'
      ],
      popular: true,
      icon: Crown,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        'Unlimited agents',
        'Unlimited conversations',
        'Dedicated support',
        'Custom reporting',
        'SSO integration',
        'Advanced security',
        'Custom workflows',
        'White-label solution'
      ],
      popular: false,
      icon: Star,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team. All plans include our core features with no hidden fees.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`text-lg font-medium mr-4 transition-colors ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1 transition-all duration-300 hover:shadow-lg"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-lg font-medium ml-4 transition-colors ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="ml-3 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full animate-bounce-in">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const savings = isAnnual ? (plan.monthlyPrice * 12 - plan.annualPrice) : 0;
            
            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  plan.popular ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
                } ${hoveredPlan === index ? 'z-10' : ''}`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card Header */}
                <div className={`p-8 bg-gradient-to-br ${plan.gradient} text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <Icon className="w-12 h-12 mb-4 animate-bounce-in" />
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-white/90 mb-6">{plan.description}</p>
                    
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">${price}</span>
                      <span className="text-white/80 ml-2">/{isAnnual ? 'year' : 'month'}</span>
                    </div>
                    
                    {isAnnual && savings > 0 && (
                      <div className="mt-2 text-sm text-white/90">
                        Save ${savings} per year
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li 
                        key={feature} 
                        className="flex items-center animate-fade-in-up"
                        style={{ animationDelay: `${(index * 200) + (featureIndex * 100)}ms` }}
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}>
                    Get Started
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 transition-opacity duration-300 ${
                  hoveredPlan === index ? 'opacity-5' : ''
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <p className="text-gray-600 mb-6">
            Need a custom solution? We'd love to help you find the perfect fit.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;