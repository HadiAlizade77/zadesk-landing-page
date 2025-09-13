import React, { useState } from 'react';
import { Check, Zap, Crown, Star, Plus } from 'lucide-react';
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
      gradient: 'from-blue-500 to-cyan-500'
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
      gradient: 'from-purple-500 to-pink-500'
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
      gradient: 'from-green-500 to-blue-500'
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
      icon: Star,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const addons = [
    {
      name: 'Extra Agent',
      price: 8,
      priceId: 'price_1S6w8X2FauQgnPqaWIQzOjQx',
      description: 'Add additional agents to your plan',
      unit: 'per agent/month'
    },
    {
      name: 'Extra Inbox',
      price: 12,
      priceId: 'price_1S6w8h2FauQgnPqaASl4UkZt',
      description: 'Add more communication channels',
      unit: 'per inbox/month'
    },
    {
      name: 'WhatsApp API',
      price: 29,
      priceId: 'price_1S6w8t2FauQgnPqaf4oPT8q6',
      description: 'Enable WhatsApp Business integration',
      unit: 'per month'
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
            Chatwoot Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect Chatwoot plan for your team. All plans include core features with no hidden fees.
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
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

                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Direct button click detected');
                      handlePlanCheckout(plan);
                    }}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer relative z-10 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}>
                    Get Started
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 transition-opacity duration-300 pointer-events-none ${
                  hoveredPlan === index ? 'opacity-5' : ''
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">
            Add-ons & Extensions
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <div
                key={addon.name}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">{addon.name}</h4>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-gray-900">${addon.price}</span>
                  <span className="text-gray-600 ml-2 text-sm">{addon.unit}</span>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Addon button click detected');
                    handleAddonCheckout(addon);
                  }}
                  className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium cursor-pointer relative z-10"
                >
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <p className="text-gray-600 mb-6">
            Need help choosing the right plan? We'd love to help you find the perfect Chatwoot setup.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Get Your Chatwoot Account
          </button>
          
          {/* Test button for debugging */}
          <button 
            onClick={() => {
              console.log('Test button clicked - forcing popup');
              setCheckoutData({
                priceId: 'test_price_id',
                planName: 'Test Plan',
                planPrice: 99,
                billingCycle: 'monthly',
                isAddon: false
              });
              setShowCheckout(true);
            }}
            className="ml-4 bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            TEST POPUP
          </button>
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
