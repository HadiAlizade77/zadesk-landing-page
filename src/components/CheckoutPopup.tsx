import React, { useState } from 'react';
import { X, Loader, CreditCard } from 'lucide-react';

interface CheckoutPopupProps {
  isOpen: boolean;
  onClose: () => void;
  priceId: string;
  planName?: string;
  planPrice?: number;
  billingCycle?: 'monthly' | 'annual';
  isAddon?: boolean;
}

interface CustomerData {
  name: string;
  email: string;
  phone: string;
}

const CheckoutPopup: React.FC<CheckoutPopupProps> = ({
  isOpen,
  onClose,
  priceId,
  planName,
  planPrice,
  billingCycle = 'monthly',
  isAddon = false
}) => {  
  const [customerData, setCustomerData] = useState<CustomerData>({
    name: '',
    email: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<CustomerData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<CustomerData> = {};

    if (!customerData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!customerData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!customerData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-+()]+$/.test(customerData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof CustomerData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomerData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('https://n8n.lilidesk.com/webhook/get-checkout-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: customerData.name,
          email: customerData.email,
          phoneNumber: customerData.phone,
          priceId: priceId
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.url) {
        // Redirect to Stripe checkout
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received from API');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('An error occurred while creating your checkout session. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      setCustomerData({ name: '', email: '', phone: '' });
      setErrors({});
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  console.log('CheckoutPopup is rendering with data:', { isOpen, planName, planPrice, priceId });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4" onClick={handleClose}>
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl relative">
          <button
            onClick={handleClose}
            disabled={isLoading}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors disabled:opacity-50"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center mb-2">
            <CreditCard className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">Complete Your Purchase</h2>
          </div>
          
          {planName && (
            <div className="bg-white/20 rounded-lg p-3 mt-4">
              <div className="text-sm opacity-90">You're purchasing:</div>
              <div className="font-semibold text-lg">{planName}</div>
              {planPrice && (
                <div className="text-sm opacity-90">
                  ${planPrice}/{billingCycle === 'annual' ? 'year' : 'month'}
                  {isAddon && ' (Add-on)'}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="text-center text-gray-600 mb-6">
            Please provide your details to proceed to secure checkout
          </div>

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              value={customerData.name}
              onChange={handleInputChange('name')}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
              disabled={isLoading}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={customerData.email}
              onChange={handleInputChange('email')}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Enter your email address"
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              value={customerData.phone}
              onChange={handleInputChange('phone')}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Enter your phone number"
              disabled={isLoading}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              disabled={isLoading}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 font-medium flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                'Proceed to Checkout'
              )}
            </button>
          </div>

          <div className="text-xs text-gray-500 text-center pt-2">
            You'll be redirected to Stripe's secure checkout page
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPopup;