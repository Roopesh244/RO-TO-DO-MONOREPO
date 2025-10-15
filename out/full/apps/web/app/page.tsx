"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen text-white">

      {/* Navbar */}
      <nav className="bg-gray-900 bg-opacity-90 w-full shadow-lg">
        <div className="px-4">
          <div className="flex justify-between items-center py-4">

            {/* Left Section: Logo and Links */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/assets/llogo.png"
                  alt="Logo"
                  className="w-10 h-10 rounded-full"
                  style={{
                    boxShadow: "0 4px 20px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)",
                  }}
                />
                <span className="text-lg font-bold">Ro-To-Do</span>
              </div>
              <ul className="hidden lg:flex space-x-4 font-medium">
                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                <li><a href="#about" className="hover:text-blue-400">About</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                <li><a href="#support" className="hover:text-blue-400">Support</a></li>
              </ul>
            </div>

            {/* Right Section: Login Icon */}
            <div className="flex items-center">
              <Link href="/login">
                <img
                  src="/assets/login.png"
                  alt="Login Icon"
                  className="w-10 h-10 rounded-full hover:scale-105 transition-transform duration-300"
                  style={{
                    boxShadow: "0 4px 15px rgba(16, 185, 129, 0.7), 0 0 10px rgba(16, 185, 129, 0.4)",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl p-4 lg:p-8 space-y-8 lg:space-y-0">
        
        {/* Left Image */}
        <div className="lg:w-1/4 flex justify-center">
          <img
            src="/assets/welcome-left.png"
            alt="Man with Laptop"
            className="w-full max-w-[300px] hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Center Text */}
        <div className="lg:w-1/2 text-center space-y-6">
          <img
            src="/assets/llogo.png"
            alt="Logo"
            className="mx-auto w-48 h-48 rounded-full hover:scale-105 transition-transform duration-300"
            style={{
              boxShadow: "0 4px 20px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)",
            }}
          />
          <h1 className="text-2xl lg:text-3xl font-bold">Ro-To-Do</h1>
          <p className="text-gray-400 text-sm lg:text-base">
            To Do gives you focus, from work to play.
          </p>
          <div className="space-y-3">
            <Link href="/signup">
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-all duration-300"
                style={{
                  boxShadow: "0 4px 10px rgba(59, 130, 246, 0.6), 0 0 10px rgba(59, 130, 246, 0.3)",
                }}
              >
                Get started
              </button>
            </Link>
            <a href="showcase" className="block text-blue-400 hover:underline">Learn more</a>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/4 flex justify-center">
          <img
            src="/assets/welcome-right.png"
            alt="Woman with Phone"
            className="w-full max-w-[200px] hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-2 text-center space-y-3">
        <p className="text-gray-400 font-medium">Download Ro-To-Do</p>
        <div className="flex justify-center space-x-4">
          <img
            src="/assets/android.png"
            alt="Android"
            className="w-8 h-8 rounded-full hover:scale-110 transition-transform duration-300"
            style={{
              boxShadow: "0 4px 15px rgba(16, 185, 129, 0.7), 0 0 10px rgba(16, 185, 129, 0.4)",
            }}
          />
          <img
            src="/assets/apple.png"
            alt="Apple"
            className="w-8 h-8 rounded-full hover:scale-110 transition-transform duration-300"
            style={{
              boxShadow: "0 4px 15px rgba(16, 185, 129, 0.7), 0 0 10px rgba(16, 185, 129, 0.4)",
            }}
          />
          <img
            src="/assets/windows.png"
            alt="Windows"
            className="w-8 h-8 rounded-full hover:scale-110 transition-transform duration-300"
            style={{
              boxShadow: "0 4px 15px rgba(16, 185, 129, 0.7), 0 0 10px rgba(16, 185, 129, 0.4)",
            }}
          />
        </div>
        <p className="text-gray-500 text-sm">Terms of use for Ro-To-Do</p>
      </footer>
    </main>
  );
}
