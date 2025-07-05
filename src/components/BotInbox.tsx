import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, Bot, Settings, Volume2, VolumeX, Clock, Hash, Command } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isCommand?: boolean;
}

interface BotInboxProps {
  isOpen: boolean;
  onClose: () => void;
  botConnected: boolean;
  prefix: string;
  onPrefixChange: (prefix: string) => void;
}

const BotInbox: React.FC<BotInboxProps> = ({ isOpen, onClose, botConnected, prefix, onPrefixChange }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const botCommands = [
    { command: 'menu', description: 'Displays all commands' },
    { command: 'play [song name]', description: 'Downloads the song' },
    { command: 'video [name]', description: 'Downloads the video' },
    { command: 'restart', description: 'Restarts the bot' },
    { command: 'v [file name]', description: 'Downloads & views once in inbox' },
    { command: 'status on', description: 'Enables auto view status' },
    { command: 'status off', description: 'Disables auto view status' },
    { command: 'help', description: 'Shows help information' },
    { command: 'ping', description: 'Check bot response time' },
    { command: 'info', description: 'Bot information and stats' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (botConnected && messages.length === 0) {
      // Initial bot connection message
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: `🤖 **ALVINTECH-MD BOT IS CONNECTED SUCCESSFULLY**\n\n📋 **Bot Information:**\n• Prefix: ${prefix}\n• Plugins: 47\n• Commands: 156\n• Date: ${currentTime.toLocaleDateString()}\n• Time: ${currentTime.toLocaleTimeString()}\n• Help Line: 0742943705\n\n**Message by ALVINTECH-MD**\n\nType ${prefix}menu to see all available commands.`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);

      // Play notification sound
      if (!isMuted) {
        playNotificationSound();
      }
    }
  }, [botConnected, prefix, currentTime, isMuted, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const playNotificationSound = () => {
    // Create audio context for notification
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2);

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim() || !botConnected) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
      isCommand: inputMessage.startsWith(prefix)
    };

    setMessages(prev => [...prev, userMessage]);

    // Process bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage('');
  };

  const generateBotResponse = (command: string): string => {
    const cmd = command.toLowerCase().replace(prefix, '');

    switch (cmd) {
      case 'menu':
        return `📋 **ALVINTECH-MD COMMAND MENU**\n\n${botCommands.map(c => `${prefix}${c.command} - ${c.description}`).join('\n')}\n\n**Message by ALVINTECH-MD**`;
      
      case 'help':
        return `🆘 **HELP INFORMATION**\n\n• Prefix: ${prefix}\n• Total Commands: 156\n• Active Plugins: 47\n• Help Line: 0742943705\n• Support: 24/7\n\nFor technical support, call our help line.\n\n**Message by ALVINTECH-MD**`;
      
      case 'ping':
        return `🏓 **PONG!**\n\nResponse Time: 0.${Math.floor(Math.random() * 900 + 100)}ms\nServer Status: Online ✅\nConnection: Stable\n\n**Message by ALVINTECH-MD**`;
      
      case 'info':
        return `ℹ️ **BOT INFORMATION**\n\n• Bot Name: ALVINTECH-MD\n• Version: 5.0.2\n• Uptime: 24/7\n• Owner: ALVINTECH\n• Plugins: 47 Active\n• Commands: 156 Available\n• Users: 50,000+\n\n**Message by ALVINTECH-MD**`;
      
      case 'restart':
        return `🔄 **RESTARTING BOT...**\n\nBot will be back online in 30 seconds.\nPlease wait...\n\n**Message by ALVINTECH-MD**`;
      
      case 'status on':
        return `✅ **AUTO VIEW STATUS ENABLED**\n\nBot will now automatically view all status updates.\n\n**Message by ALVINTECH-MD**`;
      
      case 'status off':
        return `❌ **AUTO VIEW STATUS DISABLED**\n\nBot will no longer view status updates automatically.\n\n**Message by ALVINTECH-MD**`;
      
      default:
        if (cmd.startsWith('play ')) {
          const song = cmd.replace('play ', '');
          return `🎵 **DOWNLOADING SONG**\n\nSearching for: "${song}"\nDownload started...\nETA: 30 seconds\n\n**Message by ALVINTECH-MD**`;
        }
        if (cmd.startsWith('video ')) {
          const video = cmd.replace('video ', '');
          return `🎥 **DOWNLOADING VIDEO**\n\nSearching for: "${video}"\nDownload started...\nETA: 2 minutes\n\n**Message by ALVINTECH-MD**`;
        }
        if (cmd.startsWith('v ')) {
          const file = cmd.replace('v ', '');
          return `📁 **VIEW ONCE FILE**\n\nPreparing: "${file}"\nFile will be sent as view once.\n\n**Message by ALVINTECH-MD**`;
        }
        return `❓ **UNKNOWN COMMAND**\n\nCommand "${command}" not recognized.\nType ${prefix}menu to see available commands.\n\n**Message by ALVINTECH-MD**`;
    }
  };

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('**') && line.includes('**')) {
        const parts = line.split('**');
        return (
          <div key={index}>
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            )}
          </div>
        );
      }
      return <div key={index}>{line}</div>;
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">ALVINTECH-MD Bot Inbox</h3>
                <div className="flex items-center space-x-4 text-sm opacity-90">
                  <span className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${botConnected ? 'bg-green-300' : 'bg-red-300'}`}></div>
                    <span>{botConnected ? 'Connected' : 'Disconnected'}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{currentTime.toLocaleTimeString()}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        {/* Bot Settings */}
        <div className="bg-gray-50 p-3 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Hash className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium">Prefix:</span>
                <select
                  value={prefix}
                  onChange={(e) => onPrefixChange(e.target.value)}
                  className="text-sm border border-gray-300 rounded px-2 py-1"
                >
                  <option value="*">* (Asterisk)</option>
                  <option value="@">@ (At Symbol)</option>
                  <option value="#"># (Hash)</option>
                  <option value="/"># (Slash)</option>
                </select>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Command className="h-4 w-4" />
                <span>156 Commands | 47 Plugins</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Help: 0742943705
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {!botConnected ? (
            <div className="text-center py-8">
              <Bot className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Connect your bot to start messaging</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  } ${message.isCommand ? 'border-l-4 border-green-500' : ''}`}
                >
                  <div className="text-sm whitespace-pre-wrap">
                    {formatMessage(message.text)}
                  </div>
                  <div className={`text-xs mt-2 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-gray-50">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={botConnected ? `Type ${prefix}menu for commands...` : 'Connect bot first...'}
              disabled={!botConnected}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
            />
            <button
              onClick={handleSendMessage}
              disabled={!botConnected || !inputMessage.trim()}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Quick commands: {prefix}menu, {prefix}help, {prefix}ping, {prefix}info
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotInbox;