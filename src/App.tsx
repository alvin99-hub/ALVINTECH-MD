import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BotDeploy from './components/BotDeploy';
import PairingCode from './components/PairingCode';
import CoinsSystem from './components/CoinsSystem';
import Services from './components/Services';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import BuyDrink from './components/BuyDrink';
import AutoBio from './components/AutoBio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BotDeploy />
      <PairingCode />
      <CoinsSystem />
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-purple-600">Auto-Bio</span> Configuration
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Configure your bot with auto-updating bio featuring famous quotes and current date
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <AutoBio />
          </div>
        </div>
      </div>
      <Services />
      <Features />
      <Pricing />
      <Testimonials />
      <BuyDrink />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;