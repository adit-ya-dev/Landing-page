"use client";
import React, { useState, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const MessageCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const BookOpenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const UploadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,5 17,10" />
    <line x1="12" y1="5" x2="12" y2="15" />
  </svg>
);

export default function OpenPoliticaFeatures() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 1.5 + 1,
        opacity: Math.random() * 0.4 + 0.3,
      });
    }
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      id: "feed",
      icon: MessageCircleIcon,
      title: "The Feed",
      description: "An infinite scroll of trending debates, discussions, surveys, and polls. AI personalizes content based on your interests.",
      highlights: [
        "AI-curated content personalization",
        "Trending debates & discussions",
        "Interactive polls & surveys",
      ],
      gradient: "from-slate-400 to-slate-600",
      glowColor: "100, 116, 139",
    },
    {
      id: "journaling",
      icon: BookOpenIcon,
      title: "Journaling",
      description: "Log thoughts, habits, or dreams. Every private note makes your data portfolio smarter and more profitable.",
      highlights: [
        "Private & encrypted entries",
        "AI insights from your patterns",
        "Monetizable data generation",
      ],
      gradient: "from-slate-500 to-slate-700",
      glowColor: "71, 85, 105",
    },
    {
      id: "surveys",
      icon: UploadIcon,
      title: "Surveys & Uploads",
      description: "Engage in polls and contribute content every touchpoint adds value to your data profile.",
      highlights: [
        "Topic-specific engagement",
        "Content contribution rewards",
        "Profile value enhancement",
      ],
      gradient: "from-slate-600 to-slate-800",
      glowColor: "51, 65, 85",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
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
              transition: "transform 0.3s ease-out",
              animation: `twinkle-${particle.id} ${particle.speed + 2}s ease-in-out infinite alternate`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(255, 255, 255, ${particle.opacity})`,
            }}
          />
        ))}
        <div
          className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl"
          style={{
            top: "5%",
            left: "10%",
            background: "radial-gradient(circle, rgba(100, 116, 139, 0.03) 0%, transparent 70%)",
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: "transform 0.8s ease-out",
          }}
        />
      </div>

      <div className="relative z-10 p-4 sm:p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 pt-16 sm:pt-20 md:pt-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent animate-gradient-x">
                Platform Features
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-300 leading-relaxed">
              Every interaction builds your valuable data portfolio while engaging with meaningful content.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isHovered = hoveredCard === feature.id;

              return (
                <div
                  key={feature.id}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setHoveredCard(feature.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`relative bg-black border border-gray-800 rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                      isHovered ? "border-slate-600 shadow-xl" : ""
                    } min-h-[24rem] sm:min-h-[26rem] flex flex-col overflow-hidden`}
                  >
                    <div className="mb-6">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-md`}
                      >
                        <IconComponent />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 truncate">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 text-sm sm:text-base leading-snug mb-6 flex-grow line-clamp-3">
                      {feature.description}
                    </p>

                    <div className="space-y-2 mt-auto">
                      {feature.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-xs sm:text-sm text-gray-400">
                          <div
                            className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${feature.gradient} rounded-full mr-2 sm:mr-3 flex-shrink-0`}
                          />
                          <span className="leading-snug truncate">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        ${particles.map(
          (particle, index) => `
          @keyframes twinkle-${index} {
            0% { 
              opacity: ${particle.opacity * 0.3};
              transform: scale(0.8);
            }
            50% { 
              opacity: ${particle.opacity};
              transform: scale(1.1);
            }
            100% { 
              opacity: ${particle.opacity * 0.6};
              transform: scale(1);
            }
          }
        `,
        ).join("")}
      `}</style>
    </div>
  );
}