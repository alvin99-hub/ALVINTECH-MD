import React, { useState, useEffect } from 'react';
import { Menu, X, Server, Phone, Coins } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Server className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            <span className="text-lg sm:text-xl font-bold text-gray-900">ALVINTECH</span>
          </div>
          
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base">
              Home
            </button>
            <button onClick={() => scrollToSection('bot-deploy')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base">
              Deploy Bot
            </button>
            <button onClick={() => scrollToSection('pairing')} className="text-gray-700 hover:text-green-600 transition-colors text-sm xl:text-base">
              Pairing Code
            </button>
            <button onClick={() => scrollToSection('coins')} className="text-gray-700 hover:text-purple-600 transition-colors text-sm xl:text-base">
              Free Coins
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base">
              Services
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base">
              Pricing
            </button>
            <button onClick={() => scrollToSection('buy-drink')} className="text-gray-700 hover:text-orange-600 transition-colors text-sm xl:text-base">
              Buy a Drink
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-xs xl:text-sm text-gray-600">
              <Phone className="h-3 w-3 xl:h-4 xl:w-4" />
              <span>+254742943705</span>
            </div>
            <button 
              onClick={() => scrollToSection('coins')}
              className="hidden sm:flex items-center space-x-1 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg hover:bg-purple-200 transition-colors text-xs xl:text-sm"
            >
              <Coins className="h-3 w-3 xl:h-4 xl:w-4" />
              <span>Free Coins</span>
            </button>
            <button 
              onClick={() => scrollToSection('bot-deploy')}
              className="bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm xl:text-base"
            >
              Deploy Bot
            </button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 text-sm">
                Home
              </button>
              <button onClick={() => scrollToSection('bot-deploy')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 text-sm">
                Deploy Bot
              </button>
              <button onClick={() => scrollToSection('pairing')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 text-sm">
                Pairing Code
              </button>
              <button onClick={() => scrollToSection('coins')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 text-sm">
                Free Coins
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 text-sm">
                Services
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 text-sm">
                Pricing
              </button>
              <button onClick={() => scrollToSection('buy-drink')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 text-sm">
                Buy a Drink
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 text-sm">
                Contact
              </button>
              <div className="px-3 py-2 text-xs text-gray-600 border-t">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-3 w-3" />
                  <span>+254742943705</span>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => scrollToSection('coins')}
                    className="flex items-center space-x-1 bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs"
                  >
                    <Coins className="h-3 w-3" />
                    <span>Free Coins</span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('bot-deploy')}
                    className="bg-blue-600 text-white px-2 py-1 rounded text-xs"
                  >
                    Deploy Bot
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;