import React from 'react';
import { Check, Star, Bot, Coins } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free Daily',
      price: '100',
      period: 'coins/day',
      description: 'Perfect for personal bot deployment',
      features: [
        '100 Free Coins Daily',
        '10 Bot Deployments/Day',
        'Basic ALVIN-MD Features',
        'Community Support',
        'Standard Uptime',
        'Basic Analytics'
      ],
      isPopular: false,
      isFree: true
    },
    {
      name: 'Starter Pack',
      price: '$9.99',
      period: '/month',
      description: 'Ideal for small businesses and frequent users',
      features: [
        '1,500 Bonus Coins Monthly',
        'Unlimited Daily Claims',
        'Premium ALVIN-MD Features',
        'Priority Support',
        '99.9% Uptime Guarantee',
        'Advanced Analytics',
        'Custom Commands',
        'Multi-Platform Support'
      ],
      isPopular: true,
      isFree: false
    },
    {
      name: 'Professional',
      price: '$24.99',
      period: '/month',
      description: 'For businesses with high automation needs',
      features: [
        '5,000 Bonus Coins Monthly',
        'All Starter Features',
        'White-label Solutions',
        'API Access',
        'Custom Integrations',
        'Dedicated Support',
        'Advanced AI Features',
        'Team Management',
        'Custom Branding',
        'Priority Deployment'
      ],
      isPopular: false,
      isFree: false
    }
  ];

  const coinPackages = [
    { coins: 500, price: '$4.99', bonus: 50 },
    { coins: 1200, price: '$9.99', bonus: 200 },
    { coins: 2500, price: '$19.99', bonus: 500 },
    { coins: 5000, price: '$34.99', bonus: 1000 }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple <span className="text-blue-600">Pricing</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Start free with daily coins or choose a plan that fits your bot deployment needs
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 sm:mb-20">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 ${
                plan.isPopular ? 'border-2 border-blue-600 transform scale-105' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{plan.description}</p>
                <div className="flex items-center justify-center mb-4">
                  {plan.isFree ? (
                    <div className="flex items-center space-x-2">
                      <Coins className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                      <span className="text-3xl sm:text-4xl font-bold text-purple-600">{plan.price}</span>
                    </div>
                  ) : (
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                  )}
                  <span className="text-gray-600 ml-2 text-sm sm:text-base">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                plan.isPopular 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : plan.isFree
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                {plan.isFree ? 'Claim Daily Coins' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* Coin Packages */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Need More <span className="text-purple-600">Coins</span>?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">Purchase additional coins for instant bot deployments</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {coinPackages.map((pkg, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full mb-3 sm:mb-4">
                  <Coins className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <div className="text-lg sm:text-xl font-bold text-purple-600 mb-1 sm:mb-2">
                  {pkg.coins.toLocaleString()}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">+ {pkg.bonus} bonus</div>
                <div className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{pkg.price}</div>
                <div className="text-xs sm:text-sm text-gray-600 mb-4">
                  {Math.floor((pkg.coins + pkg.bonus) / 10)} deployments
                </div>
                <button className="w-full bg-purple-600 text-white py-2 sm:py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-xs sm:text-sm">
                  Purchase
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Need a custom solution? We've got you covered.</p>
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;