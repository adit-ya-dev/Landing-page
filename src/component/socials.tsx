"use client"
import React, { useState, useEffect } from "react"

// Custom icon components properly defined as React components
const MessageCircleIcon = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
};

const BookOpenIcon = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
};

const UploadIcon = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7,10 12,5 17,10"/>
      <line x1="12" y1="5" x2="12" y2="15"/>
    </svg>
  );
};

// Rest of your component remains the same...
export default function OpenPoliticaFeatures() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  // Generate floating particles (reduced to 15 for performance)
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    setParticles(newParticles);
  }, []);

  // Track mouse 
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      id: 'feed',
      icon: MessageCircleIcon,
      title: 'The Feed',
      description: 'An infinite scroll of trending debates, intelligent discussions, surveys, and polls. AI personalizes content based on your interests and values.',
      highlights: [
        'AI-curated content personalization',
        'Trending debates & discussions',
        'Interactive polls & surveys'
      ],
      gradient: 'from-slate-400 to-slate-600',
      glowColor: '100, 116, 139'
    },
    {
      id: 'journaling',
      icon: BookOpenIcon,
      title: 'Journaling',
      description: 'Log thoughts, habits, or dreams. Every private note makes your data portfolio smarter and more profitable.',
      highlights: [
        'Private & encrypted entries',
        'AI insights from your patterns',
        'Monetizable data generation'
      ],
      gradient: 'from-slate-500 to-slate-700',
      glowColor: '71, 85, 105'
    },
    {
      id: 'surveys',
      icon: UploadIcon,
      title: 'Surveys & Uploads',
      description: 'Engage in topic-specific polls and contribute content—every touchpoint adds value to your data profile.',
      highlights: [
        'Topic-specific engagement',
        'Content contribution rewards',
        'Profile value enhancement'
      ],
      gradient: 'from-slate-600 to-slate-800',
      glowColor: '51, 65, 85'
    }
  ];

  return (
    <div className="relative bg-black text-white overflow-hidden pb-32">
      {/* Space-themed Animated Background */}
      <div className="absolute inset-0">
        {/* Starfield particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              transition: 'transform 0.3s ease-out, opacity 3s ease-in-out alternate infinite',
              boxShadow: `0 0 ${particle.size * 2}px rgba(255, 255, 255, ${particle.opacity})`
            }}
          />
        ))}
        
        {/* Subtle gradient orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            top: '5%',
            left: '10%',
            background: 'radial-gradient(circle, rgba(100, 116, 139, 0.03) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: 'transform 0.8s ease-out'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl"
          style={{
            bottom: '10%',
            right: '5%',
            background: 'radial-gradient(circle, rgba(71, 85, 105, 0.03) 0%, transparent 70%)',
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            transition: 'transform 0.8s ease-out'
          }}
        />
      </div>

      <div className="relative z-10 p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Animated Header */}
          <div className="text-center mb-12 sm:mb-20 pt-16 sm:pt-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
              <span 
                className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 3s ease infinite'
                }}
              >
                Platform Features
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in">
              Every interaction on OpenPolitica builds your valuable data portfolio while you engage with meaningful content
            </p>
          </div>

          {/* Features Grid with enhanced spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isHovered = hoveredCard === feature.id;
              
              return (
                <div
                  key={feature.id}
                  className="relative group cursor-pointer opacity-0"
                  style={{ 
                    animation: `fade-in-up 0.8s ease-out ${index * 200}ms forwards`
                  }}
                  onMouseEnter={() => setHoveredCard(feature.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  role="button"
                  aria-label={`Learn more about ${feature.title}`}
                >
                  {/* Space-themed Card */}
                  <div
                    className={`relative bg-black border border-gray-800 rounded-3xl p-6 sm:p-10 transition-all duration-700 transform ${isHovered ? 'scale-105 -translate-y-4 border-gray-600' : ''} flex flex-col shadow-2xl min-h-[28rem]`}
                    style={{
                      background: isHovered 
                        ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%)'
                        : 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 10, 10, 0.9) 100%)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: isHovered 
                        ? `0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(${feature.glowColor}, 0.15)`
                        : '0 20px 40px -12px rgba(0, 0, 0, 0.6)'
                    }}
                  >
                    {/* Cosmic border effect */}
                    <div
                      className={`absolute inset-0 rounded-3xl transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                      style={{
                        background: `linear-gradient(135deg, rgba(${feature.glowColor}, 0.08) 0%, transparent 50%, rgba(${feature.glowColor}, 0.04) 100%)`,
                        zIndex: 1
                      }}
                    />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-6 sm:mb-8">
                        <div
                          className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform transition-all duration-700 ${isHovered ? 'rotate-12 scale-110' : ''} shadow-2xl`}
                          style={{
                            boxShadow: isHovered 
                              ? `0 20px 40px -10px rgba(${feature.glowColor}, 0.3)`
                              : '0 10px 20px -5px rgba(0, 0, 0, 0.5)'
                          }}
                        >
                          <IconComponent />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-500">
                          {feature.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 group-hover:text-gray-200 transition-colors duration-500 flex-grow text-sm sm:text-base">
                        {feature.description}
                      </p>

                      {/* Enhanced feature highlights */}
                      <div className="space-y-4 mt-auto">
                        {feature.highlights.map((highlight, highlightIndex) => (
                          <div 
                            key={highlightIndex}
                            className={`flex items-center text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-all duration-500 transform ${isHovered ? 'translate-x-3' : ''}`}
                            style={{ transitionDelay: `${highlightIndex * 150}ms` }}
                          >
                            <div
                              className={`w-3 h-3 bg-gradient-to-r ${feature.gradient} rounded-full mr-4 transition-all duration-500 ${isHovered ? 'scale-150 shadow-lg' : ''} flex-shrink-0`} 
                              style={{
                                boxShadow: isHovered 
                                  ? `0 0 15px rgba(${feature.glowColor}, 0.5)`
                                  : 'none'
                              }}
                            />
                            <span className="leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Floating cosmic elements */}
                    {isHovered && (
                      <>
                        <div className="absolute top-6 right-6 animate-bounce">
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full opacity-80`} 
                            style={{
                              boxShadow: `0 0 10px rgba(${feature.glowColor}, 0.6)`
                            }}
                          />
                        </div>
                        <div className="absolute bottom-8 left-8 animate-pulse">
                          <div className={`w-1 h-1 bg-gradient-to-r ${feature.gradient} rounded-full opacity-60`} />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-fade-in {
          animation: fade-in-up 0.8s ease-out 300ms forwards;
        }
      `}</style>
    </div>
  );
}