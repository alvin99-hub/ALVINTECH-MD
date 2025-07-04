import React from 'react';
import { Server, Bot, Database, Cloud, Code, Headphones, Smartphone, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'ALVIN-MD WhatsApp Bots',
      description: 'Deploy powerful WhatsApp bots instantly with our ALVIN-MD technology. Only 10 coins per deployment!',
      features: ['Instant Deployment', 'AI-Powered Responses', 'Media Download', 'Group Management', 'Custom Commands', '24/7 Active']
    },
    {
      icon: Smartphone,
      title: 'Multi-Platform Bots',
      description: 'Extend your reach with bots for WhatsApp, Telegram, and Discord platforms.',
      features: ['WhatsApp Integration', 'Telegram Bots', 'Discord Bots', 'Cross-Platform Sync', 'Unified Dashboard', 'API Access']
    },
    {
      icon: Server,
      title: 'Premium Web Hosting',
      description: 'High-performance web hosting with 99.9% uptime guarantee and SSD storage.',
      features: ['SSD Storage', 'Free SSL Certificate', 'Daily Backups', 'cPanel Access', 'CDN Integration', '24/7 Monitoring']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Secure and scalable database solutions optimized for bot operations.',
      features: ['MySQL/PostgreSQL', 'Database Optimization', 'Automated Backups', 'Performance Monitoring', 'Data Analytics', 'Real-time Sync']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud services that grow with your bot deployment needs.',
      features: ['Auto Scaling', 'Load Balancing', 'Global CDN', 'Edge Computing', 'Container Support', 'Kubernetes Ready']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored bot development and API integration services for your specific needs.',
      features: ['Custom Bot Features', 'API Development', 'Third-party Integration', 'Mobile Apps', 'Web Applications', 'Consultation']
    },
    {
      icon: MessageCircle,
      title: 'Bot Analytics',
      description: 'Comprehensive analytics and insights for your deployed bots.',
      features: ['Usage Statistics', 'Performance Metrics', 'User Engagement', 'Response Analytics', 'Custom Reports', 'Real-time Dashboard']
    },
    {
      icon: Headphones,
      title: '24/7 Expert Support',
      description: 'Round-the-clock technical support from our ALVIN-MD specialists.',
      features: ['Live Chat Support', 'Phone Support', 'Email Support', 'Remote Assistance', 'Bot Troubleshooting', 'Priority Response']
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive bot deployment and hosting solutions designed to power your digital automation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 group hover:transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;