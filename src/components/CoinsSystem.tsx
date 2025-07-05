import React, { useState, useEffect } from 'react';
import { Coins, Gift, Calendar, Zap, Clock, Star, Trophy } from 'lucide-react';
import BotManager from './BotManager';

const CoinsSystem = () => {
  const [userCoins, setUserCoins] = useState(85);
  const [dailyClaimed, setDailyClaimed] = useState(false);
  const [timeUntilReset, setTimeUntilReset] = useState('');
  const [claimAnimation, setClaimAnimation] = useState(false);
  const [showBotManager, setShowBotManager] = useState(false);

  useEffect(() => {
    // Calculate time until next reset (midnight)
    const updateTimer = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const diff = tomorrow.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeUntilReset(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClaimCoins = () => {
    if (!dailyClaimed) {
      setClaimAnimation(true);
      setTimeout(() => {
        setUserCoins(prev => prev + 100);
        setDailyClaimed(true);
        setClaimAnimation(false);
      }, 1000);
    }
  };

  const coinPackages = [
    { amount: 500, price: '$4.99', bonus: 50, popular: false },
    { amount: 1200, price: '$9.99', bonus: 200, popular: true },
    { amount: 2500, price: '$19.99', bonus: 500, popular: false },
    { amount: 5000, price: '$34.99', bonus: 1000, popular: false }
  ];

  return (
    <section id="coins" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-purple-600">Coins</span> System
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Earn free coins daily and use them to deploy your WhatsApp bots. Only 10 coins per bot deployment with auto-renewal!
          </p>
        </div>

        {/* User Coins Dashboard */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Current Balance */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  <Coins className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Your Balance</h3>
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">{userCoins.toLocaleString()}</div>
                <p className="text-gray-600 text-sm sm:text-base">ALVIN Coins</p>
              </div>

              {/* Daily Claim */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Daily Reward</h3>
                <button
                  onClick={handleClaimCoins}
                  disabled={dailyClaimed}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                    dailyClaimed 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transform hover:scale-105'
                  } ${claimAnimation ? 'animate-pulse' : ''}`}
                >
                  {dailyClaimed ? 'Claimed Today' : 'Claim 100 Coins'}
                </button>
                {dailyClaimed && (
                  <div className="mt-3 text-sm text-gray-600">
                    <Clock className="h-4 w-4 inline mr-1" />
                    Reset in: {timeUntilReset}
                  </div>
                )}
              </div>

              {/* Usage Stats */}
              <div className="text-center lg:text-right">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Bot Deployment</h3>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">10 Coins</div>
                <p className="text-gray-600 text-sm sm:text-base">per 24 hours</p>
                <div className="mt-2 text-sm text-green-600 font-medium">
                  You can deploy {Math.floor(userCoins / 10)} bots
                </div>
              </div>
            </div>

            {/* Bot Manager Button */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowBotManager(!showBotManager)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center space-x-2 mx-auto"
              >
                <Zap className="h-5 w-5" />
                <span>{showBotManager ? 'Hide' : 'Manage'} Active Bots</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bot Manager */}
        {showBotManager && (
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <BotManager userCoins={userCoins} onCoinsUpdate={setUserCoins} />
          </div>
        )}

        {/* Auto-Renewal Info */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="text-green-600">Auto-Renewal</span> System
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full mb-4">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">24-Hour Cycles</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Bots automatically renew every 24 hours when auto-renewal is enabled.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full mb-4">
                  <Coins className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Smart Coin Usage</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Only renews if you have sufficient coins. No surprise charges.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full mb-4">
                  <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Continuous Operation</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Keep your bots running 24/7 without manual intervention.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Zap className="h-5 w-5 text-green-600 mr-2" />
                How Auto-Renewal Works:
              </h4>
              <ol className="text-gray-700 space-y-2 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">1</span>
                  Bot expires after 24 hours of deployment
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">2</span>
                  System checks if auto-renewal is enabled and coins are available
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">3</span>
                  If conditions are met, 10 coins are deducted and bot gets 24 more hours
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">4</span>
                  You receive a notification confirming the renewal or failure
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Coin Packages */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Need More <span className="text-purple-600">Coins</span>?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">Purchase coin packages to ensure your bots never stop running</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {coinPackages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 ${
                  pkg.popular ? 'border-2 border-purple-600 transform scale-105' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Best Value</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">
                    {pkg.amount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">+ {pkg.bonus} bonus coins</div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{pkg.price}</div>
                  <div className="text-sm text-gray-600 mb-2">
                    {Math.floor((pkg.amount + pkg.bonus) / 10)} bot deployments
                  </div>
                  <div className="text-xs text-green-600 mb-6">
                    ~{Math.floor((pkg.amount + pkg.bonus) / 10)} days of auto-renewal
                  </div>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                    pkg.popular 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Purchase
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              How the <span className="text-purple-600">Coins System</span> Works
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full mb-4">
                  <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Daily Rewards</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Claim 100 free coins every day. Reset at midnight UTC.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full mb-4">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Deploy & Renew</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Use 10 coins to deploy any WhatsApp bot for 24 hours with auto-renewal.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full mb-4">
                  <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Earn More</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Purchase coin packages or complete tasks for bonus coins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinsSystem;