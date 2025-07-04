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