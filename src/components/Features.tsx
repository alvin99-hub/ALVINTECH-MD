import React from 'react';
import { CheckCircle, Award, Users, TrendingUp, Bot, Zap } from 'lucide-react';

const Features = () => {
  const stats = [
    { number: '50K+', label: 'Bots Deployed', icon: Bot },
    { number: '99.9%', label: 'Uptime Guarantee', icon: CheckCircle },
    { number: '24/7', label: 'Support Available', icon: Award },
    { number: '100+', label: 'Countries Served', icon: TrendingUp }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">ALVINTECH</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Leading the industry in bot deployment technology and hosting excellence
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full mb-3 sm:mb-4">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Built for Performance, Designed for Scale
            </h3>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              ALVINTECH revolutionizes bot deployment with our cutting-edge ALVIN-MD technology. 
              Deploy WhatsApp bots instantly, manage them effortlessly, and scale your automation 
              with our robust infrastructure designed for the modern digital landscape.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">Instant bot deployment in under 30 seconds</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">Enterprise-grade security with end-to-end encryption</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">100 free coins daily - deploy 10 bots for free</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">Global infrastructure with 99.9% uptime guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">Advanced AI features and custom command support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">Real-time analytics and performance monitoring</span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center space-x-2 text-sm sm:text-base">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Deploy Your First Bot</span>
              </button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <img 
              src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Modern bot deployment infrastructure" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 rounded-lg"></div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 sm:p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">10s</div>
                  <div className="text-xs text-gray-600">Deploy Time</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 sm:p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-600">Active Bots</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;