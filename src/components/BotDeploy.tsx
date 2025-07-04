import React, { useState } from 'react';
import { Bot, Smartphone, MessageCircle, Settings, Play, CheckCircle, AlertCircle } from 'lucide-react';

const BotDeploy = () => {
  const [selectedBot, setSelectedBot] = useState('alvin-md');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentStatus, setDeploymentStatus] = useState('');

  const botTypes = [
    {
      id: 'alvin-md',
      name: 'ALVIN-MD V5',
      description: 'Latest version with advanced AI features',
      features: ['AI Chat', 'Media Download', 'Group Management', 'Custom Commands'],
      cost: 10,
      popular: true
    },
    {
      id: 'alvin-basic',
      name: 'ALVIN-MD Basic',
      description: 'Essential features for personal use',
      features: ['Basic Commands', 'Media Download', 'Auto Reply'],
      cost: 5,
      popular: false
    },
    {
      id: 'alvin-pro',
      name: 'ALVIN-MD Pro',
      description: 'Professional features for business',
      features: ['All V5 Features', 'Analytics', 'Multi-Admin', 'Custom Branding'],
      cost: 15,
      popular: false
    }
  ];

  const handleDeploy = async () => {
    if (!phoneNumber) {
      alert('Please enter your WhatsApp number');
      return;
    }

    setIsDeploying(true);
    setDeploymentStatus('Initializing bot deployment...');
    
    // Simulate deployment process
    setTimeout(() => {
      setDeploymentStatus('Connecting to WhatsApp servers...');
    }, 1000);
    
    setTimeout(() => {
      setDeploymentStatus('Installing ALVIN-MD components...');
    }, 2500);
    
    setTimeout(() => {
      setDeploymentStatus('Bot deployed successfully! Check your WhatsApp.');
      setIsDeploying(false);
    }, 4000);
  };

  return (
    <section id="bot-deploy" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Deploy Your <span className="text-blue-600">WhatsApp Bot</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Get your ALVIN-MD WhatsApp bot up and running in minutes. Choose your bot type and deploy instantly!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {botTypes.map((bot) => (
              <div 
                key={bot.id}
                className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 cursor-pointer border-2 ${
                  selectedBot === bot.id ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-200'
                } ${bot.popular ? 'transform scale-105' : ''}`}
                onClick={() => setSelectedBot(bot.id)}
              >
                {bot.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full mb-4">
                    <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{bot.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{bot.description}</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {bot.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">{bot.cost} Coins</div>
                  <div className="text-xs sm:text-sm text-gray-500">per deployment</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Deploy Configuration</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Selected Bot Type
                    </label>
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <Bot className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="font-semibold text-blue-900">
                        {botTypes.find(bot => bot.id === selectedBot)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp Number (with country code)
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+254742943705"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="text-yellow-800 font-medium mb-1">Important Notes:</p>
                        <ul className="text-yellow-700 space-y-1">
                          <li>• Make sure your WhatsApp is active on the provided number</li>
                          <li>• You'll receive a QR code to scan for authentication</li>
                          <li>• Bot will be active for 24 hours per deployment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Deployment Status</h3>
                
                {!isDeploying && !deploymentStatus && (
                  <div className="text-center py-8 sm:py-12">
                    <MessageCircle className="h-16 w-16 sm:h-20 sm:w-20 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-sm sm:text-base">Ready to deploy your bot</p>
                  </div>
                )}
                
                {(isDeploying || deploymentStatus) && (
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center">
                        {isDeploying ? (
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-3"></div>
                        ) : (
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        )}
                        <span className="text-blue-900 text-sm sm:text-base">{deploymentStatus}</span>
                      </div>
                    </div>
                    
                    {!isDeploying && deploymentStatus.includes('successfully') && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-900 mb-2">Next Steps:</h4>
                        <ol className="text-green-800 text-sm space-y-1">
                          <li>1. Open WhatsApp on your phone</li>
                          <li>2. Look for the QR code message</li>
                          <li>3. Scan the QR code to activate your bot</li>
                          <li>4. Start using your ALVIN-MD bot!</li>
                        </ol>
                      </div>
                    )}
                  </div>
                )}
                
                <button
                  onClick={handleDeploy}
                  disabled={isDeploying || !phoneNumber}
                  className="w-full mt-6 bg-blue-600 text-white py-3 sm:py-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Play className="h-5 w-5" />
                  <span>{isDeploying ? 'Deploying...' : 'Deploy Bot'}</span>
                </button>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Cost: <span className="font-semibold text-blue-600">
                      {botTypes.find(bot => bot.id === selectedBot)?.cost} coins
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotDeploy;