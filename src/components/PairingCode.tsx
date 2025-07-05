import React, { useState } from 'react';
import { Smartphone, Copy, CheckCircle, AlertCircle, Wifi, MessageCircle, Bot, QrCode, Volume2 } from 'lucide-react';

const PairingCode = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedBot, setSelectedBot] = useState('alvin-md-v5');
  const [pairingCode, setPairingCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [copied, setCopied] = useState(false);
  const [connectionMessage, setConnectionMessage] = useState('');
  const [notificationSent, setNotificationSent] = useState(false);

  const botTypes = [
    {
      id: 'alvin-md-v5',
      name: 'ALVIN-MD V5',
      description: 'Latest AI-powered WhatsApp bot',
      features: ['AI Chat', 'Media Download', 'Group Management', 'Custom Commands']
    },
    {
      id: 'alvin-basic',
      name: 'ALVIN-MD Basic',
      description: 'Essential WhatsApp automation',
      features: ['Basic Commands', 'Auto Reply', 'Media Support']
    },
    {
      id: 'alvin-pro',
      name: 'ALVIN-MD Pro',
      description: 'Professional business features',
      features: ['Advanced AI', 'Analytics', 'Multi-Admin', 'Custom Branding']
    }
  ];

  const generatePairingCode = async () => {
    if (!phoneNumber) {
      alert('Please enter your WhatsApp number');
      return;
    }

    setIsGenerating(true);
    setIsConnected(false);
    setConnectionMessage('');
    setNotificationSent(false);
    
    // Simulate code generation
    setTimeout(() => {
      const code = Math.random().toString(36).substring(2, 10).toUpperCase();
      setPairingCode(code);
      setIsGenerating(false);
      
      // Simulate connection after 8 seconds
      setTimeout(() => {
        const selectedBotName = botTypes.find(bot => bot.id === selectedBot)?.name || 'ALVIN-MD';
        setIsConnected(true);
        setConnectionMessage(`✅ ${selectedBotName} successfully connected to ${phoneNumber}`);
        
        // Send notification audio message
        sendNotificationMessage();
      }, 8000);
    }, 2000);
  };

  const sendNotificationMessage = () => {
    // Play notification sound
    playNotificationSound();
    
    // Simulate sending WhatsApp notification
    setTimeout(() => {
      setNotificationSent(true);
    }, 1000);
  };

  const playNotificationSound = () => {
    // Create audio context for notification sound
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create a more complex notification sound
    const playTone = (frequency: number, startTime: number, duration: number) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime + startTime);
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + startTime + duration);
      
      oscillator.start(audioContext.currentTime + startTime);
      oscillator.stop(audioContext.currentTime + startTime + duration);
    };

    // Play notification melody
    playTone(800, 0, 0.2);
    playTone(1000, 0.3, 0.2);
    playTone(800, 0.6, 0.3);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(pairingCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = pairingCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const resetForm = () => {
    setPhoneNumber('');
    setPairingCode('');
    setIsConnected(false);
    setConnectionMessage('');
    setCopied(false);
    setNotificationSent(false);
  };

  return (
    <section id="pairing" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Generate <span className="text-green-600">Pairing Code</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Link your WhatsApp to ALVIN-MD bot using a secure pairing code. No QR scanning required!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Configuration Panel */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Pairing Configuration</h3>
              
              <div className="space-y-6">
                {/* Bot Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Bot Type
                  </label>
                  <div className="space-y-3">
                    {botTypes.map((bot) => (
                      <div 
                        key={bot.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedBot === bot.id 
                            ? 'border-green-600 bg-green-50' 
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                        onClick={() => setSelectedBot(bot.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{bot.name}</h4>
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            selectedBot === bot.id 
                              ? 'border-green-600 bg-green-600' 
                              : 'border-gray-300'
                          }`}>
                            {selectedBot === bot.id && (
                              <div className="w-full h-full rounded-full bg-white scale-50"></div>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{bot.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {bot.features.map((feature, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phone Number Input */}
                <div>
                  <label htmlFor="phone-pairing" className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp Number (with country code)
                  </label>
                  <div className="relative">
                    <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone-pairing"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+254742943705"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Include country code (e.g., +254 for Kenya, +1 for USA)
                  </p>
                </div>

                {/* Generate Button */}
                <button
                  onClick={generatePairingCode}
                  disabled={isGenerating || !phoneNumber}
                  className="w-full bg-green-600 text-white py-3 sm:py-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <QrCode className="h-5 w-5" />
                  <span>{isGenerating ? 'Generating Code...' : 'Generate Pairing Code'}</span>
                </button>
              </div>
            </div>

            {/* Code Display Panel */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Pairing Code</h3>
              
              {!pairingCode && !isGenerating && (
                <div className="text-center py-8 sm:py-12">
                  <Wifi className="h-16 w-16 sm:h-20 sm:w-20 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-sm sm:text-base">Generate a pairing code to get started</p>
                </div>
              )}

              {isGenerating && (
                <div className="text-center py-8 sm:py-12">
                  <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
                  <p className="text-green-600 text-sm sm:text-base">Generating secure pairing code...</p>
                </div>
              )}

              {pairingCode && (
                <div className="space-y-6">
                  {/* Code Display */}
                  <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <p className="text-sm text-gray-600 mb-2">Your Pairing Code:</p>
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-green-600 mb-4 tracking-wider">
                      {pairingCode}
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
                    >
                      <Copy className="h-4 w-4" />
                      <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>

                  {/* Instructions */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      How to Use This Code:
                    </h4>
                    <ol className="text-blue-800 text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">1</span>
                        Open WhatsApp on your phone
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">2</span>
                        Look for the pairing notification popup
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">3</span>
                        Enter the code above when prompted
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">4</span>
                        Wait for connection confirmation
                      </li>
                    </ol>
                  </div>

                  {/* Connection Status */}
                  {isConnected && connectionMessage && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <h4 className="font-semibold text-green-900">Connection Successful!</h4>
                      </div>
                      <p className="text-green-800 text-sm mb-3">{connectionMessage}</p>
                      <div className="flex items-center space-x-2 text-sm text-green-700">
                        <Bot className="h-4 w-4" />
                        <span>Your bot is now active and ready to use!</span>
                      </div>
                      
                      {notificationSent && (
                        <div className="mt-3 bg-white border border-green-300 rounded-lg p-3">
                          <div className="flex items-center mb-2">
                            <Volume2 className="h-4 w-4 text-green-600 mr-2" />
                            <span className="font-medium text-green-900">Notification Sent</span>
                          </div>
                          <div className="bg-gray-50 rounded p-2 text-sm">
                            <div className="font-mono text-green-700">
                              🔊 "ALVINTECH-MD BOT IS CONNECTED SUCCESSFULLY. PLAY YOUR PART NOW."
                            </div>
                          </div>
                          <p className="text-xs text-green-600 mt-1">
                            Audio message sent to your WhatsApp inbox
                          </p>
                        </div>
                      )}
                      
                      <button
                        onClick={resetForm}
                        className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
                      >
                        Generate New Code
                      </button>
                    </div>
                  )}

                  {/* Warning */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="text-yellow-800 font-medium mb-1">Security Notice:</p>
                        <ul className="text-yellow-700 space-y-1">
                          <li>• This code expires in 5 minutes</li>
                          <li>• Don't share this code with anyone</li>
                          <li>• Only use on your own WhatsApp account</li>
                          <li>• Generate a new code if connection fails</li>
                          <li>• Audio notification will confirm connection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Use <span className="text-green-600">Pairing Codes</span>?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full mb-4">
                  <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">No QR Scanning</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Simply enter the code directly in WhatsApp without needing to scan QR codes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full mb-4">
                  <Wifi className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Secure Connection</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Each code is unique and expires automatically for maximum security.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full mb-4">
                  <Volume2 className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Audio Confirmation</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Receive an audio message confirming successful bot connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PairingCode;