import React from 'react';
import { Server, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Bot, Coins } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Server className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
              <span className="text-lg sm:text-xl font-bold">ALVINTECH</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Leading WhatsApp bot deployment platform powered by ALVIN-MD technology. Deploy bots instantly with our revolutionary coins system.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Bot Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-blue-400 transition-colors">ALVIN-MD Deployment</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">WhatsApp Bots</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Telegram Bots</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Custom Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Bot Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Bot Tutorials</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">24/7 Support</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">System Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400 text-sm sm:text-base">
              <div className="flex items-center space-x-3">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>+254742943705</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>info@alvintech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 sm:p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center mb-2">
                <Coins className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 mr-2" />
                <span className="font-semibold text-sm sm:text-base">Daily Free Coins</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">Get 100 coins daily - Deploy 10 bots for free!</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              &copy; 2024 ALVINTECH. All rights reserved. Powered by ALVIN-MD Technology.
            </p>
            <div className="flex items-center space-x-4 text-xs sm:text-sm">
              <div className="flex items-center space-x-1 text-green-400">
                <Bot className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>50K+ Bots Deployed</span>
              </div>
              <div className="flex items-center space-x-1 text-purple-400">
                <Coins className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>10M+ Coins Distributed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;