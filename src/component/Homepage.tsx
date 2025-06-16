"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Star {
  id: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  speed: number;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function OpenPoliticaLanding() {
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [ctaMousePosition, setCtaMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isCtaHovered, setIsCtaHovered] = useState<boolean>(false);
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  useEffect(() => {
    // Generate stars with mouse tracking properties
    const interactiveStars: Star[] = [];
    for (let i = 0; i < 80; i++) {
      interactiveStars.push({
        id: i,
        baseX: Math.random() * 100,
        baseY: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.3,
        speed: Math.random() * 0.02 + 0.01,
      });
    }
    setStars(interactiveStars);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 100,
        y: (e.clientY / window.innerHeight - 0.5) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleCtaMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCtaMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleClick = (item: string) => {
    setClickedItem(item);
    setTimeout(() => setClickedItem(null), 100);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes moveBorderLine {
          0% {
            top: 0;
            left: 0;
            width: 30px;
            height: 2px;
            transform: rotate(0deg) translate(-50%, -50%);
          }
          24.99% {
            top: 0;
            left: 100%;
            width: 30px;
            height: 2px;
            transform: rotate(0deg) translate(-50%, -50%);
          }
          25% {
            top: 0;
            left: 100%;
            width: 2px;
            height: 30px;
            transform: rotate(0deg) translate(-50%, -50%);
          }
          49.99% {
            top: 100%;
            left: 100%;
            width: 2px;
            height: 30px;
            transform: rotate(0deg) translate(-50%, -50%);
          }
          50% {
            top: 100%;
            left: 100%;
            width: 30px;
            height: 2px;
            transform: rotate(0deg) translate(-50%, -50%);
          }
          74.99% {
            top: 100%;
            left: 0;
            width: 30px;
            height: 2px;
            transform: rotate(0deg) translate(-50%, -50%);
          }
          75% {
            top: 100%;
            left: 0;
            width: 2px;
            height: 30px;
            transform: rotate(0deg) translate(-50%, -50%);
          }
          100% {
            top: 0;
            left: 0;
            width: 2px;
            height: 30px;
            transform: rotate(0deg) translate(-50%, -50%);
          }
        }
        @keyframes pulse {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(249, 115, 22, 0.4),
              0 0 40px rgba(249, 115, 22, 0.2),
              inset 0 0 20px rgba(249, 115, 22, 0.1);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(249, 115, 22, 0.6),
              0 0 60px rgba(249, 115, 22, 0.3),
              inset 0 0 30px rgba(249, 115, 22, 0.15);
          }
        }
      `}</style>

      {/* Interactive starfield background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full transition-all duration-300 ease-out"
            style={{
              left: `${star.baseX + mousePosition.x * star.speed}%`,
              top: `${star.baseY + mousePosition.y * star.speed}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-20 p-4 sm:p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <div className="text-xl sm:text-2xl font-bold">
              <span className="text-white">Open</span>
              <span className="text-white">Politica</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={() => handleClick("Log in")}
              className={`relative text-gray-400 hover:text-white transition-all duration-150 font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm hover:scale-105 group ${clickedItem === "Log in" ? "scale-90 bg-white/30" : ""}`}
            >
              Log in
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleClick("Sign up")}
              className={`relative px-4 py-1.5 sm:px-6 sm:py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-150 font-medium hover:scale-105 hover:shadow-lg hover:shadow-white/20 group overflow-hidden ${clickedItem === "Sign up" ? "scale-90 bg-gray-300" : ""}`}
            >
              <span className="relative z-10">Sign up</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[80vh] px-4 sm:px-6 pt-10 sm:pt-16">
        <div className="text-center space-y-6 sm:space-y-8 max-w-6xl mx-auto">
          {/* Main headline with gradient styling */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            <div>Take Control of Your Data.</div>
            <div>Get Paid for Who You Are.</div>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl sm:max-w-4xl mx-auto">
            OpenPolitica is the world's first social media platform where you own your data,
            <br className="hidden sm:block" />
            and your digital identity becomes a valuable asset.
          </p>

          {/* Status indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4 sm:px-6 py-3  backdrop-blur-sm">
            <span className="text-white font-medium text-sm sm:text-base">100% Human</span>
            <div className="w-1 h-1 bg-gray-500 rounded-full hidden sm:block"></div>
            <span className="text-white font-medium text-sm sm:text-base">0% Bots</span>
            <div className="w-1 h-1 bg-gray-500 rounded-full hidden sm:block"></div>
            <span className="text-white font-medium text-sm sm:text-base">100% Yours</span>
          </div>

          {/* CTA Button */}
          <div className="pt-4 sm:pt-6">
            <div
              className="relative inline-block"
              onMouseMove={handleCtaMouseMove}
              onMouseEnter={() => setIsCtaHovered(true)}
              onMouseLeave={() => setIsCtaHovered(false)}
            >
              {/* Static ambient glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 rounded-full blur-lg opacity-50"></div>

              {/* Movable cursor-following glow */}
              {isCtaHovered && (
                <div
                  className="absolute pointer-events-none opacity-80 transition-opacity duration-300"
                  style={{
                    left: ctaMousePosition.x - (window.innerWidth < 640 ? 30 : 40),
                    top: ctaMousePosition.y - (window.innerWidth < 640 ? 30 : 40),
                    width: window.innerWidth < 640 ? "60px" : "80px",
                    height: window.innerWidth < 640 ? "60px" : "80px",
                    background: "radial-gradient(circle, rgba(226, 203, 255, 0.6) 0%, rgba(147, 51, 234, 0.4) 30%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(15px)",
                  }}
                />
              )}

              <button
                onClick={() => handleClick("Join the Waitlist")}
                className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-150 ${clickedItem === "Join the Waitlist" ? "scale-90" : ""}`}
              >
                <span
                  className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                  style={{ animation: "spin 2s linear infinite" }}
                />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 sm:px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="pt-12 sm:pt-16 md:pt-20">
            <div
              className="relative border-2 border-gray-600 rounded-lg p-6 sm:p-8 md:p-12 max-w-6xl mx-auto bg-black overflow-hidden"
              style={{
                boxShadow:
                  "0 0 20px rgba(249, 115, 22, 0.3), 0 0 40px rgba(249, 115, 22, 0.15), 0 0 60px rgba(249, 115, 22, 0.1)",
              }}
            >
              {/* Moving glowing line */}
              <div
                className="absolute pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(249, 115, 22, 1) 50%, transparent 100%)",
                  boxShadow: "0 0 10px rgba(249, 115, 22, 0.8), 0 0 20px rgba(249, 115, 22, 0.4)",
                  animation: "moveBorderLine 10s linear infinite",
                  zIndex: 10,
                }}
              />

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                {/* Left side - Text content */}
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                    <span className="text-white">AI-Enhanced.</span>{" "}
                    <span className="text-gray-400">Web3-Secured.</span>{" "}
                    <span className="text-white">User-Owned.</span>
                  </h2>

                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Your interactions, insights, and personality build a private user profile—
                    <span className="font-semibold text-white">only accessible by you</span>. 
                    Choose what to share, when to share, and get paid ethically through verified data sales.
                  </p>
                </div>

                {/* Right side - Image placeholder */}
                <div className="flex justify-center items-center">
      <div className="w-full max-w-[16rem] sm:max-w-[20rem] h-48 sm:h-60 border border-gray-600 rounded-lg bg-gray-800/50 relative overflow-hidden">
        <Image
          src="/sub-header.png"
          alt="Sub header image"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}