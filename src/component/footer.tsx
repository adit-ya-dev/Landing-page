"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 sm:py-8 md:py-12 mt-16 sm:mt-24 md:mt-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Logo and Copyright */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 animate-fade-in-up -ml-4 sm:-ml-6">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-white shadow-glow">
                OpenPolitica
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-snug">
              © OpenPolitica 2025. All rights reserved.
            </p>
          </div>

          {/* Pages */}
          <div className="col-span-1 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-4 leading-snug">
              Pages
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-gray-200 text-xs sm:text-sm leading-snug truncate transition-colors duration-200"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-gray-400 hover:text-gray-200 text-xs sm:text-sm leading-snug truncate transition-colors duration-200"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-gray-200 text-xs sm:text-sm leading-snug truncate transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-gray-200 text-xs sm:text-sm leading-snug truncate transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="col-span-1 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-4 leading-snug">
              Socials
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="https://facebook.com"
                  className="text-gray-400 hover:text-gray-200 text-xs sm:text-sm leading-snug truncate transition-colors duration-200"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  className="text-gray-400 hover:text-gray-200 text-xs sm:text-sm leading-snug truncate transition-colors duration-200"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-gray-200 text-xs sm:text-sm leading-snug truncate transition-colors duration-200"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-gray-200 text-xs sm:text-sm leading-snug truncate transition-colors duration-200"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-4 leading-snug">
              Legal
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-gray-200 text-xs sm:text-sm leading-snug truncate transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-gray-200 text-xs sm:text-sm leading-snug truncate transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-400 hover:text-gray-200 text-xs sm:text-sm leading-snug truncate transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Register */}
          <div className="col-span-1 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-4 leading-snug">
              Register
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="/signup"
                  className="text-gray-400 hover:text-gray-200 text-xs sm:text-sm leading-snug truncate transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-gray-400 hover:text-gray-200 text-xs sm:text-sm leading-snug truncate transition-colors duration-200"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/forgot-password"
                  className="text-gray-400 hover:text-gray-200 text-xs sm:text-sm leading-snug truncate transition-colors duration-200"
                >
                  Forget Password
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-gray-700 opacity-20 tracking-widest">
          OpenPolitica
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
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        .shadow-glow {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </footer>
  );
}