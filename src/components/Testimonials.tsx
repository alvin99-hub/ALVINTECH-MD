import React from 'react';
import { Star, Quote, Bot, Zap } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'E-commerce Owner',
      content: 'ALVINTECH\'s bot deployment is incredible! I deployed 5 WhatsApp bots for my business in minutes. The daily free coins make it so affordable. Customer engagement increased by 300%!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      bots: 12,
      savings: '$200/month'
    },
    {
      name: 'Michael Chen',
      role: 'Digital Marketing Agency',
      content: 'The ALVIN-MD technology is game-changing. We manage 50+ client bots effortlessly. The analytics and performance insights help us optimize campaigns. Best investment we\'ve made!',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      bots: 47,
      savings: '$800/month'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Small Business Owner',
      content: 'Started with free daily coins and now I\'m a premium user. The bot handles customer inquiries 24/7, processes orders, and sends updates. It\'s like having a full-time assistant!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150',
      bots: 3,
      savings: '$150/month'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Users</span> Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Join thousands of satisfied users who have transformed their business with ALVINTECH bot deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 mr-1" />
                    <span className="text-lg sm:text-xl font-bold text-blue-600">{testimonial.bots}</span>
                  </div>
                  <p className="text-xs text-gray-600">Active Bots</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-1" />
                    <span className="text-lg sm:text-xl font-bold text-green-600">{testimonial.savings}</span>
                  </div>
                  <p className="text-xs text-gray-600">Saved</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Start with 100 free coins daily and deploy your first WhatsApp bot in under 30 seconds
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base">
                Deploy Your First Bot
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-6 sm:px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-semibold text-sm sm:text-base">
                Claim Free Coins
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;