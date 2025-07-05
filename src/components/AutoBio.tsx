import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Quote, Settings, Save, RefreshCw } from 'lucide-react';

interface AutoBioProps {
  isOpen: boolean;
  onClose: () => void;
  isEnabled: boolean;
  onToggle: (enabled: boolean) => void;
}

const AutoBio = () => {
  const [currentBio, setCurrentBio] = useState('');
  const [isEnabled, setIsEnabled] = useState(true);
  const [updateInterval, setUpdateInterval] = useState(60); // seconds
  const [selectedQuoteCategory, setSelectedQuoteCategory] = useState('motivational');

  const quotes = {
    motivational: [
      "YOU DID WELL TODAY. PREPARE FOR EVEN BETTER TOMORROW.",
      "SUCCESS IS NOT FINAL, FAILURE IS NOT FATAL.",
      "THE ONLY WAY TO DO GREAT WORK IS TO LOVE WHAT YOU DO.",
      "BELIEVE YOU CAN AND YOU'RE HALFWAY THERE.",
      "DON'T WATCH THE CLOCK; DO WHAT IT DOES. KEEP GOING.",
      "THE FUTURE BELONGS TO THOSE WHO BELIEVE IN THE BEAUTY OF THEIR DREAMS.",
      "IT IS DURING OUR DARKEST MOMENTS THAT WE MUST FOCUS TO SEE THE LIGHT.",
      "THE WAY TO GET STARTED IS TO QUIT TALKING AND BEGIN DOING."
    ],
    success: [
      "SUCCESS IS WALKING FROM FAILURE TO FAILURE WITH NO LOSS OF ENTHUSIASM.",
      "THE ROAD TO SUCCESS IS ALWAYS UNDER CONSTRUCTION.",
      "SUCCESS IS NOT THE KEY TO HAPPINESS. HAPPINESS IS THE KEY TO SUCCESS.",
      "DON'T BE AFRAID TO GIVE UP THE GOOD TO GO FOR THE GREAT.",
      "THE ONLY IMPOSSIBLE JOURNEY IS THE ONE YOU NEVER BEGIN.",
      "SUCCESS IS THE SUM OF SMALL EFFORTS REPEATED DAY IN AND DAY OUT."
    ],
    wisdom: [
      "THE ONLY TRUE WISDOM IS IN KNOWING YOU KNOW NOTHING.",
      "IN THE MIDDLE OF DIFFICULTY LIES OPPORTUNITY.",
      "LIFE IS WHAT HAPPENS TO YOU WHILE YOU'RE BUSY MAKING OTHER PLANS.",
      "THE GREATEST GLORY IN LIVING LIES NOT IN NEVER FALLING, BUT IN RISING EVERY TIME WE FALL.",
      "BE YOURSELF; EVERYONE ELSE IS ALREADY TAKEN.",
      "YESTERDAY IS HISTORY, TOMORROW IS A MYSTERY, TODAY IS A GIFT."
    ],
    technology: [
      "TECHNOLOGY IS BEST WHEN IT BRINGS PEOPLE TOGETHER.",
      "THE ADVANCE OF TECHNOLOGY IS BASED ON MAKING IT FIT IN SO THAT YOU DON'T REALLY EVEN NOTICE IT.",
      "ANY SUFFICIENTLY ADVANCED TECHNOLOGY IS INDISTINGUISHABLE FROM MAGIC.",
      "INNOVATION DISTINGUISHES BETWEEN A LEADER AND A FOLLOWER.",
      "THE REAL PROBLEM IS NOT WHETHER MACHINES THINK BUT WHETHER MEN DO."
    ]
  };

  useEffect(() => {
    if (isEnabled) {
      updateBio();
      const interval = setInterval(updateBio, updateInterval * 1000);
      return () => clearInterval(interval);
    }
  }, [isEnabled, updateInterval, selectedQuoteCategory]);

  const updateBio = () => {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    const randomQuote = quotes[selectedQuoteCategory as keyof typeof quotes][
      Math.floor(Math.random() * quotes[selectedQuoteCategory as keyof typeof quotes].length)
    ];

    const newBio = `ALVIN-MD ONLINE!! 📅 ${dateStr} ✘ ${randomQuote}`;
    setCurrentBio(newBio);
  };

  const formatBioPreview = (bio: string) => {
    const parts = bio.split('✘');
    return (
      <div className="text-center">
        <div className="text-green-600 font-bold">{parts[0]?.trim()}</div>
        {parts[1] && (
          <div className="text-gray-700 font-medium mt-1">✘ {parts[1].trim()}</div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
          <RefreshCw className="h-6 w-6 text-purple-600 mr-3" />
          Auto-Bio Configuration
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Auto Update</span>
          <button
            onClick={() => setIsEnabled(!isEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isEnabled ? 'bg-green-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isEnabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Current Bio Preview */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-3">
          <Quote className="h-5 w-5 text-green-600 mr-2" />
          <h4 className="font-semibold text-gray-900">Current Bio</h4>
          <div className={`ml-auto w-2 h-2 rounded-full ${isEnabled ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
        </div>
        {currentBio ? formatBioPreview(currentBio) : (
          <div className="text-gray-500 text-center">Bio will appear here when enabled</div>
        )}
      </div>

      {/* Configuration Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Quote Category
          </label>
          <select
            value={selectedQuoteCategory}
            onChange={(e) => setSelectedQuoteCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="motivational">Motivational</option>
            <option value="success">Success</option>
            <option value="wisdom">Wisdom</option>
            <option value="technology">Technology</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Update Interval
          </label>
          <select
            value={updateInterval}
            onChange={(e) => setUpdateInterval(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value={60}>Every Minute</option>
            <option value={300}>Every 5 Minutes</option>
            <option value={900}>Every 15 Minutes</option>
            <option value={1800}>Every 30 Minutes</option>
            <option value={3600}>Every Hour</option>
          </select>
        </div>
      </div>

      {/* Quote Preview */}
      <div className="mt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Sample Quotes ({selectedQuoteCategory})</h4>
        <div className="bg-gray-50 rounded-lg p-4 max-h-32 overflow-y-auto">
          {quotes[selectedQuoteCategory as keyof typeof quotes].slice(0, 3).map((quote, index) => (
            <div key={index} className="text-sm text-gray-700 mb-2 last:mb-0">
              "✘ {quote}"
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <button
          onClick={updateBio}
          disabled={!isEnabled}
          className="flex-1 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold flex items-center justify-center space-x-2"
        >
          <RefreshCw className="h-5 w-5" />
          <span>Update Now</span>
        </button>
        <button
          className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center space-x-2"
        >
          <Save className="h-5 w-5" />
          <span>Save Settings</span>
        </button>
      </div>

      {/* Info */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="text-blue-800 font-medium mb-1">Auto-Bio Features:</p>
            <ul className="text-blue-700 space-y-1">
              <li>• Automatically updates WhatsApp bio with current date</li>
              <li>• Rotates through inspirational quotes</li>
              <li>• Shows "ALVIN-MD ONLINE" status</li>
              <li>• Updates every minute (configurable)</li>
              <li>• Multiple quote categories available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoBio;