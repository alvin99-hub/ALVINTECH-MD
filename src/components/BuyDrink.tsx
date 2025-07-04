import React, { useState } from 'react';
import { Coffee, Heart, Gift, Copy, CheckCircle, Smartphone, Star, Zap } from 'lucide-react';

const BuyDrink = () => {
  const [copied, setCopied] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const mpesaNumber = '+254740768982';

  const drinkOptions = [
    { amount: 20, drink: '☕ Coffee', description: 'A simple coffee to keep coding' },
    { amount: 50, drink: '🥤 Energy Drink', description: 'Boost for late-night development', popular: true },
    { amount: 100, drink: '🍕 Pizza Slice', description: 'Fuel for intensive coding sessions' },
    { amount: 200, drink: '🍔 Full Meal', description: 'A hearty meal for the dev team' },
    { amount: 500, drink: '🎉 Team Celebration', description: 'Celebrate new features with the team' }
  ];

  const copyMpesaNumber = async () => {
    try {
      await navigator.clipboard.writeText(mpesaNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = mpesaNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="buy-drink" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-orange-600 rounded-full mb-6">
            <Coffee className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Buy <span className="text-orange-600">ALVIN-MD</span> a Drink
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Love using ALVIN-MD? Support the development by buying the team a drink! Every contribution helps us improve and add new features.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Drink Selection */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Gift className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600 mr-3" />
                Choose Your Treat
              </h3>
              
              <div className="space-y-4">
                {drinkOptions.map((option, index) => (
                  <div 
                    key={index}
                    className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedAmount === option.amount 
                        ? 'border-orange-600 bg-orange-50' 
                        : 'border-gray-200 hover:border-orange-300'
                    } ${option.popular ? 'ring-2 ring-orange-200' : ''}`}
                    onClick={() => setSelectedAmount(option.amount)}
                  >
                    {option.popular && (
                      <div className="absolute -top-2 -right-2">
                        <div className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-current" />
                          <span>Popular</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-xl">{option.drink}</span>
                          <span className="text-lg font-bold text-orange-600">KSh {option.amount}</span>
                        </div>
                        <p className="text-sm text-gray-600">{option.description}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 ml-4 ${
                        selectedAmount === option.amount 
                          ? 'border-orange-600 bg-orange-600' 
                          : 'border-gray-300'
                      }`}>
                        {selectedAmount === option.amount && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <Heart className="h-5 w-5 text-red-500 mr-2" />
                  <h4 className="font-semibold text-gray-900">Why Support ALVIN-MD?</h4>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Helps fund new bot features and improvements</li>
                  <li>• Supports the development team's hard work</li>
                  <li>• Keeps the service running smoothly</li>
                  <li>• Shows appreciation for free daily coins</li>
                </ul>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 mr-3" />
                M-Pesa Payment
              </h3>

              {/* Selected Amount Display */}
              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mb-6 text-center">
                <div className="text-sm text-gray-600 mb-2">You're buying:</div>
                <div className="text-2xl font-bold text-orange-600 mb-2">
                  {drinkOptions.find(option => option.amount === selectedAmount)?.drink}
                </div>
                <div className="text-3xl font-bold text-gray-900">KSh {selectedAmount}</div>
              </div>

              {/* M-Pesa Instructions */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    M-Pesa Number
                  </label>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-4 py-3">
                      <span className="font-mono text-lg font-semibold text-gray-900">{mpesaNumber}</span>
                    </div>
                    <button
                      onClick={copyMpesaNumber}
                      className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                    >
                      <Copy className="h-4 w-4" />
                      <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Step by Step Instructions */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    How to Send M-Pesa:
                  </h4>
                  <ol className="text-green-800 text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">1</span>
                      Open M-Pesa on your phone
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">2</span>
                      Select "Send Money"
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">3</span>
                      Enter number: <span className="font-mono font-semibold">{mpesaNumber}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">4</span>
                      Enter amount: <span className="font-semibold">KSh {selectedAmount}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">5</span>
                      Add message: "ALVIN-MD Drink" (optional)
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">6</span>
                      Confirm and send
                    </li>
                  </ol>
                </div>

                {/* Thank You Message */}
                <div className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Heart className="h-5 w-5 text-red-500 mr-2" />
                    <h4 className="font-semibold text-gray-900">Thank You!</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Every contribution, no matter how small, helps us continue developing and improving ALVIN-MD. 
                    Your support means the world to our development team! 🙏
                  </p>
                </div>

                {/* Alternative Support */}
                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-3">
                    Can't send M-Pesa? You can also support us by:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                      ⭐ Star our GitHub
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">
                      📢 Share with friends
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      💬 Leave feedback
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Support Stats */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Community <span className="text-orange-600">Support</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full mb-4">
                  <Coffee className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">1,247</div>
                <p className="text-gray-600 text-sm sm:text-base">Drinks Bought</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full mb-4">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">892</div>
                <p className="text-gray-600 text-sm sm:text-base">Happy Supporters</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full mb-4">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">24</div>
                <p className="text-gray-600 text-sm sm:text-base">New Features Added</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm sm:text-base italic">
                "Thanks to community support, we've been able to add 24 new features this year and keep ALVIN-MD free for everyone!"
              </p>
              <p className="text-orange-600 font-semibold mt-2">- ALVIN-MD Development Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyDrink;