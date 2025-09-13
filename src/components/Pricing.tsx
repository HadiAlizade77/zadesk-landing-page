import React, { useState } from 'react';
import { Check, Zap, Crown, Star, Plus, Sparkles, Target, Award } from 'lucide-react';
import CheckoutPopup from './CheckoutPopup';

interface CheckoutData {
  priceId: string;
  planName: string;
  planPrice: number;
  billingCycle: 'monthly' | 'annual';
  isAddon: boolean;
}

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);

  const handlePlanCheckout = (plan: typeof plans[0]) => {
    console.log('Button clicked for plan:', plan.name);
    const priceId = isAnnual ? plan.annualPriceId : plan.monthlyPriceId;
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    
    const newCheckoutData = {
      priceId,
      planName: plan.name,
      planPrice: price,
      billingCycle: isAnnual ? 'annual' : 'monthly' as 'monthly' | 'annual',
      isAddon: false
    };
    
    setCheckoutData(newCheckoutData);
    setShowCheckout(true);
    console.log('Checkout popup should now be visible');
  };

  const handleAddonCheckout = (addon: typeof addons[0]) => {
    console.log('Addon button clicked for:', addon.name);
    setCheckoutData({
      priceId: addon.priceId,
      planName: addon.name,
      planPrice: addon.price,
      billingCycle: 'monthly',
      isAddon: true
    });
    setShowCheckout(true);
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
    setCheckoutData(null);
  };

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      monthlyPrice: 15,
      annualPrice: 144,
      monthlyPriceId: 'price_1S6w7N2FauQgnPqa9NJjsiuJ',
      annualPriceId: 'price_1S6w7S2FauQgnPqarwQsT4P1',
      features: [
        'Up to 2 agents',
        '1 inbox',
        'Email & chat support',
        'Limited reporting',
        'Mobile apps',
        'Standard support'
      ],
      popular: false,
      icon: Zap,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      pattern: 'dots'
    },
    {
      name: 'Growth',
      description: 'Best for growing businesses',
      monthlyPrice: 49,
      annualPrice: 470,
      monthlyPriceId: 'price_1S6w7d2FauQgnPqaxTGJ5V8H',
      annualPriceId: 'price_1S6w7i2FauQgnPqaG09v6qMS',
      features: [
        'Up to 5 agents',
        '3 inboxes',
        'Basic reporting',
        'Standard support',
        'Team collaboration',
        'Automation workflows',
        'Custom attributes',
        'API access'
      ],
      popular: true,
      icon: Crown,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      pattern: 'waves'
    },
    {
      name: 'Agency',
      description: 'For agencies and larger teams',
      monthlyPrice: 99,
      annualPrice: 950,
      monthlyPriceId: 'price_1S6w7u2FauQgnPqa4rSns2pz',
      annualPriceId: 'price_1S6w7z2FauQgnPqa7D7pKNRW',
      features: [
        'Up to 15 agents',
        '10 inboxes',
        'Advanced reporting',
        'Priority support',
        'Custom branding',
        'Advanced automation',
        'Integrations',
        'Team management'
      ],
      popular: false,
      icon: Star,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      pattern: 'grid'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 299,
      annualPrice: 2900,
      monthlyPriceId: 'price_1S6w892FauQgnPqaiPQ1c2Dt',
      annualPriceId: 'price_1S6w8F2FauQgnPqa98reQZur',
      features: [
        'Unlimited agents',
        'Unlimited inboxes',
        'Full reporting suite',
        'Priority support',
        'SSO integration',
        'Advanced security',
        'Custom workflows',
        'Dedicated success manager'
      ],
      popular: false,
      icon: Award,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      pattern: 'hexagons'
    }
  ];

  const addons = [
    {
      name: 'Extra Agent',
      price: 8,
      priceId: 'price_1S6w8X2FauQgnPqaWIQzOjQx',
      description: 'Add additional agents to your plan',
      unit: 'per agent/month',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Extra Inbox',
      price: 12,
      priceId: 'price_1S6w8h2FauQgnPqaASl4UkZt',
      description: 'Add more communication channels',
      unit: 'per inbox/month',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      name: 'WhatsApp API',
      price: 29,
      priceId: 'price_1S6w8t2FauQgnPqaf4oPT8q6',
      description: 'Enable WhatsApp Business integration',
      unit: 'per month',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Custom Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="pricing-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-500/20"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#pricing-grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-semibold text-blue-600 mb-6 border border-blue-200/50">
            <Target className="w-4 h-4 mr-2" />
            Transparent Pricing
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
            <span className="block">Choose Your</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Start free, scale as you grow. All plans include core features with no hidden fees or setup costs.
          </p>
          
          {/* Enhanced Pricing Toggle */}
          <div className="flex items-center justify-center mb-16">
            <div className="bg-white rounded-2xl p-2 shadow-xl border border-gray-200/50">
              <div className="flex items-center">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    !isAnnual 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 relative ${
                    isAnnual 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Annual
                  {isAnnual && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-bounce">
                      Save 20%
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-24">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const savings = isAnnual ? (plan.monthlyPrice * 12 - plan.annualPrice) : 0;
            
            return (
              <div
                key={plan.name}
                className={`relative group transform transition-all duration-700 hover:scale-105 ${
                  plan.popular ? 'lg:-translate-y-8' : ''
                } ${hoveredPlan === index ? 'z-20' : 'z-10'}`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-black shadow-xl animate-pulse border-2 border-white">
                      <Sparkles className="w-4 h-4 inline mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Main Card */}
                <div className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 transition-all duration-500 ${
                  plan.popular 
                    ? 'border-yellow-400 shadow-yellow-400/20' 
                    : 'border-gray-200/50 group-hover:border-blue-300'
                }`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-br ${plan.gradient}`}></div>
                  </div>

                  {/* Card Header */}
                  <div className={`relative p-8 bg-gradient-to-br ${plan.gradient} text-white overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <pattern id={`header-pattern-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.3"/>
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill={`url(#header-pattern-${index})`} />
                      </svg>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-3xl font-black mb-3">{plan.name}</h3>
                      <p className="text-white/90 mb-6 text-lg">{plan.description}</p>
                      
                      <div className="flex items-baseline mb-2">
                        <span className="text-5xl font-black">${price}</span>
                        <span className="text-white/80 ml-3 text-lg">/{isAnnual ? 'year' : 'month'}</span>
                      </div>
                      
                      {isAnnual && savings > 0 && (
                        <div className="inline-flex items-center px-3 py-1 bg-green-500/20 rounded-full text-sm text-green-100 font-bold">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Save ${savings} per year
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="relative p-8">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li 
                          key={feature} 
                          className="flex items-center animate-fade-in-up group"
                          style={{ animationDelay: `${(index * 200) + (featureIndex * 100)}ms` }}
                        >
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Direct button click detected');
                        handlePlanCheckout(plan);
                      }}
                      className={`w-full py-5 px-6 rounded-2xl font-black text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl cursor-pointer relative z-10 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white hover:shadow-orange-500/25'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      Get Started Now
                    </button>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 transition-opacity duration-500 pointer-events-none ${
                    hoveredPlan === index ? 'opacity-5' : ''
                  } rounded-3xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Add-ons Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-gray-900 mb-4">
              Powerful Add-ons
            </h3>
            <p className="text-xl text-gray-600">
              Extend your plan with additional features and capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {addons.map((addon, index) => (
              <div
                key={addon.name}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`w-full h-full bg-gradient-to-br ${addon.gradient}`}></div>
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${addon.gradient} flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                    <Plus className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {addon.name}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {addon.description}
                  </p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-black text-gray-900">${addon.price}</span>
                    <span className="text-gray-600 ml-2 text-sm font-medium">{addon.unit}</span>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Addon button click detected');
                      handleAddonCheckout(addon);
                    }}
                    className="w-full bg-gray-100 text-gray-700 py-4 px-6 rounded-2xl hover:bg-gray-200 transition-all duration-300 font-bold cursor-pointer relative z-10 group-hover:bg-blue-50 group-hover:text-blue-600"
                  >
                    Add to Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="relative animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl"></div>
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          
          <div className="relative text-center p-16 text-white">
            <Award className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h3 className="text-4xl lg:text-5xl font-black mb-6">
              Need Help Choosing?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our team of experts is here to help you find the perfect LiLi Desk setup for your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Get Your Account
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Checkout Popup */}
      {checkoutData && (
        <CheckoutPopup
          isOpen={showCheckout}
          onClose={handleCloseCheckout}
          priceId={checkoutData.priceId}
          planName={checkoutData.planName}
          planPrice={checkoutData.planPrice}
          billingCycle={checkoutData.billingCycle}
          isAddon={checkoutData.isAddon}
        />
      )}
    </section>
  );
};

export default Pricing;