import React, { useState, useEffect } from 'react';
import { Bot, Clock, Coins, RefreshCw, AlertTriangle, CheckCircle, Settings, Calendar } from 'lucide-react';

interface DeployedBot {
  id: string;
  name: string;
  type: string;
  phoneNumber: string;
  deployedAt: Date;
  expiresAt: Date;
  cost: number;
  autoRenewal: boolean;
  status: 'active' | 'expired' | 'renewing' | 'failed';
}

interface BotManagerProps {
  userCoins: number;
  onCoinsUpdate: (newCoins: number) => void;
}

const BotManager: React.FC<BotManagerProps> = ({ userCoins, onCoinsUpdate }) => {
  const [deployedBots, setDeployedBots] = useState<DeployedBot[]>([]);
  const [renewalHistory, setRenewalHistory] = useState<any[]>([]);

  useEffect(() => {
    // Check for bot renewals every minute
    const interval = setInterval(checkBotRenewals, 60000);
    return () => clearInterval(interval);
  }, [deployedBots, userCoins]);

  const checkBotRenewals = () => {
    const now = new Date();
    
    setDeployedBots(prevBots => 
      prevBots.map(bot => {
        if (bot.status === 'active' && now >= bot.expiresAt) {
          if (bot.autoRenewal && userCoins >= bot.cost) {
            // Auto-renew the bot
            renewBot(bot.id);
            return {
              ...bot,
              status: 'renewing' as const
            };
          } else {
            // Mark as expired
            return {
              ...bot,
              status: 'expired' as const
            };
          }
        }
        return bot;
      })
    );
  };

  const renewBot = async (botId: string) => {
    const bot = deployedBots.find(b => b.id === botId);
    if (!bot) return;

    // Simulate renewal process
    setTimeout(() => {
      if (userCoins >= bot.cost) {
        // Deduct coins
        onCoinsUpdate(userCoins - bot.cost);
        
        // Update bot with new expiry time
        setDeployedBots(prevBots =>
          prevBots.map(b => {
            if (b.id === botId) {
              const newExpiryTime = new Date();
              newExpiryTime.setHours(newExpiryTime.getHours() + 24);
              
              return {
                ...b,
                expiresAt: newExpiryTime,
                status: 'active' as const
              };
            }
            return b;
          })
        );

        // Add to renewal history
        setRenewalHistory(prev => [...prev, {
          id: Date.now(),
          botId: botId,
          botName: bot.name,
          renewedAt: new Date(),
          cost: bot.cost,
          success: true
        }]);

        // Show success notification
        showNotification(`${bot.name} auto-renewed successfully! 24 hours added.`, 'success');
      } else {
        // Failed renewal due to insufficient coins
        setDeployedBots(prevBots =>
          prevBots.map(b => {
            if (b.id === botId) {
              return { ...b, status: 'failed' as const };
            }
            return b;
          })
        );

        // Add to renewal history
        setRenewalHistory(prev => [...prev, {
          id: Date.now(),
          botId: botId,
          botName: bot.name,
          renewedAt: new Date(),
          cost: bot.cost,
          success: false,
          reason: 'Insufficient coins'
        }]);

        // Show failure notification
        showNotification(`${bot.name} renewal failed: Insufficient coins (${bot.cost} needed)`, 'error');
      }
    }, 2000);
  };

  const showNotification = (message: string, type: 'success' | 'error') => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
      type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
    }`;
    notification.innerHTML = `
      <div class="flex items-center space-x-2">
        <div class="flex-shrink-0">
          ${type === 'success' ? '✅' : '❌'}
        </div>
        <div class="text-sm font-medium">${message}</div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 5000);
  };

  const toggleAutoRenewal = (botId: string) => {
    setDeployedBots(prevBots =>
      prevBots.map(bot => {
        if (bot.id === botId) {
          return { ...bot, autoRenewal: !bot.autoRenewal };
        }
        return bot;
      })
    );
  };

  const manualRenewal = (botId: string) => {
    const bot = deployedBots.find(b => b.id === botId);
    if (!bot) return;

    if (userCoins >= bot.cost) {
      renewBot(botId);
    } else {
      showNotification(`Cannot renew ${bot.name}: Need ${bot.cost} coins (you have ${userCoins})`, 'error');
    }
  };

  const getTimeRemaining = (expiresAt: Date) => {
    const now = new Date();
    const diff = expiresAt.getTime() - now.getTime();
    
    if (diff <= 0) return 'Expired';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'expired': return 'text-red-600 bg-red-100';
      case 'renewing': return 'text-yellow-600 bg-yellow-100';
      case 'failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  // Add a sample bot for demonstration
  useEffect(() => {
    if (deployedBots.length === 0) {
      const sampleBot: DeployedBot = {
        id: 'sample-1',
        name: 'ALVIN-MD V5',
        type: 'alvin-md-v5',
        phoneNumber: '+254742943705',
        deployedAt: new Date(Date.now() - 23 * 60 * 60 * 1000), // 23 hours ago
        expiresAt: new Date(Date.now() + 1 * 60 * 60 * 1000), // 1 hour from now
        cost: 10,
        autoRenewal: true,
        status: 'active'
      };
      setDeployedBots([sampleBot]);
    }
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
          <Bot className="h-6 w-6 text-blue-600 mr-3" />
          Bot Management
        </h3>
        <div className="flex items-center space-x-2 bg-purple-100 px-3 py-1 rounded-lg">
          <Coins className="h-4 w-4 text-purple-600" />
          <span className="text-purple-700 font-semibold">{userCoins} coins</span>
        </div>
      </div>

      {/* Auto-Renewal Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <RefreshCw className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="text-blue-800 font-medium mb-1">Auto-Renewal System:</p>
            <ul className="text-blue-700 space-y-1">
              <li>• Bots automatically renew after 24 hours if auto-renewal is enabled</li>
              <li>• Renewal requires sufficient coins (same cost as initial deployment)</li>
              <li>• Failed renewals due to insufficient coins will expire the bot</li>
              <li>• You'll receive notifications for all renewal attempts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Deployed Bots */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">Active Deployments</h4>
        
        {deployedBots.length === 0 ? (
          <div className="text-center py-8">
            <Bot className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No bots deployed yet</p>
          </div>
        ) : (
          deployedBots.map((bot) => (
            <div key={bot.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">{bot.name}</h5>
                    <p className="text-sm text-gray-600">{bot.phoneNumber}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(bot.status)}`}>
                    {bot.status.charAt(0).toUpperCase() + bot.status.slice(1)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">
                    {bot.status === 'active' ? `${getTimeRemaining(bot.expiresAt)} left` : 'Expired'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Coins className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{bot.cost} coins/24h</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">
                    Deployed {bot.deployedAt.toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bot.autoRenewal}
                      onChange={() => toggleAutoRenewal(bot.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Auto-renewal</span>
                  </label>
                  
                  {!bot.autoRenewal && bot.status === 'expired' && (
                    <div className="flex items-center space-x-1 text-yellow-600">
                      <AlertTriangle className="h-4 w-4" />
                      <span className="text-xs">Auto-renewal disabled</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  {(bot.status === 'expired' || bot.status === 'failed') && (
                    <button
                      onClick={() => manualRenewal(bot.id)}
                      disabled={userCoins < bot.cost}
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                      Renew Now
                    </button>
                  )}
                  
                  {bot.status === 'renewing' && (
                    <div className="flex items-center space-x-2 text-yellow-600">
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Renewing...</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Renewal Warning */}
              {bot.status === 'active' && !bot.autoRenewal && getTimeRemaining(bot.expiresAt) !== 'Expired' && (
                <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded p-3">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm text-yellow-800">
                      Auto-renewal is disabled. Bot will expire in {getTimeRemaining(bot.expiresAt)}.
                    </span>
                  </div>
                </div>
              )}

              {/* Insufficient Coins Warning */}
              {bot.status === 'active' && bot.autoRenewal && userCoins < bot.cost && (
                <div className="mt-3 bg-red-50 border border-red-200 rounded p-3">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="text-sm text-red-800">
                      Insufficient coins for auto-renewal. Need {bot.cost} coins, you have {userCoins}.
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Renewal History */}
      {renewalHistory.length > 0 && (
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Renewal History</h4>
          <div className="bg-gray-50 rounded-lg p-4 max-h-48 overflow-y-auto">
            {renewalHistory.slice(-5).reverse().map((renewal) => (
              <div key={renewal.id} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${renewal.success ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <div>
                    <span className="text-sm font-medium text-gray-900">{renewal.botName}</span>
                    <div className="text-xs text-gray-500">
                      {renewal.renewedAt.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${renewal.success ? 'text-green-600' : 'text-red-600'}`}>
                    {renewal.success ? 'Success' : 'Failed'}
                  </div>
                  <div className="text-xs text-gray-500">
                    {renewal.success ? `-${renewal.cost} coins` : renewal.reason}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BotManager;