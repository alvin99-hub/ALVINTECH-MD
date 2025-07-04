import React from 'react';
import { ArrowRight, Shield, Zap, Globe, Bot, Coins, QrCode } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Welcome to <span className="text-blue-400">ALVINTECH</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed px-4">
            Deploy WhatsApp bots instantly with ALVIN-MD technology. Get 100 free coins daily - only 10 coins per bot deployment!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <button 
              onClick={() => scrollToSection('bot-deploy')}
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Bot className="h-5 w-5" />
              <span>Deploy Bot Now</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={() => scrollToSection('pairing')}
              className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <QrCode className="h-5 w-5" />
              <span>Get Pairing Code</span>
            </button>
            <button 
              onClick={() => scrollToSection('coins')}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Coins className="h-5 w-5" />
              <span>Claim Free Coins</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 px-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full mb-3 sm:mb-4">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
              <p className="text-sm sm:text-base text-gray-300">99.9% uptime guarantee with enterprise-grade security</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 rounded-full mb-3 sm:mb-4">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-sm sm:text-base text-gray-300">Deploy bots in seconds with optimized servers</p>
            </div>
            
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-indigo-600 rounded-full mb-3 sm:mb-4">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-sm sm:text-base text-gray-300">Worldwide data centers for optimal connectivity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;